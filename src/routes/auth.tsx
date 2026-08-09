import { createFileRoute, useNavigate, useSearch } from "@tanstack/react-router";
import { AuthCard } from "@/components/veritas/AuthCard";
import { Nav } from "@/components/veritas/Nav";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — Veritas Core" },
      { name: "description", content: "Sign in to the Veritas Core sovereign console." },
      { property: "og:title", content: "Sign in — Veritas Core" },
      { property: "og:description", content: "Sign in to the Veritas Core sovereign console." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const search = useSearch({ from: "/auth" }) as { redirect?: string };

  if (user) {
    const target = search.redirect && search.redirect.startsWith("/") ? search.redirect : "/dashboard";
    navigate({ to: target, replace: true });
    return null;
  }

  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-32 pb-20 px-6 flex items-center justify-center">
        <AuthCard onSignedIn={() => navigate({ to: "/dashboard", replace: true })} />
      </main>
    </div>
  );
}
