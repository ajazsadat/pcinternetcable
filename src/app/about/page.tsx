import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.organization} and how PC Internet Cable helps customers compare and activate internet, TV, and wireless plans.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built to make choosing service less confusing"
        description={`${site.organization} operates PC Internet Cable so households and businesses can compare connectivity options with clearer guidance — then activate through licensed providers.`}
      />

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <div className="prose">
            <h2>What we stand for</h2>
            <p>
              Most people do not want a dozen browser tabs open just to understand internet pricing.
              PC Internet Cable exists to give you a steadier starting point: check what can reach
              your address, talk through plan types, and move forward when you are ready.
            </p>
            <p>
              We focus on practical matches — location, household usage, and budget — rather than
              promoting one carrier for every situation.
            </p>

            <h2>Who runs this site</h2>
            <p>
              {site.organization} (d/b/a {site.domain}) is an independent authorized sales partner
              and reseller. We are not owned, operated, or controlled by any ISP or wireless carrier.
              Service delivery, billing, and technical support remain with the licensed provider you
              select.
            </p>
            <p>
              When a qualifying order is placed through our team or partner programs, we may receive
              a commission or referral incentive. That compensation does not change the price you are
              offered by the provider.
            </p>

            <h2>Important disclosures</h2>
            <p>
              Pricing, promotions, and availability come from carrier data and can change. We do not
              guarantee every offer in every area. Always confirm final details with your selected
              provider before activation. Full details are also listed on our{" "}
              <Link href="/reseller-disclosure">Reseller Disclosure</Link> and{" "}
              <Link href="/fees-disclosures">Fees &amp; Disclosures</Link> pages.
            </p>

            <h2>How we help day to day</h2>
            <ul>
              <li>Check service availability by address or ZIP code</li>
              <li>Compare speeds, packages, and common fees</li>
              <li>Coordinate activation with licensed carriers</li>
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
