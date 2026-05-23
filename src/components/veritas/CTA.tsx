export function CTA() {
  return (
    <section id="access" className="hairline-t bg-card/40">
      <div className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="panel panel-corner p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 scan pointer-events-none" />
          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <div>
              <div className="text-eyebrow mb-5">06 · Restricted enrollment</div>
              <h2 className="font-display text-[36px] md:text-[48px] leading-[1.02] tracking-tight">
                Access is granted to
                <br />
                <span className="text-signal">qualified institutions only.</span>
              </h2>
              <p className="mt-6 max-w-xl text-[14px] text-muted-foreground leading-relaxed">
                Veritas Core is deployed under sovereign-grade procurement. Enrollment
                begins with an architecture review and a mutual NDA. We do not run
                trials. We run pilots that become infrastructure.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-3"
            >
              {[
                { l: "Organization", p: "e.g. Ministry of Finance" },
                { l: "Role",         p: "CISO · General Counsel · Compliance" },
                { l: "Secure email", p: "you@institution.gov" },
              ].map((f) => (
                <label key={f.l} className="block">
                  <span className="block text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-1.5">
                    {f.l}
                  </span>
                  <input
                    placeholder={f.p}
                    className="w-full bg-background border border-border px-3 py-2.5 font-mono text-[12px] focus:outline-none focus:border-signal placeholder:text-muted-foreground/50"
                  />
                </label>
              ))}
              <button
                type="submit"
                className="w-full bg-signal text-signal-foreground py-3 font-mono text-[12px] uppercase tracking-[0.2em] hover:bg-signal/90 transition-colors"
              >
                Submit for review
              </button>
              <p className="text-[10px] font-mono text-muted-foreground/70 leading-relaxed pt-1">
                Average review: 4 business days. All inquiries logged to ledger
                block on receipt.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
