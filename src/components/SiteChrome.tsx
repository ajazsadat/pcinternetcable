"use client";

import { usePathname } from "next/navigation";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLiveAgent = pathname === "/live-agent";

  return (
    <>
      {!isLiveAgent ? <Header /> : null}
      <main id="main" className={`site-main ${isLiveAgent ? "site-main-bare" : ""}`}>
        {children}
      </main>
      {!isLiveAgent ? <Disclaimer /> : null}
      {!isLiveAgent ? <Footer /> : null}
    </>
  );
}
