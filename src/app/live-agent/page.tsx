import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";
import styles from "./live-agent.module.css";

export const metadata: Metadata = {
  title: "Live Agent",
  description: `Speak with a live agent from ${site.name} for internet service help.`,
};

export default function LiveAgentPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="How would you like to connect for internet services and assistance?"
        description="Reach a specialist for availability checks, plan comparisons, activation help, or general questions about getting connected."
      />

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <article className={styles.card}>
            <p className="eyebrow">Phone call</p>
            <h2>Speak with a live agent</h2>
            <p>
              Call our team for real-time help comparing plans, checking offers in your area, and
              coordinating activation with licensed providers.
            </p>
            <a className="btn btn-primary" href={`tel:${site.phoneTel}`}>
              Call Now — {site.phoneDisplay}
            </a>
          </article>

          <article className={styles.card}>
            <p className="eyebrow">Message us</p>
            <h2>Chat with a specialist</h2>
            <p>
              Prefer to leave your details? Send a quote request and a specialist will follow up with
              options available near you.
            </p>
            <Link className="btn btn-dark" href="/contact">
              Chat Now / Request Quote
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
