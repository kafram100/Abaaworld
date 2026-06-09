import type { Express, Request, Response, NextFunction } from 'express';

const isDev = process.env.NODE_ENV !== 'production';

export function setupErrorHandler(app: Express): void {
  app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    console.error('❌ Error:', err);

    if (err instanceof SyntaxError && 'body' in err) {
      return res.status(400).json({ error: 'Invalid JSON in request body' });
    }

    if (err instanceof Error) {
      if (err.message.includes('ECONNREFUSED')) {
        return res.status(503).json({ error: 'Service temporarily unavailable. Please try again later.' });
      }
      // Only expose raw error details in development
      const message = isDev ? err.message : 'An unexpected error occurred. Please try again later.';
      return res.status(500).json({ error: message });
    }

    res.status(500).json({ error: 'An unexpected error occurred. Please try again later.' });
  });

  app.use((_req: Request, res: Response) => {
    res.status(404).json({ error: 'Not found' });
  });
}
