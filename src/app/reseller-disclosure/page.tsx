import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reseller Disclosure",
  description: `Reseller disclosure for ${site.name} and ${site.organization}.`,
};

export default function ResellerDisclosurePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Reseller Disclosure"
        description={`${site.organization} (d/b/a ${site.domain}) is an independent authorized sales partner and reseller that helps customers compare, select, and activate broadband, wireless, and digital services across the United States.`}
      />

      <section className="section">
        <div className="container prose">
          <p>
            We are not owned, operated, or controlled by any internet service provider (ISP) or
            carrier. All broadband and wireless services are delivered, billed, and supported
            directly by the respective licensed providers.
          </p>
          <p>
            {site.organization} may receive a commission or referral incentive from these providers
            when a customer activates or purchases a qualifying service through our platform or sales
            team. These commissions do not affect pricing — the customer pays the same rates offered
            directly by the provider.
          </p>
          <p>
            All service information, including pricing, availability, and terms, is based on data
            provided by each carrier. We do not guarantee availability or pricing accuracy in all
            areas, and customers are encouraged to confirm final details with their chosen provider
            prior to activation.
          </p>

          <h2>Questions?</h2>
          <p>
            Reach us at <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
            <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
