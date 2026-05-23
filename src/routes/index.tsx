import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/veritas/Nav";
import { Hero } from "@/components/veritas/Hero";
import { ProofReplay } from "@/components/veritas/ProofReplay";
import { Sovereignty } from "@/components/veritas/Sovereignty";
import { Telemetry } from "@/components/veritas/Telemetry";
import { Deployment } from "@/components/veritas/Deployment";
import { CTA } from "@/components/veritas/CTA";
import { Footer } from "@/components/veritas/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veritas Core — Forensic Authenticity Infrastructure" },
      {
        name: "description",
        content:
          "Sovereign-grade cryptographic chain-of-truth for governments, banks, and regulated enterprises. The only verification platform institutions can audit independently.",
      },
      { property: "og:title", content: "Veritas Core — Forensic Authenticity Infrastructure" },
      {
        property: "og:description",
        content:
          "Truth, proven cryptographically. Immutable proof, forensic replay, independent verification.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <ProofReplay />
        <Sovereignty />
        <Telemetry />
        <Deployment />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
