import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { joinWaitlist } from "@/lib/auth.functions";
import { Loader2, Check } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [useCase, setUseCase] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const submit = useServerFn(joinWaitlist);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setMessage(null);

    try {
      const result = await submit({ data: { email, company, useCase } });
      setStatus("success");
      setMessage(result.message);
      setEmail("");
      setCompany("");
      setUseCase("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Request failed.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="panel panel-corner p-6 md:p-8 space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <label htmlFor="wl-email" className="block text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
            Institutional email
          </label>
          <input
            id="wl-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-background border border-input px-3 py-2.5 text-sm text-foreground outline-none focus:border-signal"
            placeholder="security@agency.gov"
          />
        </div>

        <div>
          <label htmlFor="wl-company" className="block text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
            Organization
          </label>
          <input
            id="wl-company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full bg-background border border-input px-3 py-2.5 text-sm text-foreground outline-none focus:border-signal"
            placeholder="Agency / Bank / Enterprise"
          />
        </div>

        <div>
          <label htmlFor="wl-use-case" className="block text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
            Use case
          </label>
          <select
            id="wl-use-case"
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
            className="w-full bg-background border border-input px-3 py-2.5 text-sm text-foreground outline-none focus:border-signal"
          >
            <option value="">Select a use case</option>
            <option value="supply-chain">Supply chain provenance</option>
            <option value="financial-audit">Financial audit trails</option>
            <option value="government-records">Government records</option>
            <option value="healthcare-compliance">Healthcare compliance</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {status !== "idle" && status !== "submitting" && (
        <div className={`flex items-center gap-2 text-[12px] font-mono ${status === "success" ? "text-verify" : "text-destructive"}`}>
          {status === "success" ? <Check className="w-4 h-4" /> : null}
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full md:w-auto flex items-center justify-center gap-2 border border-signal/60 text-signal px-6 py-2.5 text-[12px] font-mono uppercase tracking-[0.15em] hover:bg-signal hover:text-signal-foreground transition-colors disabled:opacity-50"
      >
        {status === "submitting" && <Loader2 className="w-4 h-4 animate-spin" />}
        Request early access
      </button>
    </form>
  );
}
