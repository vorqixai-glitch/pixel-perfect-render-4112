import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/veritas/Nav";
import { Hero } from "@/components/veritas/Hero";
import { ProofReplay } from "@/components/veritas/ProofReplay";
import { Sovereignty } from "@/components/veritas/Sovereignty";
import { Telemetry } from "@/components/veritas/Telemetry";
import { Deployment } from "@/components/veritas/Deployment";
import { CTA } from "@/components/veritas/CTA";
import { Footer } from "@/components/veritas/Footer";
import { WaitlistForm } from "@/components/veritas/WaitlistForm";

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
      { name: "twitter:card", content: "summary_large_image" },
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
        <section id="access" className="py-24 md:py-32 border-t border-border">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-start">
              <div>
                <p className="text-eyebrow mb-4">Restricted enrollment</p>
                <h2 className="font-display text-3xl md:text-4xl tracking-tight">
                  Request sovereign access
                </h2>
                <p className="mt-4 text-muted-foreground max-w-md">
                  Veritas Core is deployed to regulated institutions on a rolling basis. Submit your
                  organization details to join the early-access ledger.
                </p>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

