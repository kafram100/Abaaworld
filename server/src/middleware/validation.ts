export interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  inquiry_type: string;
  message: string;
}

export function validateContactForm(
  data: unknown
): { valid: true; data: ContactFormData } | { valid: false; error: string } {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Invalid payload' };
  }

  const body = data as Record<string, unknown>;
  
  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const organization = String(body.organization ?? '').trim();
  const inquiry_type = String(body.inquiry_type ?? '').trim();
  const message = String(body.message ?? '').trim();

  if (name.length < 1 || name.length > 200) {
    return { valid: false, error: 'Name is required (max 200 characters)' };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 320) {
    return { valid: false, error: 'Valid email address required (max 320 characters)' };
  }

  if (organization.length > 200) {
    return { valid: false, error: 'Organization name is too long (max 200 characters)' };
  }

  if (inquiry_type.length < 1 || inquiry_type.length > 100) {
    return { valid: false, error: 'Inquiry type is required (max 100 characters)' };
  }

  if (message.length < 1 || message.length > 5000) {
    return { valid: false, error: 'Message is required (max 5000 characters)' };
  }

  return {
    valid: true,
    data: {
      name,
      email,
      organization: organization || undefined,
      inquiry_type,
      message,
    },
  };
}
