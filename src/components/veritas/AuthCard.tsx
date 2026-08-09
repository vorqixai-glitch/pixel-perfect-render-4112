import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { Loader2 } from "lucide-react";

type Mode = "signin" | "signup";

interface AuthCardProps {
  onSignedIn?: () => void;
}

export function AuthCard({ onSignedIn }: AuthCardProps) {
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);

    try {
      if (mode === "signup") {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (signUpError) throw signUpError;
        setMessage("Check your email to confirm your account.");
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInError) throw signInError;
        onSignedIn?.();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setError(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setError(result.error.message || "Google sign-in failed.");
    }
    // Full-page redirect path returns before navigation completes.
  }

  return (
    <div className="panel panel-corner w-full max-w-md p-8">
      <div className="mb-8">
        <p className="text-eyebrow mb-3">{mode === "signin" ? "Sign in" : "Request access"</p>
        <h1 className="font-display text-2xl tracking-tight">
          {mode === "signin" ? "Enter the ledger" : "Join the waitlist"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {mode === "signin"
            ? "Sign in to access the sovereign console."
            : "Create an account to request early access to Veritas Core."}
        </p>
      </div>

      <form onSubmit={handleEmailSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-background border border-input px-3 py-2 text-sm text-foreground outline-none focus:border-signal"
            placeholder="institution@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground mb-1.5">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            className="w-full bg-background border border-input px-3 py-2 text-sm text-foreground outline-none focus:border-signal"
            placeholder="••••••••"
          />
        </div>

        {error && (
          <p className="text-[12px] font-mono text-destructive">{error}</p>
        )}
        {message && (
          <p className="text-[12px] font-mono text-verify">{message}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 border border-signal/60 text-signal px-4 py-2.5 text-[12px] font-mono uppercase tracking-[0.15em] hover:bg-signal hover:text-signal-foreground transition-colors disabled:opacity-50"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {mode === "signin" ? "Sign in" : "Create account"}
        </button>
      </form>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex-1 h-px bg-border" />
        <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">or</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <button
        type="button"
        onClick={handleGoogle}
        className="mt-6 w-full flex items-center justify-center gap-2 border border-input bg-background px-4 py-2.5 text-[12px] font-mono uppercase tracking-[0.15em] text-foreground hover:bg-accent transition-colors"
      >
        Continue with Google
      </button>

      <p className="mt-6 text-center text-[11px] font-mono text-muted-foreground">
        {mode === "signin" ? "Need an account?" : "Already have an account?"}{" "}
        <button
          type="button"
          onClick={() => {
            setMode(mode === "signin" ? "signup" : "signin");
            setError(null);
            setMessage(null);
          }}
          className="text-signal hover:underline"
        >
          {mode === "signin" ? "Request access" : "Sign in"}
        </button>
      </p>
    </div>
  );
}
