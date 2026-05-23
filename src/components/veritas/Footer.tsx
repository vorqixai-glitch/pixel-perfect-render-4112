export function Footer() {
  return (
    <footer className="hairline-t">
      <div className="mx-auto max-w-[1400px] px-6 py-10 grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 text-[12px] font-mono">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-4 h-4 border border-signal relative">
              <div className="absolute inset-[2px] bg-signal/30" />
            </div>
            <span className="tracking-[0.2em] uppercase">Veritas·Core</span>
          </div>
          <p className="text-muted-foreground max-w-xs text-[11px] leading-relaxed">
            Forensic authenticity infrastructure. Built for institutions that
            cannot accept “trust us.”
          </p>
        </div>

        {[
          { h: "Platform", l: ["Proof Engine", "Ledger", "Public Verify", "API"] },
          { h: "Compliance", l: ["SOC-2 II", "ISO 27001", "FIPS 140-3", "eIDAS"] },
          { h: "Institution", l: ["Architecture brief", "Procurement", "Security disclosure", "Contact"] },
        ].map((c) => (
          <div key={c.h}>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">{c.h}</div>
            <ul className="space-y-2">
              {c.l.map((i) => (
                <li key={i}><a href="#" className="text-foreground/80 hover:text-signal transition-colors">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="hairline-t">
        <div className="mx-auto max-w-[1400px] px-6 py-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground flex-wrap gap-3">
          <span>© 2026 Veritas Core Systems · Sovereign infrastructure</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-verify pulse-dot" />
            Ledger root · 0xE0AA··44C9 · block 8,412,609
          </span>
        </div>
      </div>
    </footer>
  );
}
