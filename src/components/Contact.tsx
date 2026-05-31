"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/data/portfolio";
import { FadeIn } from "./FadeIn";

type FormState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    botcheck: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setErrorMessage(
        "Contact form is not configured. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local."
      );
      setFormState("error");
      return;
    }

    if (formData.message.trim().length < 10) {
      setErrorMessage("Message must be at least 10 characters.");
      setFormState("error");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          subject: `Portfolio inquiry from ${formData.name.trim()}`,
          from_name: "Portfolio Contact Form",
          replyto: formData.email.trim(),
          botcheck: formData.botcheck,
        }),
      });

      const text = await res.text();
      let data: { success?: boolean; message?: string };
      try {
        data = JSON.parse(text) as { success?: boolean; message?: string };
      } catch {
        setErrorMessage("Unexpected response from email service. Please try again.");
        setFormState("error");
        return;
      }

      if (!res.ok || !data.success) {
        setErrorMessage(data.message ?? "Failed to send message. Please try again.");
        setFormState("error");
        return;
      }

      setFormState("success");
      setFormData({ name: "", email: "", message: "", botcheck: "" });
    } catch {
      setErrorMessage("Network error. Check your connection and try again.");
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <FadeIn>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Reach out via email, WhatsApp, or the form below
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <FadeIn delay={100}>
            <div className="space-y-6">
              <ContactCard
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
                icon={<EmailIcon />}
              />
              <ContactCard
                label="WhatsApp"
                value={profile.whatsapp.display}
                href={profile.whatsapp.href}
                icon={<WhatsAppIcon />}
                external
                highlight
              />
              <ContactCard
                label="Location"
                value={profile.location}
                icon={<LocationIcon />}
              />
              <ContactCard
                label="LinkedIn"
                value="norman-gutierrez"
                href={profile.linkedin}
                icon={<LinkedInIcon />}
                external
              />
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <form
              onSubmit={handleSubmit}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8"
            >
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((d) => ({ ...d, name: e.target.value }))
                    }
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-slate-600 dark:bg-slate-950 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((d) => ({ ...d, email: e.target.value }))
                    }
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-slate-600 dark:bg-slate-950 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((d) => ({ ...d, message: e.target.value }))
                    }
                    className="mt-1 w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-slate-600 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                {/* Honeypot — hidden from users, traps bots (Web3Forms botcheck) */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  checked={!!formData.botcheck}
                  onChange={(e) =>
                    setFormData((d) => ({
                      ...d,
                      botcheck: e.target.checked ? "on" : "",
                    }))
                  }
                />
              </div>

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="mt-6 w-full rounded-lg bg-accent py-3 text-sm font-semibold text-white transition hover:bg-accent-dark disabled:opacity-60 dark:bg-accent-light dark:text-slate-900 dark:hover:bg-teal-300"
              >
                {formState === "submitting" ? "Sending…" : "Send Message"}
              </button>

              {formState === "success" && (
                <p className="mt-3 text-center text-sm text-emerald-600 dark:text-emerald-400" role="status">
                  Message sent successfully. I&apos;ll get back to you soon.
                </p>
              )}

              {formState === "error" && errorMessage && (
                <p className="mt-3 text-center text-sm text-red-600 dark:text-red-400" role="alert">
                  {errorMessage}
                </p>
              )}

              <p className="mt-4 text-center text-xs text-slate-400">
                Prefer chat?{" "}
                <a
                  href={profile.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-emerald-600 hover:underline dark:text-emerald-400"
                >
                  Message on WhatsApp
                </a>
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  label,
  value,
  href,
  icon,
  external,
  highlight,
}: {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
  external?: boolean;
  highlight?: boolean;
}) {
  const content = (
    <div
      className={`flex items-center gap-4 rounded-xl border p-4 transition ${
        highlight
          ? "border-emerald-500/40 bg-emerald-50 hover:bg-emerald-100 dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:hover:bg-emerald-950/60"
          : "border-slate-200 bg-white hover:border-accent/50 dark:border-slate-800 dark:bg-slate-900"
      }`}
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
          highlight
            ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
            : "bg-accent/10 text-accent dark:bg-accent-light/10 dark:text-accent-light"
        }`}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {label}
        </p>
        <p
          className={`font-medium ${
            highlight
              ? "text-emerald-700 dark:text-emerald-300"
              : "text-slate-900 dark:text-white"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}

function EmailIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
