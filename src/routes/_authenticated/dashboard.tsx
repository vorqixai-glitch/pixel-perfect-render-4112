import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { queryOptions } from "@tanstack/react-query";
import { Nav } from "@/components/veritas/Nav";
import { getProfile } from "@/lib/auth.functions";

const profileQueryOptions = queryOptions({
  queryKey: ["profile"],
  queryFn: () => getProfile(),
});

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Veritas Core" },
      { name: "description", content: "Sovereign console for Veritas Core operators." },
      { property: "og:title", content: "Dashboard — Veritas Core" },
      { property: "og:description", content: "Sovereign console for Veritas Core operators." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(profileQueryOptions),
  component: DashboardPage,
});

function DashboardPage() {
  const { data: profile } = useSuspenseQuery(profileQueryOptions);

  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-eyebrow mb-3">Console</p>
          <h1 className="font-display text-3xl tracking-tight">Operational dashboard</h1>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="panel panel-corner p-6">
              <p className="text-eyebrow mb-2">Operator</p>
              <p className="text-lg font-display">{profile.display_name || "Unnamed operator"}</p>
              <p className="mt-1 text-[12px] font-mono text-muted-foreground uppercase tracking-[0.12em]">
                Role: {profile.role}
              </p>
            </div>

            <div className="panel panel-corner p-6">
              <p className="text-eyebrow mb-2">Ledger status</p>
              <div className="flex items-center gap-2 text-verify">
                <span className="w-2 h-2 rounded-full bg-verify pulse-dot" />
                <span className="text-[13px] font-mono uppercase tracking-[0.12em]">Online</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Proof replay engine is active and accepting verified events.
              </p>
            </div>

            <div className="panel panel-corner p-6">
              <p className="text-eyebrow mb-2">Trust hierarchy</p>
              <p className="text-sm text-muted-foreground">
                Your account is operating at the institutional verification tier.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
