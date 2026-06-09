import nodemailer from 'nodemailer';

/**
 * Creates a nodemailer transporter from environment variables.
 * Required env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
 * Optional: SMTP_FROM (defaults to SMTP_USER), ADMIN_EMAIL (notification recipient)
 */
function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587');
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

interface EmailPayload {
  name: string;
  email: string;
  organization?: string;
  inquiry_type: string;
  message: string;
}

export async function sendContactEmails(data: EmailPayload): Promise<void> {
  const transporter = createTransporter();

  if (!transporter) {
    console.warn('⚠️  Email not configured — set SMTP_HOST, SMTP_USER, SMTP_PASS to enable notifications.');
    return;
  }

  const from = process.env.SMTP_FROM || process.env.SMTP_USER!;
  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER!;

  // 1. Confirmation email to the person who submitted
  const confirmHtml = `
    <div style="font-family: Georgia, serif; color: #2B2B2B; max-width: 600px; margin: 0 auto;">
      <p style="font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase; color: #C7A54B;">ABAA · Message Received</p>
      <h1 style="font-size: 28px; font-weight: 500; color: #0F172A; margin: 16px 0;">Thank you, ${data.name}.</h1>
      <div style="width: 48px; height: 1px; background: #C7A54B; margin-bottom: 24px;"></div>
      <p style="font-size: 16px; font-style: italic; color: #555; line-height: 1.7;">
        Your message has been received. ABAA's team reviews every inquiry personally and responds within 48 hours.
      </p>
      <p style="margin-top: 32px; font-size: 14px; color: #888;">— ABAA</p>
    </div>
  `;

  // 2. Notification email to admin
  const adminHtml = `
    <div style="font-family: Arial, sans-serif; color: #2B2B2B; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0F172A;">New Contact Inquiry</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 8px; font-weight: bold; width: 160px;">Name</td><td style="padding: 8px;">${data.name}</td></tr>
        <tr style="background:#f5f5f5;"><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${data.email}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Organization</td><td style="padding: 8px;">${data.organization || '—'}</td></tr>
        <tr style="background:#f5f5f5;"><td style="padding: 8px; font-weight: bold;">Inquiry Type</td><td style="padding: 8px;">${data.inquiry_type}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Message</td><td style="padding: 8px; white-space: pre-wrap;">${data.message}</td></tr>
      </table>
    </div>
  `;

  await Promise.allSettled([
    transporter.sendMail({
      from,
      to: data.email,
      subject: 'Your message to ABAA has been received',
      html: confirmHtml,
    }),
    transporter.sendMail({
      from,
      to: adminEmail,
      replyTo: data.email,
      subject: `[ABAA] New ${data.inquiry_type} inquiry from ${data.name}`,
      html: adminHtml,
    }),
  ]);
}
