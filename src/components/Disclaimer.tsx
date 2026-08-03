import { site } from "@/lib/site";
import styles from "./Disclaimer.module.css";

export default function Disclaimer() {
  return (
    <section id="disclaimer" className={`disclaimer ${styles.wrap}`} aria-label="Disclaimer">
      <div className="container">
        <h3>Disclaimer:</h3>
        <p>
          {site.organization} operates as an independent comparison platform that helps users
          explore and evaluate Internet and TV plans from multiple trusted providers. We do not
          directly sell, install, or manage any Internet or TV services.
        </p>
      </div>
    </section>
  );
}
