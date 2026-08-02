"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";
import styles from "./ContactForm.module.css";

type Props = {
  compact?: boolean;
};

export default function ContactForm({ compact = false }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const packages = data
      .getAll("packages")
      .map((value) => String(value))
      .filter(Boolean);

    setPending(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") || ""),
          phone: String(data.get("phone") || ""),
          email: String(data.get("email") || ""),
          address: String(data.get("address") || ""),
          provider: String(data.get("provider") || ""),
          usage: String(data.get("usage") || ""),
          packages,
          consent: data.get("consent") === "on",
        }),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Unable to send your request right now.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send your request right now.");
    } finally {
      setPending(false);
    }
  }

  if (submitted) {
    return (
      <div className={styles.success} role="status">
        <h3>Thanks — we received your request</h3>
        <p>
          A specialist will follow up shortly. For faster help, call us now at{" "}
          <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className={`${styles.form} ${compact ? styles.compact : ""}`} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <label>
          Name
          <input name="name" type="text" required autoComplete="name" placeholder="Your full name" disabled={pending} />
        </label>
        <label>
          Phone
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(555) 555-5555"
            disabled={pending}
          />
        </label>
      </div>

      <div className={styles.row}>
        <label>
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            disabled={pending}
          />
        </label>
        <label>
          Address / ZIP
          <input
            name="address"
            type="text"
            required
            autoComplete="postal-code"
            placeholder="Street or ZIP code"
            disabled={pending}
          />
        </label>
      </div>

      {!compact && (
        <>
          <div className={styles.row}>
            <label>
              Current Provider
              <select name="provider" defaultValue="AT&T" disabled={pending}>
                <option>AT&T</option>
                <option>Spectrum</option>
                <option>Xfinity</option>
                <option>Other</option>
                <option>None</option>
              </select>
            </label>
            <label>
              Devices in Home
              <select name="usage" defaultValue="1 to 4" disabled={pending}>
                <option>1 to 4</option>
                <option>5 to 8</option>
                <option>8 to 12</option>
                <option>12+</option>
              </select>
            </label>
          </div>

          <fieldset disabled={pending}>
            <legend>Packages of interest</legend>
            <div className={styles.checks}>
              {["Fiber", "Cable", "Wireless", "Landline", "TV"].map((item) => (
                <label key={item} className={styles.check}>
                  <input type="checkbox" name="packages" value={item} defaultChecked={item === "Fiber"} />
                  {item}
                </label>
              ))}
            </div>
          </fieldset>
        </>
      )}

      <label className={styles.consent}>
        <input type="checkbox" name="consent" required disabled={pending} />
        <span>
          I agree to the terms &amp; conditions and{" "}
          <a href="/privacy-policy">privacy policy</a> provided by PC Internet Cable.
          By providing my phone number, I agree to receive text messages and calls from
          PC Internet Cable / {site.organization}. Consent is not a condition of purchase.
        </span>
      </label>

      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}

      <button type="submit" className="btn btn-primary" disabled={pending}>
        {pending ? "Sending..." : "Request Free Quote"}
      </button>
    </form>
  );
}
