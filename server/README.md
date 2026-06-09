# ABAA Backend Server

Express.js + MySQL backend for the ABAA personal brand website.

## Quick Start

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Set Up MySQL

**Option A: Using Docker (Recommended)**

```bash
docker run --name abaa-mysql \
  -e MYSQL_ROOT_PASSWORD=your_password \
  -e MYSQL_DATABASE=abaa_db \
  -p 3306:3306 \
  -d mysql:8.0
```

**Option B: Local MySQL Installation**

Install MySQL 8.0+ from https://dev.mysql.com/downloads/mysql/

Create database:
```bash
mysql -u root -p
CREATE DATABASE abaa_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 3. Configure Environment

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Edit `.env`:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=abaa_db
PORT=5000
CORS_ORIGIN=http://localhost:8080
```

### 4. Run Migrations

```bash
npm run migrate
```

This creates the `contact_inquiries` table with proper indexes and constraints.

### 5. Start Development Server

```bash
npm run dev
```

Server will run on: `http://localhost:5000`

Test health check: `curl http://localhost:5000/health`

---

## API Endpoints

### Contact Form Submission

**POST** `/api/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "organization": "Acme Corp",
  "inquiry_type": "Speaking",
  "message": "I would like to invite ABAA to speak at our event..."
}
```

**Response (Success):**
```json
{
  "ok": true,
  "message": "Your inquiry has been received. We will be in touch shortly."
}
```

**Response (Error):**
```json
{
  "error": "Name is required (max 200 characters)"
}
```

### Health Check

**GET** `/health`

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2026-06-08T16:11:33.000Z"
}
```

---

## Database Schema

### contact_inquiries Table

```sql
CREATE TABLE contact_inquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  email VARCHAR(320) NOT NULL,
  organization VARCHAR(200),
  inquiry_type VARCHAR(100) NOT NULL,
  message LONGTEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  INDEX idx_email (email),
  INDEX idx_inquiry_type (inquiry_type),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

---

## Project Structure

```
server/
├── src/
│   ├── index.ts              # Main Express app
│   ├── middleware/
│   │   ├── validation.ts     # Form validation
│   │   └── errorHandler.ts   # Error handling
│   ├── routes/
│   │   └── contact.ts        # Contact form routes
│   └── utils/
│       └── db.ts             # MySQL connection pool
├── migrations/
│   └── 001_create_contact_inquiries.sql
├── scripts/
│   └── migrate.ts            # Migration runner
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── eslint.config.js
```

---

## Development

### Build for Production

```bash
npm run build
```

Compiled output goes to `dist/`

### Lint Code

```bash
npm run lint
```

### Production Deployment

```bash
npm run build
npm start
```

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DB_HOST` | ✅ | MySQL host (default: localhost) |
| `DB_PORT` | ✅ | MySQL port (default: 3306) |
| `DB_USER` | ✅ | MySQL username |
| `DB_PASSWORD` | ✅ | MySQL password |
| `DB_NAME` | ✅ | Database name (default: abaa_db) |
| `PORT` | ❌ | Server port (default: 5000) |
| `CORS_ORIGIN` | ❌ | Frontend URL for CORS (default: http://localhost:8080) |
| `NODE_ENV` | ❌ | Environment: development, production |

---

## Troubleshooting

### Connection Refused

If you get "ECONNREFUSED", make sure MySQL is running:

```bash
# macOS
brew services list

# Windows (check Services app)
# or
mysql --version

# Docker
docker ps | grep mysql
```

### Database Not Found

Run migrations:
```bash
npm run migrate
```

### CORS Issues

Make sure `CORS_ORIGIN` in `.env` matches your frontend URL:
```env
CORS_ORIGIN=http://localhost:8080
```

### Port Already in Use

Change the PORT in `.env`:
```env
PORT=5001
```

---

## Next Steps

1. ✅ Set up MySQL locally
2. ✅ Run migrations
3. ✅ Start dev server
4. ⬜ Test contact form from frontend
5. ⬜ Add email notifications (Resend/SMTP)
6. ⬜ Add rate limiting
7. ⬜ Deploy to production

---

## Tech Stack

- **Runtime:** Node.js 18+
- **Framework:** Express.js 4.18
- **Database:** MySQL 8.0
- **Language:** TypeScript 5.8
- **Validation:** Custom validation middleware
- **CORS:** cors 2.8
- **Environment:** dotenv 16.4

---

For questions or issues, check the main project README or contact ABAA.
