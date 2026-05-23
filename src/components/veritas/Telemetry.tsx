function Bars() {
  // deterministic pseudo data
  const bars = Array.from({ length: 56 }).map((_, i) => {
    const v = 22 + Math.round(50 + 30 * Math.sin(i / 3.1) + 12 * Math.cos(i / 1.4));
    return v;
  });
  const max = Math.max(...bars);
  return (
    <div className="flex items-end gap-[2px] h-24">
      {bars.map((b, i) => (
        <div
          key={i}
          className={i > 48 ? "bg-signal" : "bg-foreground/40"}
          style={{ height: `${(b / max) * 100}%`, width: 4 }}
        />
      ))}
    </div>
  );
}

export function Telemetry() {
  return (
    <section id="telemetry" className="hairline-t bg-card/40">
      <div className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="flex items-end justify-between gap-8 mb-12 flex-wrap">
          <div>
            <div className="text-eyebrow mb-4">04 · Operational Telemetry</div>
            <h2 className="font-display text-[36px] leading-[1.05] tracking-tight max-w-2xl">
              Government-grade visibility,
              <br />
              not a “dashboard.”
            </h2>
          </div>
          <div className="font-mono text-[11px] text-muted-foreground tracking-[0.16em] uppercase">
            Region · eu-north-1 · sync 7s ago
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-border">
          {/* Throughput */}
          <div className="bg-card p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                Anchor throughput · 60s
              </span>
              <span className="text-[10px] font-mono text-verify uppercase tracking-[0.18em]">
                +12.4%
              </span>
            </div>
            <div className="font-display text-[40px] tracking-tight leading-none">
              4,221<span className="text-muted-foreground text-[18px] ml-2">/s</span>
            </div>
            <div className="mt-6"><Bars /></div>
          </div>

          {/* Chain integrity */}
          <div className="bg-card p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                Chain integrity matrix
              </span>
              <span className="text-[10px] font-mono text-verify uppercase tracking-[0.18em] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-verify pulse-dot" /> nominal
              </span>
            </div>
            <div className="grid grid-cols-12 gap-[3px]">
              {Array.from({ length: 84 }).map((_, i) => {
                const warn = i === 41 || i === 67;
                return (
                  <div
                    key={i}
                    className={`aspect-square ${
                      warn ? "bg-warn/80" : "bg-verify/70"
                    }`}
                  />
                );
              })}
            </div>
            <div className="mt-5 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
              <span>blocks #8,412,525 → #8,412,609</span>
              <span>2 warn · 0 fail</span>
            </div>
          </div>

          {/* Audit queue */}
          <div className="bg-card p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                External audit queue
              </span>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.18em]">
                live
              </span>
            </div>
            <ul className="space-y-3 text-[12px] font-mono">
              {[
                { org: "FCA · UK",          d: "evidence packet · case A-771", s: "verifying" },
                { org: "BaFin · DE",        d: "quorum 3/5 · awaiting 2",      s: "pending" },
                { org: "FINMA · CH",        d: "chain replay · 11.4M events",  s: "verifying" },
                { org: "Insurer · Lloyd's", d: "policy attestation · 24h",     s: "passed" },
                { org: "Counsel · Cleary",  d: "deposition export · sealed",   s: "passed" },
              ].map((r) => (
                <li key={r.org} className="flex items-center justify-between gap-3 hairline-b pb-2 last:border-b-0">
                  <div className="min-w-0">
                    <div className="text-foreground">{r.org}</div>
                    <div className="text-muted-foreground text-[11px]">{r.d}</div>
                  </div>
                  <span className={`text-[10px] uppercase tracking-[0.15em] px-1.5 py-0.5 border ${
                    r.s === "passed"
                      ? "text-verify border-verify/40"
                      : r.s === "pending"
                      ? "text-warn border-warn/40"
                      : "text-signal border-signal/40"
                  }`}>
                    {r.s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
