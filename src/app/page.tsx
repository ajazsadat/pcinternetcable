import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import styles from "./page.module.css";

const offers = [
  {
    title: "Internet Plans",
    body: "Compare fiber, cable, and fixed-wireless options — from essential home connections to high-speed gigabit service.",
  },
  {
    title: "TV & Streaming",
    body: "Browse cable and streaming bundles with clear pricing, straightforward terms, and simple installation scheduling.",
  },
  {
    title: "Wireless Services",
    body: "Find phone plans and devices with competitive trade-in and port-in offers from authorized network partners.",
  },
  {
    title: "Home & Business Phone",
    body: "Explore unlimited calling options, advanced voicemail features, and multi-line packages for home or business.",
  },
  {
    title: "Home Security",
    body: "Safeguard your home with smart alarms, video doorbells, and mobile alerts — clear terms and no hidden fees.",
  },
];

const reasons = [
  {
    title: "Independent Guidance",
    body: "We help you compare options and recommend what fits your location, needs, and budget.",
  },
  {
    title: "Transparent Pricing",
    body: "Quotes include taxes, fees, and equipment details whenever available — fewer surprises.",
  },
  {
    title: "Real Support",
    body: "Our team helps coordinate installation and activation directly with the provider.",
  },
  {
    title: "Secure Process",
    body: "Orders are placed through verified, provider-authorized systems.",
  },
  {
    title: "Nationwide Coverage",
    body: "Access plans from major providers across the United States.",
  },
  {
    title: "No Obligation Quotes",
    body: "Check availability and pricing with a free consultation — purchase is never required to get help.",
  },
];

const plans = [
  {
    name: "AT&T Internet 300",
    speed: "300 Mbps",
    price: "$55",
    note: "Price after $10/mo discount with eligible Autopay & Paperless bill (within 3 bills). Ltd. avail/areas.",
    points: [
      "Game, stream, and video chat with confidence",
      "Support smart home devices",
      "Symmetrical fiber speeds where available",
    ],
  },
  {
    name: "AT&T Internet 500",
    speed: "500 Mbps",
    price: "$65",
    note: "Price after $10/mo discount with eligible Autopay & Paperless bill (within 3 bills). Ltd. avail/areas.",
    points: [
      "Level up gaming with lower lag",
      "Connect multiple devices with ease",
      "Strong choice for busy households",
    ],
  },
  {
    name: "AT&T Internet 1000",
    speed: "Up to 1 GIG",
    price: "$65",
    note: "Price after $10/mo discount with eligible Autopay & Paperless bill (within 3 bills). Ltd. avail/areas.",
    points: [
      "Speed for work, streaming, and pro-level gaming",
      "Power a full smart-home ecosystem",
      "Great for multi-user households",
    ],
  },
  {
    name: "AT&T Internet 2000",
    speed: "2 GIG",
    price: "$125",
    note: "Promotional and Autopay discounts may apply for new customers in select areas.",
    points: [
      "Built for powerfully connected homes",
      "Supports next-gen devices and creative work",
      "All-Fi Pro included on select tiers",
    ],
  },
  {
    name: "AT&T Internet 5000",
    speed: "5 GIG",
    price: "$155",
    note: "Promotional and Autopay discounts may apply for new customers in select areas.",
    points: [
      "Maximum speed for immersive experiences",
      "Ideal for high-demand households",
      "All-Fi Pro included on this tier",
    ],
  },
  {
    name: "AT&T Internet 100",
    speed: "100 Mbps",
    price: "$45",
    note: "Price after $10/mo discount with eligible Autopay & Paperless bill (within 3 bills). Ltd. avail/areas.",
    points: [
      "Casual streaming, browsing, and gaming",
      "Supports some smart home devices",
      "A solid entry-level option where available",
    ],
  },
];

