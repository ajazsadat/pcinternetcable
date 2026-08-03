import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for ${site.name}, operated by ${site.organization}.`,
};

export default function TermsConditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description={`Welcome to ${site.organization} (d/b/a ${site.domain}). By using our website, services, or any content we provide, you agree to these Terms & Conditions. Please review them carefully before continuing.`}
      />

      <section className="section">
        <div className="container prose">
          <h2>Introduction</h2>
          <p>
            {site.organization} (d/b/a {site.domain}) is a certified third-party reseller connecting
            customers with licensed telecommunications and technology service providers across the
            United States.
          </p>
          <p>
            We do not own or operate any internet, cable, wireless, or communication networks. Our
            role is to help customers find, compare, and activate the right provider based on their
            needs and location.
          </p>

          <h2>Service Role &amp; Limitation</h2>
          <ul>
            <li>
              {site.organization} serves as a facilitator and advisory partner, assisting you in
              finding and selecting suitable services from our partner providers.
            </li>
            <li>
              The selected provider is solely responsible for service installation, activation,
              billing, refunds, cancellations, and technical support.
            </li>
            <li>
              While we aim to provide accurate and current information, {site.organization} cannot
              guarantee pricing, speed, availability, or promotional details, as these may differ by
              provider and location.
            </li>
          </ul>

          <h2>Customer Responsibility</h2>
          <p>By engaging with {site.name}:</p>
          <ul>
            <li>
              You confirm that all information you provide (including address, contact details, and
              service preferences) is accurate and complete.
            </li>
            <li>
              You agree to follow the terms and service conditions of the chosen provider once your
              order is submitted or activated.
            </li>
            <li>
              You acknowledge that {site.organization} is not responsible for modifications,
              disruptions, or disputes related to the provider&apos;s service performance.
            </li>
          </ul>

          <h2>Privacy &amp; Data Use</h2>
          <p>
            We collect only the personal information needed to process your request, connect you with
            providers, and improve our services. Your data is handled securely in accordance with our
            Privacy Policy. We do not sell or share your personal information with unauthorized third
            parties.
          </p>

          <h2>Payments &amp; Commissions</h2>
          <ul>
            <li>
              {site.organization} does not charge customers directly for consultation or comparison
              assistance.
            </li>
            <li>
              We may earn commissions or referral fees from providers when a customer activates a
              service through our platform. This does not influence pricing or our recommendations —
              offers are presented fairly and transparently.
            </li>
          </ul>

          <h2>Disclaimer of Liability</h2>
          <p>
            {site.organization} provides all information and recommendations &quot;as is.&quot; We
            make no warranties, express or implied, regarding:
          </p>
          <ul>
            <li>Service quality, uptime, or performance of any provider.</li>
            <li>Accuracy or completeness of provider details, offers, or availability.</li>
          </ul>
          <p>
            Under no circumstances shall {site.organization} be held liable for losses, service
            interruptions, delays, or damages caused by third-party providers or network issues.
          </p>

          <h2>Modifications</h2>
          <ul>
            <li>
              {site.organization} may update or revise these Terms &amp; Conditions at any time.
            </li>
            <li>
              Any modifications will be published on this page. Your continued use of our website or
              services after such revisions signifies your acceptance of the updated terms.
            </li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            For questions, support, or inquiries, please contact our team at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
            <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>.
          </p>
          <p>
            {site.organization}
            <br />
            {site.address.full}
          </p>
        </div>
      </section>
    </>
  );
}
