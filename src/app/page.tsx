import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import styles from "./page.module.css";

const services = [
  {
    title: "Home Internet",
    body: "From everyday browsing to multi-device households, we help you find fiber, cable, and fixed-wireless options that match how you actually use the web.",
  },
  {
    title: "TV & Entertainment",
    body: "Look at cable packages and streaming bundles with clearer pricing so you can keep the channels you want without guessing at add-on costs.",
  },
  {
    title: "Mobile & Wireless",
    body: "Compare phone plans, device deals, and port-in offers through authorized partners when you want home and mobile service in one conversation.",
  },
  {
    title: "Voice Lines",
    body: "Explore residential and business calling options, including multi-line setups, when a dedicated phone line still matters for your home or office.",
  },
  {
    title: "Connected Home Security",
    body: "Review smart monitoring, cameras, and alert packages so protection and connectivity can be planned together — not as an afterthought.",
  },
];

const reasons = [
  {
    title: "Local-first recommendations",
    body: "Availability changes by address. We start with what can actually be installed where you live or work.",
  },
  {
    title: "Clearer cost conversations",
    body: "We walk through monthly rates, equipment, and common add-ons before you commit, so fewer surprises show up later.",
  },
  {
    title: "Activation coordination",
    body: "Once you choose a plan, we help move the order forward with the provider’s authorized process.",
  },
  {
    title: "Provider-backed ordering",
    body: "Orders go through verified partner channels — we are not inventing plans or billing you separately for service.",
  },
  {
    title: "Coverage across the U.S.",
    body: "Whether you are moving, upgrading, or shopping for a second location, we can check options in many markets nationwide.",
  },
  {
    title: "No-pressure quotes",
    body: "Ask questions, compare offers, and decide on your timeline. There is no purchase requirement to get help.",
  },
];

