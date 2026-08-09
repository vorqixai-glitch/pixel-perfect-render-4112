import { WaitlistForm } from "./WaitlistForm";

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

            <div>
              <WaitlistForm submitLabel="Submit for review" />
              <p className="text-[10px] font-mono text-muted-foreground/70 leading-relaxed pt-3">
                Average review: 4 business days. All inquiries logged to ledger
                block on receipt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

