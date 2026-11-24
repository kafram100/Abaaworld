import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { initializeDatabase, closeDatabase } from './utils/db.js';
import { setupContactRoutes } from './routes/contact.js';
import { setupErrorHandler } from './middleware/errorHandler.js';

const app = express();
const port = parseInt(process.env.PORT || '5000');

// Trust reverse proxy (e.g. Cloudflare, Nginx, Render, Heroku) for accurate IP rate limiting
app.set('trust proxy', 1);

const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:8080';
if (!process.env.CORS_ORIGIN && process.env.NODE_ENV === 'production') {
  console.warn('⚠️  CORS_ORIGIN is not set. All browser requests will be blocked in production!');
}

// Middleware
app.use(cors({
  origin: corsOrigin,
  credentials: true,
}));
app.use(express.json());

// Rate limiting - contact form: max 10 submissions per 15 min per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many submissions. Please try again later.' },
});

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
const router = express.Router();
router.use('/api/contact', contactLimiter);
await setupContactRoutes(router);
app.use(router);

// Error handling
setupErrorHandler(app);

// Server startup
async function start(): Promise<void> {
  try {
    // Initialize database
    await initializeDatabase();

    // Start server
    app.listen(port, () => {
      console.log(`\n🚀 ABAA Server running at http://localhost:${port}`);
      console.log(`📝 Contact API: POST http://localhost:${port}/api/contact`);
      console.log(`❤️  Health check: GET http://localhost:${port}/health\n`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('📛 SIGTERM signal received: closing HTTP server');
  await closeDatabase();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('📛 SIGINT signal received: closing HTTP server');
  await closeDatabase();
  process.exit(0);
});

start();