const faqs = [
  {
    q: "Which internet providers can I find through your platform?",
    a: `We partner with a network of licensed resellers, authorized retailers, and master-dealer distributors representing leading U.S. telecom and internet service brands. Availability and offers vary by ZIP code — enter your ZIP or call us at ${site.phoneDisplay} to view current plan options in your area.`,
  },
  {
    q: "How can I qualify for special promotions or discounts?",
    a: "Promotional eligibility is determined by each provider’s individual policies, location, and credit requirements. During your free consultation, our representatives will outline available promotions, qualifying terms, and applicable timelines — with absolutely no purchase obligation.",
  },
  {
    q: "What does it mean to be an “authorized reseller” or “partner network”?",
    a: "We are not the direct provider of internet, wireless, or cable services. Instead, we operate as an authorized reseller and licensed retailer for multiple carrier and service networks across the U.S. This means we’re approved to market, compare, and facilitate service orders through official partner and master-dealer programs — giving customers access to more plan options in one place.",
  },
  {
    q: "Are there any installation or equipment costs?",
    a: "Any setup, equipment, or activation fees are determined by the selected provider and plan type. Before you proceed with any order, our team will clearly present all related costs, fees, and requirements as outlined by the provider.",
  },
  {
    q: "How is installation arranged once I select a plan?",
    a: "Once you confirm your selection, our team coordinates the process with your chosen provider’s certified installation partner. Most installations are completed within 24–48 hours, depending on technician availability and local scheduling.",
  },
  {
    q: "Who should I contact for support after installation?",
    a: `After your service has been successfully activated, all technical support, billing, and account management are handled directly by your selected provider. However, you can always reach our support line at ${site.phoneDisplay} for general questions, plan guidance, or assistance connecting with your provider’s support team.`,
  },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-label="Hero">
        <div className={styles.heroMedia}>
          <Image
            src="/images/hero-fiber.jpg"
            alt="Fiber optic network cables glowing with light"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={`${styles.heroCopy} reveal`}>
            <h1 className={styles.brandLockup}>PC Internet Cable</h1>
            <p className={styles.heroHeadline}>
              Better home and business connections start with the right plan
            </p>
            <p>
              Shopping for internet or TV should not feel like decoding fine print. Our specialists
              help you check what is available at your address, compare practical options, and get
              set up with a licensed provider.
            </p>
            <div className={`${styles.ctaGroup} reveal reveal-delay-1`}>
              <a className="btn btn-primary" href={`tel:${site.phoneTel}`}>
                Call {site.phoneDisplay}
              </a>
              <a className="btn btn-secondary" href="#request-quote">
                Request a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.who}`}>
        <div className={`container ${styles.whoInner}`}>
          <div className={styles.whoCopy}>
            <p className="eyebrow">About PC Internet Cable</p>
            <h2>A simpler way to choose connectivity</h2>
            <p>
              {site.organization} runs PC Internet Cable as an independent authorized reseller. That
              means we help households and businesses evaluate service options — then facilitate
              ordering through official partner programs.
            </p>
            <p>
              We do not build networks, send technicians from our own crew, or bill your monthly
              service. The licensed carrier you select handles delivery, billing, and ongoing account
              support.
            </p>
            <Link className="btn btn-outline" href="/about">
              Read our story
            </Link>
          </div>
          <div className={styles.whoVisual}>
            <Image
              src="/images/about-network.jpg"
              alt="Abstract network and data visualization"
              width={720}
              height={480}
            />
          </div>
        </div>
      </section>

      <section className={`section ${styles.offer}`}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Services we help with</p>
            <h2>One conversation for the connections you need</h2>
            <p>
              Tell us how your household or business uses the internet, and we will help you sort
              through realistic plan types — without pushing a single brand.
            </p>
          </div>
          <div className={styles.offerGrid}>
            {services.map((item) => (
              <article key={item.title} className={styles.offerItem}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.why}`}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why people call us</p>
            <h2>Practical help from first quote to go-live</h2>
            <p>
              Our job is to reduce confusion — availability, pricing language, and next steps —
              so you can decide with confidence.
            </p>
          </div>
          <div className={styles.whyGrid}>
            {reasons.map((item) => (
              <article key={item.title} className={styles.whyItem}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.steps}`}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Simple process</p>
            <h2>From ZIP code to connected — without the runaround</h2>
          </div>
          <div className={styles.stepsGrid}>
            {[
              ["01", "Share your address", "We verify which services can reach your location."],
              ["02", "Review your options", "Compare speeds, packages, and common fees side by side."],
              ["03", "Pick your plan", "Choose what fits your usage and budget — no rush."],
              ["04", "We help activate", "Our team coordinates ordering with the licensed provider."],
            ].map(([num, title, body]) => (
              <article key={num} className={styles.step}>
                <span className={styles.stepNumber}>{num}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.guide}`}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Buying tips</p>
            <h2>What to weigh before you switch providers</h2>
          </div>
          <div className={styles.guideGrid}>
            <article className={styles.guideItem}>
              <h3>Match speed to real usage</h3>
              <p>
                Think about remote work, 4K streaming, gaming, and how many devices stay online at
                once. Upload speed matters just as much as download for video calls and cloud tools.
              </p>
            </article>
            <article className={styles.guideItem}>
              <h3>Read past the intro rate</h3>
              <p>
                Promotions can look great for a few months. Ask what the standard rate becomes later,
                and whether equipment rentals are included or billed separately.
              </p>
            </article>
            <article className={styles.guideItem}>
              <h3>Budget for the full picture</h3>
              <p>
                Installation, taxes, surcharges, and early-termination rules can change the true
                monthly cost. We help surface those details before you place an order.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={`section ${styles.faq}`}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">FAQs</p>
            <h2>Common questions before you get started</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((item) => (
              <article key={item.q} className={styles.faqItem}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.quote}`} id="request-quote">
        <div className={`container ${styles.quoteInner}`}>
          <div className={styles.quoteCopy}>
            <p className="eyebrow">Request a quote</p>
            <h2>Tell us where you need service</h2>
            <p>
              Share a few details and we will follow up with options available near you. Prefer to
              talk now? Call {site.phoneDisplay} or visit our{" "}
              <Link href="/live-agent">live agent</Link> page.
            </p>
            <ul>
              <li>Free, no-obligation consultation</li>
              <li>Availability checked by address or ZIP</li>
              <li>Help comparing plans and promotions</li>
            </ul>
          </div>
          <div className={styles.quoteForm}>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className={`section ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaBand}>
            <div>
              <h2>Ready when you are</h2>
              <p>
                Whether you are upgrading a slow connection or setting up service at a new address,
                PC Internet Cable is here to help you compare and activate with clarity.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a className="btn btn-primary" href={`tel:${site.phoneTel}`}>
                Call {site.phoneDisplay}
              </a>
              <Link className="btn btn-secondary" href="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
