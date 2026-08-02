import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";
import { site } from "@/lib/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} | Internet, TV & Wireless Plans`,
    template: `%s | ${site.name}`,
  },
  description:
    "PC Internet Cable helps you compare and activate reliable Internet, TV, and wireless plans from trusted U.S. providers, including AT&T Fiber.",
  openGraph: {
    title: site.name,
    description:
      "Compare Internet, TV, and wireless plans near you. Authorized reseller helping you activate the right connection.",
    url: `https://${site.domain}`,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${figtree.variable}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main" className="site-main">
          {children}
        </main>
        <Disclaimer />
        <Footer />
      </body>
    </html>
  );
}
