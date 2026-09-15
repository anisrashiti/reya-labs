import { contactConfig } from '@/config/contact';

export type Inquiry = {
  name: string;
  company: string;
  email: string;
  message: string;
};
export type InquiryErrors = Partial<Record<keyof Inquiry, string>>;
export type SubmissionResult = {
  status: 'sent' | 'unavailable' | 'error';
  message: string;
};

export function validateInquiry(values: Inquiry): InquiryErrors {
  const errors: InquiryErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.';
  if (values.message.trim().length < 10)
    errors.message =
      'Tell us a little more about what you need (at least 10 characters).';
  return errors;
}

/** Connect a POST endpoint that returns { success: true } after accepting an inquiry. */
export async function submitInquiry(
  values: Inquiry,
): Promise<SubmissionResult> {
  if (!contactConfig.submissionEndpoint) {
    return {
      status: 'unavailable',
      message:
        'Your details are ready, but message delivery is not available yet. Nothing has been sent. Your details remain in this form.',
    };
  }
  try {
    const response = await fetch(contactConfig.submissionEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) throw new Error('Submission rejected');
    const result: unknown = await response.json();
    if (
      !result ||
      typeof result !== 'object' ||
      !('success' in result) ||
      result.success !== true
    )
      throw new Error('Submission not confirmed');
    return {
      status: 'sent',
      message:
        'Your inquiry has been sent. Thank you for telling us about your project.',
    };
  } catch {
    return {
      status: 'error',
      message:
        'Your inquiry could not be sent. Please try again. Your details are still here.',
    };
  }
}
