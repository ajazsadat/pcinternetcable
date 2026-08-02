import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name} operated by ${site.organization}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container reveal">
          <p className="eyebrow" style={{ color: "#7ce7dc" }}>
            Legal
          </p>
          <h1>Privacy Policy</h1>
          <p>
            At {site.organization} (d/b/a {site.domain}), your privacy is our priority. We are
            dedicated to safeguarding your personal data and ensuring transparency about how we
            collect, use, and protect the information you share.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              Personal details such as your name, email address, phone number, and business
              information when you complete a form or request our services.
            </li>
            <li>Service preferences or interest areas to help us provide relevant offers.</li>
            <li>
              Technical information like your IP address, browser type, and device data for
              analytical and security purposes.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Communicate with you about the services or inquiries you&apos;ve requested.</li>
            <li>
              Connect you with the most relevant telecom providers that align with your
              requirements.
            </li>
            <li>Enhance our website performance and customer service experience.</li>
            <li>
              Provide updates, offers, or promotional content — but only when you&apos;ve given your
              consent.
            </li>
          </ul>

          <h2>Sharing Your Information</h2>
          <ul>
            <li>We do not sell your information to third parties.</li>
            <li>
              We may share your information with authorized telecom providers and our master
              dealer(s) strictly for the purpose of service provisioning, activation, or customer
              support.
            </li>
            <li>
              All providers we partner with are contractually obligated to protect your information
              in accordance with applicable data protection laws.
            </li>
          </ul>

          <h2>Consent &amp; Communication</h2>
          <p>By providing your information on our website, you agree to:</p>
          <ul>
            <li>
              Receive communications via email, phone, or SMS related to your service requests or
              activation process.
            </li>
            <li>Allow us to use your information in accordance with this Privacy Policy.</li>
            <li>Opt out of marketing messages whenever you choose.</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement reasonable technical and organizational security protocols to secure your
            personal data from unauthorized access, misuse, or disclosure.
          </p>

          <h2>Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal information by
            contacting us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> or calling{" "}
            <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may revise this Privacy Policy at any time. Any updates will be published on this
            page along with the new effective date.
          </p>

          <h2>Contact</h2>
          <p>
            {site.organization}
            <br />
            {site.address.full}
            <br />
            <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
