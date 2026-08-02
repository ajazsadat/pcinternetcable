import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact PC Internet Cable at ${site.phoneDisplay} for internet, TV, and wireless plan help.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container reveal">
          <p className="eyebrow" style={{ color: "#7ce7dc" }}>
            Contact
          </p>
          <h1>Are you looking for new internet services?</h1>
          <p>
            Explore plans, pricing, and exclusive offers in your area with a specialist — or get
            help with an existing account question.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div className={styles.cards}>
            <article className={styles.card}>
              <p className="eyebrow">New service</p>
              <h2>Speak with an expert</h2>
              <p>
                Check availability, compare AT&amp;T Fiber and other options, and get a free
                no-obligation quote for your address.
              </p>
              <a className="btn btn-primary" href={`tel:${site.phoneTel}`}>
                Call {site.phoneDisplay}
              </a>
            </article>

            <article className={styles.card}>
              <p className="eyebrow">Existing account</p>
              <h2>Need support?</h2>
              <p>
                After activation, billing and technical support are handled by your provider. We can
                still help with general questions or connect you to the right support path.
              </p>
              <a className="btn btn-dark" href={`tel:${site.phoneTel}`}>
                Call Now
              </a>
            </article>

            <article className={styles.details}>
              <h3>Organization details</h3>
              <ul>
                <li>
                  <strong>Company:</strong> {site.organization}
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>
                  <strong>Address:</strong> {site.address.full}
                </li>
              </ul>
            </article>
          </div>

          <div>
            <div className={styles.formIntro}>
              <h2>Request a free quote</h2>
              <p>Share a few details and we&apos;ll follow up with options available near you.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
