import type { Router, Request, Response } from 'express';
import { validateContactForm } from '../middleware/validation.js';
import { executeQuery } from '../utils/db.js';
import { sendContactEmails } from '../utils/email.js';

export async function setupContactRoutes(router: Router): Promise<void> {
  router.post('/api/contact', async (req: Request, res: Response) => {
    try {
      const validation = validateContactForm(req.body);
      
      if (!validation.valid) {
        return res.status(400).json({ error: validation.error });
      }

      const { name, email, organization, inquiry_type, message } = validation.data;

      const sql = `
        INSERT INTO contact_inquiries 
        (name, email, organization, inquiry_type, message, created_at) 
        VALUES (?, ?, ?, ?, ?, NOW())
      `;

      await executeQuery(sql, [
        name,
        email,
        organization || null,
        inquiry_type,
        message,
      ]);

      console.log(`✅ Contact inquiry received from ${email}`);

      // Send confirmation + admin notification emails (non-blocking)
      sendContactEmails({ name, email, organization, inquiry_type, message })
        .catch((err) => console.error('⚠️  Email send error (non-fatal):', err));

      return res.status(200).json({
        ok: true,
        message: 'Your inquiry has been received. We will be in touch shortly.',
      });
    } catch (error) {
      console.error('❌ Contact form error:', error);
      return res.status(500).json({
        error: 'Failed to submit inquiry. Please try again later.',
      });
    }
  });

  router.get('/api/contact/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok' });
  });
}
