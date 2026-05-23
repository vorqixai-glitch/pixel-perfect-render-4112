const levels = [
  {
    n: "L1",
    title: "Interface trust",
    body: "Looks professional. Replicable in 3 months. Defensibility: none.",
    state: "dim",
  },
  {
    n: "L2",
    title: "Functional trust",
    body: "Works reliably. Replicable in 6 months. Defensibility: low.",
    state: "dim",
  },
  {
    n: "L3",
    title: "Cryptographic trust",
    body: "Mathematically provable. 12–24 months to replicate. Defensibility: high.",
    state: "on",
  },
  {
    n: "L4",
    title: "Sovereignty trust",
    body: "Auditable without us. Verifiable without authority. Defensibility: existential.",
    state: "core",
  },
];

export function Sovereignty() {
  return (
    <section id="sovereignty" className="py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div>
            <div className="text-eyebrow mb-4">03 · Trust Hierarchy</div>
            <h2 className="font-display text-[36px] leading-[1.05] tracking-tight">
              Most platforms ask
              <br />
              you to trust them.
            </h2>
            <p className="mt-6 text-[14px] text-muted-foreground leading-relaxed">
              Veritas Core asks you to verify it. Sovereignty is the only category
              of trust regulators, auditors, and insurers price at a premium.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {levels.map((l) => (
              <div
                key={l.n}
                className={`bg-card p-6 relative ${
                  l.state === "core" ? "border border-signal/60" : ""
                }`}
              >
                <div className="flex items-baseline justify-between mb-5">
                  <span className={`font-mono text-[11px] tracking-[0.2em] uppercase ${
                    l.state === "core" ? "text-signal" : "text-muted-foreground"
                  }`}>
                    Level · {l.n}
                  </span>
                  {l.state === "core" && (
                    <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-signal border border-signal/60 px-1.5 py-0.5">
                      Veritas Core
                    </span>
                  )}
                </div>
                <h3 className={`font-display text-[20px] tracking-tight ${
                  l.state === "dim" ? "text-muted-foreground" : ""
                }`}>
                  {l.title}
                </h3>
                <p className="mt-3 text-[12px] font-mono leading-relaxed text-muted-foreground">
                  {l.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
