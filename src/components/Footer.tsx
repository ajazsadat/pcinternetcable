import Link from "next/link";
import { site } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.brand}>PC Internet Cable</p>
          <p className={styles.copy}>
            {site.organization} (d/b/a {site.domain}) is an independent authorized
            reseller helping households and businesses compare and activate
            broadband, TV, wireless, and related services.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
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

      <div className={`container ${styles.bottom}`}>
        <p>
          © {new Date().getFullYear()} {site.organization}. All rights reserved.
        </p>
        <p>
          We are not an internet service provider and do not own or operate network
          infrastructure. Services are fulfilled and billed by licensed carriers.
        </p>
      </div>
    </footer>
  );
}