const faqs = [
  {
    q: "Which internet providers can I find through your platform?",
    a: `We partner with licensed resellers, authorized retailers, and master-dealer distributors representing leading U.S. telecom brands — including AT&T. Availability and offers vary by ZIP code. Call ${site.phoneDisplay} to view current options in your area.`,
  },
  {
    q: "How can I qualify for special promotions or discounts?",
    a: "Promotional eligibility is determined by each provider’s policies, location, and credit requirements. During your free consultation, our representatives outline available promotions, qualifying terms, and timelines — with no purchase obligation.",
  },
  {
    q: "What does it mean to be an authorized reseller?",
    a: "We are not the direct provider of internet, wireless, or cable services. We operate as an authorized reseller and licensed retailer, approved to market, compare, and facilitate service orders through official partner programs.",
  },
  {
    q: "Are there any installation or equipment costs?",
    a: "Setup, equipment, and activation fees are determined by the selected provider and plan. Before you proceed, our team presents related costs, fees, and requirements as outlined by the provider.",
  },
  {
    q: "How is installation arranged once I select a plan?",
    a: "Once you confirm your selection, our team coordinates with your chosen provider’s certified installation partner. Many installations can be completed within 24–48 hours, depending on technician availability.",
  },
  {
    q: "Who should I contact for support after installation?",
    a: `After activation, technical support, billing, and account management are handled directly by your selected provider. You can always reach us at ${site.phoneDisplay} for general questions or help connecting with provider support.`,
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
            <p className={styles.brandLockup}>PC Internet Cable</p>
            <h1>Find reliable Internet, TV &amp; wireless plans near you</h1>
            <p>
              If your connection is slow, inconsistent, or too expensive — we can help you compare
              trusted U.S. broadband options and activate the plan that fits your home or business.
            </p>
            <div className={`${styles.ctaGroup} reveal reveal-delay-1`}>
              <a className="btn btn-primary" href={`tel:${site.phoneTel}`}>
                Call {site.phoneDisplay}
              </a>
              <a className="btn btn-secondary" href="#get-started">
                Get a Free Quote
              </a>
            </div>
          </div>
          <div className={`${styles.formPane} reveal reveal-delay-2`} id="get-started">
            <ContactForm compact />
          </div>
        </div>
      </section>

      <section className={`section ${styles.who}`}>
        <div className={`container ${styles.whoInner}`}>
          <div className={styles.whoCopy}>
            <p className="eyebrow">Who we are</p>
            <h2>Independent help connecting to the right plan</h2>
            <p>
              {site.organization} (d/b/a {site.domain}) is an independent, authorized reseller that
              works with leading broadband, cable, and wireless providers. We don&apos;t favor any
              carrier — our recommendations are based on your location, your needs, and your budget.
            </p>
            <p>
              We are not an internet service provider and do not own or operate network
              infrastructure. All services are fulfilled and billed directly by licensed carriers.
            </p>
            <Link className="btn btn-outline" href="/about">
              Learn more about us
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
            <p className="eyebrow">What we offer</p>
            <h2>Compare trusted services. Choose what fits you best.</h2>
            <p>
              We help you explore plans and get connected through licensed service providers —
              easily and transparently.
            </p>
          </div>
          <div className={styles.offerGrid}>
            {offers.map((item) => (
              <article key={item.title} className={styles.offerItem}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.att}`} id="att">
        <div className="container">
          <div className={styles.attIntro}>
            <div>
              <p className={styles.attBadge}>Featured Provider · AT&amp;T</p>
              <h2>AT&amp;T Fiber internet plans available in your area</h2>
              <p>
                PC Internet Cable is an authorized AT&amp;T dealer. We help you check availability,
                compare speed tiers, and coordinate activation. We do not provide AT&amp;T customer
                service or manage AT&amp;T accounts — all service-related support is handled
                directly by AT&amp;T.
              </p>
            </div>
            <div className={styles.priceRow}>
              <div className={styles.priceCard}>
                <span>1-Gig with eligible wireless + Autopay</span>
                <strong>$17</strong>
                <span>/mo. plus taxes* · select areas</span>
              </div>
              <div className={styles.priceCard}>
                <span>Standalone AT&amp;T 1-Gig Internet</span>
                <strong>$35</strong>
                <span>/mo. plus taxes* · Autopay &amp; paperless</span>
              </div>
            </div>
          </div>

          <div className={styles.attPlans}>
            {plans.map((plan) => (
              <article key={plan.name} className={styles.plan}>
                <div className={styles.planHead}>
                  <h3>{plan.name}</h3>
                  <div className={styles.planPrice}>{plan.price}</div>
                </div>
                <p>
                  <strong>{plan.speed}</strong> · {plan.note}
                </p>
                <ul className={styles.planList}>
                  {plan.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className={styles.likes}>
            <div className={styles.likesBox}>
              <h3>Why customers choose AT&amp;T Fiber</h3>
              <ul>
                <li>Wide fiber availability in many urban and suburban areas</li>
                <li>Multiple speed tiers for households of all sizes</li>
                <li>Reliable connection for streaming, gaming, and remote work</li>
                <li>Optional bundle deals and promotional pricing for new customers</li>
              </ul>
            </div>
            <div className={styles.likesBox}>
              <h3>Things to consider</h3>
              <ul>
                <li>Actual speeds depend on location, equipment, and network conditions</li>
                <li>Certain multi-dwelling units may not be eligible for fiber plans</li>
                <li>Taxes, fees, and installation charges may apply</li>
                <li>Promotional pricing is limited-time and subject to change</li>
              </ul>
            </div>
          </div>

          <div className={styles.ctaGroup} style={{ marginTop: "2rem" }}>
            <a className="btn btn-primary" href={`tel:${site.phoneTel}`}>
              Check AT&amp;T Availability
            </a>
            <a className="btn btn-outline" href="#get-started">
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      <section className={`section ${styles.why}`}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why customers choose us</p>
            <h2>Clear guidance from quote to activation</h2>
            <p>One convenient place to explore options, understand pricing, and get connected.</p>
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
            <p className="eyebrow">How it works</p>
            <h2>Four simple steps to get connected</h2>
          </div>
          <div className={styles.stepsGrid}>
            {[
              ["01", "Check Availability", "Enter your ZIP code or speak with a specialist."],
              ["02", "Compare Plans", "Review internet, TV, and wireless options side-by-side."],
              ["03", "Choose & Activate", "We help coordinate setup directly with the provider."],
              ["04", "You’re Ready", "One call or one form — switch or upgrade with confidence."],
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
            <p className="eyebrow">Service selection guide</p>
            <h2>How to choose the right internet provider</h2>
          </div>
          <div className={styles.guideGrid}>
            <article className={styles.guideItem}>
              <h3>Evaluate speed &amp; reliability</h3>
              <p>
                Compare advertised speeds, upload performance, and support quality — especially if
                you stream, game, or work remotely.
              </p>
            </article>
            <article className={styles.guideItem}>
              <h3>Make the most of promotions</h3>
              <p>
                Look at introductory offers, bundle discounts, and equipment deals. Always check
                what standard rates will be after the promo ends.
              </p>
            </article>
            <article className={styles.guideItem}>
              <h3>Understand the full cost</h3>
              <p>
                Factor in setup fees, equipment charges, taxes, and possible early termination
                costs so you can budget with confidence.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={`section ${styles.faq}`}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">FAQs</p>
            <h2>Answers before you switch</h2>
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

      <section className={`section ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaBand}>
            <div>
              <h2>Ready to upgrade your connection?</h2>
              <p>
                Call {site.phoneDisplay} or request a free, no-obligation quote. Our experts walk
                you through plans, pricing, and promotions so you can upgrade with confidence.
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
