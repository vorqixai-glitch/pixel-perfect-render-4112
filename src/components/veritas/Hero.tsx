import { ClientOnly } from "@tanstack/react-router";
import { ProofSphere } from "./ProofSphere";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 scan pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
        {/* Left — copy */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-eyebrow">CLASS·IV · SOVEREIGN INFRASTRUCTURE</span>
            <span className="h-px w-12 bg-border" />
            <span className="text-eyebrow text-signal">v1.0 · LIVE</span>
          </div>

          <h1 className="font-display text-[44px] md:text-[60px] leading-[1.02] tracking-[-0.02em] font-medium">
            Truth, proven
            <br />
            <span className="text-signal">cryptographically.</span>
          </h1>

          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Veritas Core is the forensic authenticity layer for governments, banks,
            and regulated enterprises. Every asset carries an immutable chain of
            custody — auditable independently, defensible legally, irreducible to
            vendor trust.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#engine"
              className="group inline-flex items-center gap-3 bg-signal text-signal-foreground px-5 py-3 font-mono text-[12px] uppercase tracking-[0.18em] hover:bg-signal/90 transition-colors"
            >
              Open Proof Replay
              <span className="w-4 h-px bg-signal-foreground group-hover:w-6 transition-all" />
            </a>
            <a
              href="#sovereignty"
              className="inline-flex items-center gap-3 border border-border px-5 py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
            >
              Architecture Brief
            </a>
          </div>

          {/* metrics strip */}
          <div className="mt-14 grid grid-cols-3 gap-px bg-border">
            {[
              { k: "Verification latency", v: "< 42 ms", sub: "p99 · 6 regions" },
              { k: "Ledger entries", v: "8.41 B", sub: "since 2024-Q3" },
              { k: "Independent audits", v: "100%", sub: "no vendor trust" },
            ].map((m) => (
              <div key={m.k} className="bg-background p-4">
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  {m.k}
                </div>
                <div className="mt-2 font-display text-[22px] tracking-tight">{m.v}</div>
                <div className="text-[10px] font-mono text-muted-foreground/70 mt-0.5">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — sphere (client-only to avoid SVG float hydration mismatch) */}
        <div className="relative">
          <ClientOnly fallback={<div className="aspect-square w-full max-w-[520px] mx-auto" />}>
            <ProofSphere />
          </ClientOnly>
        </div>
      </div>
    </section>
  );
}

