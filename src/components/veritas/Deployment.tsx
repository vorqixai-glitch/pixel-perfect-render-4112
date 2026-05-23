const tracks = [
  {
    sector: "Fintech & Banking",
    use:    "Transaction provenance, regulator-facing audit trails, dispute evidence.",
    code:   "FIN·01",
  },
  {
    sector: "Healthcare & Pharma",
    use:    "HIPAA-grade record lineage, clinical trial integrity, prescription chain-of-custody.",
    code:   "MED·02",
  },
  {
    sector: "Legal & Evidence",
    use:    "Deposition sealing, contract version proofs, court-admissible export packets.",
    code:   "LGL·03",
  },
  {
    sector: "AI Provenance",
    use:    "Model attestation, generated-asset signing, prompt-to-output lineage.",
    code:   "AI·04",
  },
  {
    sector: "Government & Defense",
    use:    "Sovereign records, classified asset chain-of-custody, inter-agency witness quorum.",
    code:   "GOV·05",
  },
  {
    sector: "Media & Newsroom",
    use:    "Source verification, deepfake refutation, signed publication record.",
    code:   "MED·06",
  },
];

export function Deployment() {
  return (
    <section id="deployment" className="py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="text-eyebrow mb-4">05 · Deployment Surfaces</div>
            <h2 className="font-display text-[36px] leading-[1.05] tracking-tight max-w-2xl">
              One authenticity layer.
              <br />
              <span className="text-muted-foreground">Every regulated domain.</span>
            </h2>
          </div>
          <div className="font-mono text-[11px] text-muted-foreground tracking-[0.16em] uppercase">
            6 active tracks · 19 in pilot
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {tracks.map((t) => (
            <article
              key={t.code}
              className="bg-card p-6 group hover:bg-accent transition-colors relative"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-signal">
                  Track · {t.code}
                </span>
                <span className="w-6 h-px bg-border group-hover:bg-signal transition-colors" />
              </div>
              <h3 className="font-display text-[20px] tracking-tight">{t.sector}</h3>
              <p className="mt-3 text-[12px] font-mono leading-relaxed text-muted-foreground">
                {t.use}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground group-hover:text-signal transition-colors">
                <span>Spec brief</span>
                <span>→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
