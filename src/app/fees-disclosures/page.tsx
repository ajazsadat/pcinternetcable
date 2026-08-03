import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fees & Disclosures",
  description: `Fees and disclosures for ${site.name}, operated by ${site.organization}.`,
};

export default function FeesDisclosuresPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Fees & Disclosures"
        description={`${site.organization} (d/b/a ${site.domain}) does not charge customers any additional fees for consulting, comparison, or connection assistance.`}
      />

      <section className="section">
        <div className="container prose">
          <p>
            Any applicable installation, activation, or equipment fees are determined and charged
            directly by the service provider, not by {site.organization}.
          </p>
          <p>
            We may receive a one-time or recurring commission from our partner providers for
            successful activations or continued customer relationships. These payments are part of
            standard industry partnerships and do not influence our recommendations — our goal is to
            match customers with the most suitable service for their needs and location.
          </p>
          <p>
            All offers, pricing, and promotions are subject to provider terms and availability.
            Taxes, surcharges, early termination fees, and equipment charges may apply and are the
            responsibility of the customer under their agreement with the provider.
          </p>

          <h2>Need clarification?</h2>
          <p>
            Call <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a> or email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> and our team will walk through any fees
            before you proceed.
          </p>
        </div>
      </section>
    </>
  );
}
