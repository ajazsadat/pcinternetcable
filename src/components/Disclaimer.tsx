import { site } from "@/lib/site";
import styles from "./Disclaimer.module.css";

export default function Disclaimer() {
  return (
    <section className={`disclaimer ${styles.wrap}`} aria-label="Offers and disclosures">
      <div className="container">
        <h3>Disclaimer</h3>
        <p>
          {site.organization} (d/b/a {site.domain}) operates as an independent comparison and
          activation platform that helps users explore Internet, TV, wireless, and related plans
          from trusted providers. We do not directly sell, install, or manage any Internet or TV
          services. All services are fulfilled, billed, and supported by the licensed carrier you
          select.
        </p>
        <p>
          Plan details, pricing, and features shown on this website are based on AT&amp;T&apos;s
          official offerings and are subject to change. AT&amp;T and related marks are trademarks
          of their respective owners. {site.organization}{" "}
          is an independent authorized reseller and is not owned, operated, or controlled by
          AT&amp;T.
        </p>

        <p>
          †Speeds based on wired connection. Actual speeds vary. For more info, visit{" "}
          <a href="https://www.att.com/speed101" target="_blank" rel="noreferrer">
            att.com/speed101
          </a>
          .
        </p>

        <p>
          1-GIG Internet Offer: Ends 5/31/2026. New eligible residential customers in select areas
          may receive promotional discounts off the monthly recurring charge for Internet 1000. Pay
          full plan cost until discount starts within 3 bills. Must maintain qualifying speed tier
          for continued receipt of monthly discount. Residents of select multi-dwelling units may
          not be eligible. Autopay &amp; Paperless Bill Discount: $10/mo if enrolled in Autopay
          &amp; paperless billing with your bank account or the AT&amp;T Points Plus® Card from
          Citi. Discount reduced to $5/mo when enrolled with a debit card. No discount if enrolled
          with any other credit card. Discount starts within 3 bills. Must maintain valid email
          address to continue discount. Taxes &amp; Fees: Up to $99 installation fee may apply,
          plus tax where applicable. Monthly State Cost Recovery charge which is not government
          required applies in TX. Taxes also apply. For one-time AT&amp;T transactional fees, see{" "}
          <a href="https://www.att.com/fees" target="_blank" rel="noreferrer">
            att.com/fees
          </a>
          . Pricing subject to change. Subject to Internet Terms of Service at{" "}
          <a href="https://www.att.com/internet-terms" target="_blank" rel="noreferrer">
            att.com/internet-terms
          </a>
          .
        </p>

        <p>
          20% Internet Savings Offer: Ends 5/18/26. New residential customers who sign up for
          AT&amp;T Fiber (300M or higher) and an eligible unlimited postpaid wireless plan may
          receive 20% off the monthly recurring charge for AT&amp;T Fiber plan. Pay full plan cost
          until discount starts within 3 bills and applied before any available Autopay and
          Paperless bill discount. Wireless &amp; Internet accounts must match names and addresses
          to qualify and services are billed separately. Must maintain eligible services for
          continued receipt of 20% discount. One 20% discount per customer account. Customers
          already receiving 25% off eligible unlimited plans not eligible. AT&amp;T employees or
          residents of select multi-dwelling units not eligible. Required Wireless: Postpaid
          unlimited voice &amp; data plan for smartphones. AT&amp;T may temporarily slow data
          speeds if the network is busy. Additional fees, taxes, and other charges &amp;
          restrictions apply.
        </p>

        <p>
          Offer may not be combined with other offers on the same services and may be modified or
          discontinued at any time without notice.
        </p>

        <div className={styles.grid}>
          <div>
            <h4>Offer &amp; Pricing Details</h4>
            <p>
              Promotional pricing may apply for a limited time and is subject to change. After the
              promotional period, standard rates may apply. Discounts may begin within the first
              few billing cycles.
            </p>
          </div>
          <div>
            <h4>Eligibility</h4>
            <p>
              Offers may be available to new residential customers only and may not be available in
              all areas. Certain multi-dwelling units may not qualify.
            </p>
          </div>
          <div>
            <h4>AutoPay &amp; Paperless Billing</h4>
            <p>
              Monthly discounts may apply when enrolled in AutoPay and paperless billing. Discount
              amounts may vary depending on payment method.
            </p>
          </div>
          <div>
            <h4>Fees &amp; Taxes</h4>
            <p>
              Installation fees, equipment charges, and applicable taxes may apply. Pricing
              excludes taxes and surcharges unless otherwise stated.
            </p>
          </div>
          <div>
            <h4>Speeds &amp; Performance</h4>
            <p>
              Internet speeds are based on wired connections. Actual speeds may vary depending on
              network conditions, equipment, and other factors.
            </p>
          </div>
          <div>
            <h4>General Terms</h4>
            <p>
              Offers are subject to change or discontinuation without notice. Additional terms and
              conditions may apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
