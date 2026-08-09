# Veritas Core SaaS Foundation — Auth + Waitlist

## Goal
Add user authentication and an early-access waitlist to the existing Veritas Core landing page, keeping the marketing site public and gating a protected dashboard behind login.

## Database changes

1. **profiles table**
   - `id` uuid primary key, `user_id` uuid references `auth.users(id) on delete cascade`
   - `display_name` text, `role` text default 'user'
   - `created_at`, `updated_at` timestamps
   - RLS: users read/update their own profile; service_role has full access
   - Auto-create profile row on signup via trigger on `auth.users`

2. **waitlist table**
   - `id` uuid primary key
   - `email` text unique not null, `company` text, `use_case` text
   - `status` text default 'pending'
   - `created_at`, `updated_at` timestamps
   - RLS: anon/authenticated can insert; only service_role can read/manage

## Auth setup

- Enable Lovable Cloud email/password auth with email confirmation.
- Enable Google sign-in and configure the provider the same turn the code is added.
- Keep the existing public landing page at `/`.
- Add `/auth` route for sign-in / sign-up.
- Add `/_authenticated/dashboard` as the protected signed-in home.
- Update the root nav to show "Dashboard" / "Sign out" when signed in, "Request access" / "Sign in" when not.

## UI work

- Build an auth card matching the sovereign dark aesthetic (hairline borders, corner brackets, mono typography).
- Add a waitlist section to the landing page with email, company, and use-case fields.
- Build a minimal dashboard shell showing the user's profile and a "Ledger Online" status.
- Ensure sign-out clears the query cache and navigates to `/auth`.

## Server functions

- `joinWaitlist`: public POST server function validating email and inserting into `waitlist`.
- `getProfile`: authenticated GET server function returning the current user's profile.

## Files to create / modify

- New: `src/routes/auth.tsx`, `src/routes/_authenticated/dashboard.tsx`, `src/routes/_authenticated/route.tsx`
- New: `src/components/veritas/AuthCard.tsx`, `src/components/veritas/WaitlistForm.tsx`, `src/lib/auth.functions.ts`
- Modify: `src/components/veritas/Nav.tsx`, `src/routes/index.tsx`, `src/routes/__root.tsx`
- Migration: profiles + waitlist tables + trigger
