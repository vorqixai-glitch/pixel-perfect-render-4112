import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { joinWaitlist } from "@/lib/auth.functions";
import { Loader2, Check } from "lucide-react";

interface WaitlistFormProps {
  submitLabel?: string;
}

export function WaitlistForm({ submitLabel = "Request early access" }: WaitlistFormProps) {
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {[
        {
          id: "wl-email",
          label: "Secure email",
          type: "email",
          placeholder: "you@institution.gov",
          value: email,
          setValue: setEmail,
          required: true,
        },
        {
          id: "wl-company",
          label: "Organization",
          type: "text",
          placeholder: "e.g. Ministry of Finance",
          value: company,
          setValue: setCompany,
        },
      ].map((field) => (
        <label key={field.id} className="block">
          <span className="block text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-1.5">
            {field.label}
          </span>
          <input
            id={field.id}
            type={field.type}
            value={field.value}
            onChange={(e) => field.setValue(e.target.value)}
            required={field.required}
            className="w-full bg-background border border-border px-3 py-2.5 font-mono text-[12px] focus:outline-none focus:border-signal placeholder:text-muted-foreground/50"
            placeholder={field.placeholder}
          />
        </label>
      ))}

      <label className="block">
        <span className="block text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-1.5">
          Use case
        </span>
        <select
          id="wl-use-case"
          value={useCase}
          onChange={(e) => setUseCase(e.target.value)}
          className="w-full bg-background border border-border px-3 py-2.5 font-mono text-[12px] focus:outline-none focus:border-signal"
        >
          <option value="">Select a use case</option>
          <option value="supply-chain">Supply chain provenance</option>
          <option value="financial-audit">Financial audit trails</option>
          <option value="government-records">Government records</option>
          <option value="healthcare-compliance">Healthcare compliance</option>
          <option value="other">Other</option>
        </select>
      </label>

      {status !== "idle" && status !== "submitting" && (
        <div className={`flex items-center gap-2 text-[11px] font-mono ${status === "success" ? "text-verify" : "text-destructive"}`}>
          {status === "success" ? <Check className="w-4 h-4" /> : null}
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 bg-signal text-signal-foreground py-3 font-mono text-[12px] uppercase tracking-[0.2em] hover:bg-signal/90 transition-colors disabled:opacity-50"
      >
        {status === "submitting" && <Loader2 className="w-4 h-4 animate-spin" />}
        {submitLabel}
      </button>
    </form>
  );
}

