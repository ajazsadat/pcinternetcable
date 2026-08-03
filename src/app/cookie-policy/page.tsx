import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie Policy for ${site.name}.`,
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        description="Our website uses cookies and similar technologies to enhance your browsing experience, analyze traffic, and improve our marketing efforts. Cookies are small text files stored on your device that help us remember your preferences and understand how visitors interact with our site."
      />

      <section className="section">
        <div className="container prose">
          <h2>How We Use Cookies</h2>
          <ul>
            <li>
              <strong>Essential cookies:</strong> enable basic site functionality and security.
            </li>
            <li>
              <strong>Analytics cookies:</strong> help us measure website performance and visitor
              behavior (for example, Google Analytics).
            </li>
            <li>
              <strong>Marketing cookies:</strong> support advertising campaigns and may be used for
              retargeting through Google Ads or other platforms.
            </li>
          </ul>

          <h2>Managing Cookies</h2>
          <p>
            You can accept, reject, or customize cookie preferences at any time using your browser
            settings. Most browsers allow you to block or delete cookies; however, some site features
            may not function properly without them.
          </p>
          <p>
            By using our website, you consent to our use of cookies as described in this policy. For
            more details on how we handle personal data, please refer to our{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this Cookie Policy can be sent to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
