"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";
import styles from "./Header.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/live-agent", label: "Live Agent" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.disclaimerBar} role="note">
        <div className={`container ${styles.disclaimerInner}`}>
          <p>
            <strong>Disclaimer:</strong> {site.organization} (d/b/a {site.domain}) is an
            independent comparison platform. We do not directly sell, install, or manage Internet
            or TV services. All services are fulfilled and billed by licensed carriers.
          </p>
        </div>
      </div>

      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.mark} aria-hidden="true" />
          <span className={styles.brandText}>
            <strong>PC Internet Cable</strong>
            <small>by {site.organization}</small>
          </span>
        </Link>

        <button
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.srOnly}>Menu</span>
          <span />
          <span />
          <span />
        </button>

        <nav id="site-nav" className={`${styles.nav} ${open ? styles.open : ""}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? styles.active : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a className={`btn btn-primary ${styles.call}`} href={`tel:${site.phoneTel}`}>
            Call {site.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
