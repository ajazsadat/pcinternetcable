import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.organization} and how PC Internet Cable helps customers compare and activate internet, TV, and wireless plans.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container reveal">
          <p className="eyebrow" style={{ color: "#7ce7dc" }}>
            About us
          </p>
          <h1>Connecting homes and businesses to better service</h1>
          <p>
            {site.organization} operates PC Internet Cable as an independent authorized reseller —
            helping you compare, choose, and activate broadband and related services with clarity.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <div className="prose">
            <h2>Our purpose</h2>
            <p>
              Finding the right internet or TV plan shouldn&apos;t mean sorting through confusing
              offers alone. PC Internet Cable gives you a single, convenient place to explore
              high-speed Internet, Cable TV, Home Phone, Wireless, and Home Security options —
              featuring availability checks, upfront pricing guidance, and easy installation
              coordination.
            </p>
            <p>
              As an independent authorized retailer and licensed reseller for leading U.S. telecom
              and home service providers, we focus on matching you with plans that fit your
              location, usage, and budget.
            </p>

            <h2>Who we are</h2>
            <p>
              {site.organization} (d/b/a {site.domain}) is an independent authorized sales partner
              and reseller. We are not owned, operated, or controlled by any internet service
              provider or carrier. All broadband and wireless services are delivered, billed, and
              supported directly by the respective licensed providers.
            </p>
            <p>
              We may receive a commission or referral incentive from providers when a customer
              activates or purchases a qualifying service through our platform or sales team. These
              commissions do not affect pricing — customers pay the same rates offered by the
              provider.
            </p>

            <h2>Reseller disclosure</h2>
            <p>
              All service information, including pricing, availability, and terms, is based on data
              provided by each carrier. We do not guarantee availability or pricing accuracy in all
              areas, and customers are encouraged to confirm final details with their chosen
              provider prior to activation.
            </p>
            <p>
              We are not an internet service provider and do not own or operate network
              infrastructure. Our role is to help you compare options and facilitate orders through
              official partner and master-dealer programs.
            </p>

            <h2>How we help</h2>
            <ul>
              <li>Check plan availability by address or ZIP code</li>
              <li>Compare speeds, promotions, and total estimated costs</li>
              <li>Coordinate activation and installation with licensed carriers</li>
              <li>Answer questions before and during the ordering process</li>
            </ul>

            <div className={styles.actions}>
              <a className="btn btn-primary" href={`tel:${site.phoneTel}`}>
                Call {site.phoneDisplay}
              </a>
              <Link className="btn btn-outline" href="/contact">
                Contact our team
              </Link>
            </div>
          </div>

          <aside className={styles.aside}>
            <div className={styles.asideCard}>
              <Image
                src="/images/about-network.jpg"
                alt="Network infrastructure visualization"
                width={560}
                height={360}
              />
              <div className={styles.asideBody}>
                <h3>{site.organization}</h3>
                <p>d/b/a {site.domain}</p>
                <ul>
                  <li>
                    <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </li>
                  <li>{site.address.line1}</li>
                  <li>{site.address.line2}</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
