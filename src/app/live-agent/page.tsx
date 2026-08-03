import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import styles from "./live-agent.module.css";

export const metadata: Metadata = {
  title: "Live Agent",
  description: `Speak with a live agent from ${site.name} for internet service help.`,
};

const phonePretty = "888-557-1823";

export default function LiveAgentPage() {
  return (
    <section className={styles.page}>
      <div className={styles.decor} aria-hidden="true" />

      <div className={styles.content}>
        <h1 className={styles.heading}>
          <span>How Would You Like To Connect For Internet</span>
          <span className={styles.headingAccent}>Services And Assistance?</span>
        </h1>

        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                <path
                  d="M6.6 2.8c.4-.4 1-.5 1.5-.3l2.2 1c.5.2.8.7.8 1.2v2.3c0 .4-.2.8-.5 1L9.3 9.3c.8 1.7 2.1 3.1 3.8 4l1.3-1.2c.3-.3.7-.5 1.1-.5h2.3c.5 0 1 .3 1.2.8l1 2.2c.2.5.1 1.1-.3 1.5l-1.4 1.4c-.4.4-1 .6-1.6.5C10.5 17.2 6.8 13.5 5.1 7.3c-.1-.6.1-1.2.5-1.6L6.6 2.8Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2>Phone Call</h2>
            <p className={styles.sub}>To Speak With A Live Agent</p>
            <div className={styles.rule} />
            <a className={styles.callBtn} href={`tel:${site.phoneTel}`}>
              <span className={styles.callIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path
                    d="M6.6 2.8c.4-.4 1-.5 1.5-.3l2.2 1c.5.2.8.7.8 1.2v2.3c0 .4-.2.8-.5 1L9.3 9.3c.8 1.7 2.1 3.1 3.8 4l1.3-1.2c.3-.3.7-.5 1.1-.5h2.3c.5 0 1 .3 1.2.8l1 2.2c.2.5.1 1.1-.3 1.5l-1.4 1.4c-.4.4-1 .6-1.6.5C10.5 17.2 6.8 13.5 5.1 7.3c-.1-.6.1-1.2.5-1.6L6.6 2.8Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className={styles.callText}>
                <strong>Call Now</strong>
                <em>{phonePretty}</em>
              </span>
            </a>
          </article>

          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                <path
                  d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v7A2.5 2.5 0 0 1 16.5 16H10l-3.2 2.6c-.5.4-1.3 0-1.3-.7V6.5Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2>Send Us a Message</h2>
            <p className={styles.sub}>Prefer not to call? Fill out our contact form and we&apos;ll follow up.</p>
            <div className={styles.rule} />
            <Link className={styles.chatBtn} href="/contact">
              Contact Form
            </Link>
          </article>
        </div>

        <div className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true" />
          <div>
            <strong>PC INTERNET CABLE</strong>
            <small>BY {site.organization.toUpperCase()}</small>
          </div>
        </div>
      </div>
    </section>
  );
}
