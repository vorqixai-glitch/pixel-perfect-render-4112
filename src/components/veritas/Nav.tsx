import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 hairline-b bg-background/70 backdrop-blur-md">
      <div className="mx-auto max-w-[1400px] px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-5 h-5 border border-signal relative">
            <div className="absolute inset-[3px] bg-signal/30" />
            <div className="absolute inset-0 border border-signal/40 rotate-45" />
          </div>
          <span className="font-mono text-[13px] tracking-[0.2em] uppercase">
            Veritas<span className="text-signal">·</span>Core
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[12px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
          <a href="#engine" className="hover:text-foreground transition-colors">Proof Engine</a>
          <a href="#sovereignty" className="hover:text-foreground transition-colors">Sovereignty</a>
          <a href="#telemetry" className="hover:text-foreground transition-colors">Telemetry</a>
          <a href="#deployment" className="hover:text-foreground transition-colors">Deployment</a>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-verify pulse-dot" />
            Ledger online
          </span>
          <a
            href="#access"
            className="text-[12px] font-mono uppercase tracking-[0.15em] border border-signal/60 text-signal px-3 py-1.5 hover:bg-signal hover:text-signal-foreground transition-colors"
          >
            Request Access
          </a>
        </div>
      </div>
    </header>
  );
}
