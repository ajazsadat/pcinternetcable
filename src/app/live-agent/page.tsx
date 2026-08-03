import type { Metadata } from "next";
import { site } from "@/lib/site";
import styles from "./live-agent.module.css";

export const metadata: Metadata = {
  title: "Live Agent",
  description: `Speak with a live agent from ${site.name} for internet service help.`,
};

export default function LiveAgentPage() {
  return (
    <section className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <h1>Call now and we&apos;ll walk you through your options.</h1>
        <a className={`btn btn-primary ${styles.call}`} href={`tel:${site.phoneTel}`}>
          Call Now — {site.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
