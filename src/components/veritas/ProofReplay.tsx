const events = [
  { t: "T+0.000s",  op: "INGEST",       d: "asset.pdf · 2.84 MB",                hash: "0x9F4A··C7E1", sig: "verified" },
  { t: "T+0.018s",  op: "HASH",         d: "SHA-256 over canonical bytes",        hash: "0xB712··02AF", sig: "verified" },
  { t: "T+0.041s",  op: "SIGN",         d: "ECDSA-P256 · key NODE-04",            hash: "0x4D33··9118", sig: "verified" },
  { t: "T+0.063s",  op: "ANCHOR",       d: "ledger block #8,412,609",             hash: "0xE0AA··44C9", sig: "verified" },
  { t: "T+12.4s",   op: "MUTATION",     d: "edit by counsel@firm.law",            hash: "0x77F1··22BB", sig: "verified" },
  { t: "T+12.4s",   op: "RE-ANCHOR",    d: "delta sealed · prior preserved",      hash: "0x1C0D··8E45", sig: "verified" },
  { t: "T+3d 02h",  op: "WITNESS",      d: "regulator quorum (3/5)",              hash: "0x55B2··A7C0", sig: "verified" },
  { t: "T+11d",     op: "EXPORT",       d: "legal evidence packet · pdf+json",    hash: "0x9001··3E72", sig: "verified" },
];

export function ProofReplay() {
  return (
    <section id="engine" className="hairline-t hairline-b bg-card/40">
      <div className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <div>
            <div className="text-eyebrow mb-4">02 · Proof Replay Engine</div>
            <h2 className="font-display text-[36px] leading-[1.05] tracking-tight">
              Every event,
              <br />
              <span className="text-muted-foreground">replayable.</span>
              <br />
              Every claim, <span className="text-signal">defensible.</span>
            </h2>
            <p className="mt-6 text-[14px] text-muted-foreground leading-relaxed max-w-md">
              Verification is not a yes/no answer. It is a timeline of cryptographic
              events any third party can re-execute. The Proof Replay Engine turns
              static checks into forensic evidence — admissible in audits,
              regulatory review, and litigation.
            </p>
            <ul className="mt-8 space-y-3 text-[13px] font-mono">
              {[
                ["RFC-3161", "Compliant timestamping"],
                ["FIPS-140-3", "Validated cryptography"],
                ["eIDAS QES", "Qualified electronic signatures"],
                ["SOC-2 II",  "Continuous attestation"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-center gap-4">
                  <span className="text-signal w-20">{k}</span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-muted-foreground">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline panel */}
          <div className="panel panel-corner">
            <div className="hairline-b px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  Asset · CASE-2026-0418 / contract.executed.pdf
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-verify pulse-dot" />
                <span className="text-verify uppercase tracking-[0.18em]">Chain intact</span>
              </div>
            </div>

            <div className="relative">
              {/* vertical rail */}
              <div className="absolute left-[148px] top-0 bottom-0 w-px bg-border" />

              <ol>
                {events.map((e, i) => (
                  <li key={i} className="grid grid-cols-[140px_24px_1fr] gap-0 hairline-b last:border-b-0">
                    <div className="px-5 py-3 text-right text-[11px] font-mono text-muted-foreground">
                      {e.t}
                    </div>
                    <div className="flex items-center justify-center relative">
                      <span className={`relative z-10 w-2 h-2 rotate-45 ${
                        e.op === "MUTATION" ? "bg-warn" : "bg-signal"
                      }`} />
                    </div>
                    <div className="px-5 py-3 flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <div className="font-mono text-[11px] tracking-[0.16em] uppercase">
                          <span className={e.op === "MUTATION" ? "text-warn" : "text-foreground"}>
                            {e.op}
                          </span>
                          <span className="text-muted-foreground/60 ml-3 normal-case tracking-normal">
                            {e.d}
                          </span>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center gap-3 shrink-0">
                        <span className="font-mono text-[10px] text-signal/80">{e.hash}</span>
                        <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-verify border border-verify/40 px-1.5 py-0.5">
                          ✓ {e.sig}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="hairline-t px-5 py-3 flex items-center justify-between text-[10px] font-mono">
              <span className="text-muted-foreground uppercase tracking-[0.18em]">
                Replay 1.00× · 8 events · root 0xE0AA··44C9
              </span>
              <div className="flex gap-2">
                <button className="border border-border px-2 py-1 hover:border-signal hover:text-signal uppercase tracking-[0.15em]">Export Packet</button>
                <button className="border border-border px-2 py-1 hover:border-signal hover:text-signal uppercase tracking-[0.15em]">Public Verify</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
