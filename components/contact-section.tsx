'use client';

import { useRef, useState } from 'react';
import type { SubmitEvent } from 'react';
import { contactConfig } from '@/config/contact';
import {
  submitInquiry,
  validateInquiry,
  type Inquiry,
  type InquiryErrors,
  type SubmissionResult,
} from '@/lib/contact';
import { SectionLabel } from './section-label';
import { Arrow } from './arrow';

export function ContactSection() {
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmissionResult | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const textField = (key: string) => {
      const value = data.get(key);
      return typeof value === 'string' ? value.trim() : '';
    };
    const values: Inquiry = {
      name: textField('name'),
      company: textField('company'),
      email: textField('email'),
      message: textField('message'),
    };
    const validation = validateInquiry(values);
    setErrors(validation);
    setResult(null);
    const firstInvalid = Object.keys(validation)[0];
    if (firstInvalid) {
      (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }
    setSubmitting(true);
    const response = await submitInquiry(values);
    setResult(response);
    setSubmitting(false);
    if (response.status === 'sent') formRef.current?.reset();
  }

  return (
    <section
      id="contact"
      className="home-section contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="contact-finale">
        <div className="brand-atmosphere" aria-hidden="true" />
        <SectionLabel number="05">Your next chapter</SectionLabel>
        <h2 id="contact-heading" data-reveal>
          <span className="contact-question">Something<br />in mind?</span>
          <a href="#project-form" className="contact-invitation">Let’s build it. <Arrow diagonal /></a>
        </h2>
      </div>
      <div className="contact-layout" data-reveal>
        <div className="contact-intro">
          <p>
            A website, a platform,
            <br />
            or something entirely your own.
          </p>
          <div className="contact-email">
            <span>Prefer email?</span>
            {contactConfig.email ? (
              <a href={`mailto:${contactConfig.email}`}>
                {contactConfig.email}
                <Arrow diagonal />
              </a>
            ) : (
              <p>Email address coming soon.</p>
            )}
          </div>
        </div>
        <form
          id="project-form"
          ref={formRef}
          noValidate
          onSubmit={handleSubmit}
          className="contact-form"
          aria-label="Start a project"
          aria-describedby={
            !contactConfig.submissionEndpoint
              ? 'contact-availability'
              : undefined
          }
        >
          <div className="form-two-columns">
            <div className="form-field">
              <label htmlFor="inquiry-name">Name</label>
              <input
                id="inquiry-name"
                name="name"
                autoComplete="name"
                required
                maxLength={120}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'error-name' : undefined}
              />
              {errors.name && (
                <p className="field-error" id="error-name">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="inquiry-company">
                Company <span>(optional)</span>
              </label>
              <input
                id="inquiry-company"
                name="company"
                autoComplete="organization"
                maxLength={160}
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="inquiry-email">Email</label>
            <input
              id="inquiry-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'error-email' : undefined}
            />
            {errors.email && (
              <p className="field-error" id="error-email">
                {errors.email}
              </p>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="inquiry-message">What do you need?</label>
            <textarea
              id="inquiry-message"
              name="message"
              rows={3}
              required
              minLength={10}
              maxLength={5000}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'error-message' : undefined}
            />
            {errors.message && (
              <p className="field-error" id="error-message">
                {errors.message}
              </p>
            )}
          </div>
          {!contactConfig.submissionEndpoint && (
            <p id="contact-availability" className="form-note">
              Message delivery is not available yet. Nothing entered here is
              sent or saved.
            </p>
          )}
          <button
            className="contact-submit"
            type="submit"
            disabled={submitting}
          >
            {submitting ? 'Sending…' : 'Start a project'}
            <Arrow />
          </button>
          <output
            className={`form-status${result ? ' has-result' : ''}`}
            aria-live="polite"
            aria-atomic="true"
          >
            {result?.message}
          </output>
        </form>
      </div>
    </section>
  );
}
