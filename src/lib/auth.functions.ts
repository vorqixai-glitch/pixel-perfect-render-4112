import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const waitlistSchema = z.object({
  email: z.string().email().max(255),
  company: z.string().max(200).optional(),
  useCase: z.string().max(1000).optional(),
});

export const joinWaitlist = createServerFn({ method: "POST" })
  .inputValidator((data) => waitlistSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("waitlist").insert({
      email: data.email.toLowerCase().trim(),
      company: data.company?.trim() || null,
      use_case: data.useCase?.trim() || null,
    });

    if (error) {
      if (error.code === "23505") {
        return { success: true, message: "This email is already on the list." };
      }
      throw new Error(error.message);
    }

    return { success: true, message: "Access request recorded." };
  });

export const getProfile = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("profiles")
      .select("*")
      .eq("user_id", context.userId)
      .single();

    if (error) throw new Error(error.message);
    return data;
  });
