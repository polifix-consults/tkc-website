"use server";

import { createClient } from "@/lib/supabase/server";
import { z } from "zod";

export const registrationSchema = z.object({
  full_name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name too long"),
  profession: z
    .string()
    .min(2, "Profession must be at least 2 characters")
    .max(100, "Profession too long"),
  experience_level: z.enum(["beginner", "intermediate", "advanced", "master"], {
    required_error: "Please select your experience level",
  }),
});

export type RegistrationInput = z.infer<typeof registrationSchema>;

export type ActionResult =
  | { success: true; message: string }
  | { success: false; error: string };

export async function registerMember(
  data: RegistrationInput,
): Promise<ActionResult> {
  // Validate on the server
  const parsed = registrationSchema.safeParse(data);
  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Validation failed",
    };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("club_registrations").insert([
      {
        full_name: parsed.data.full_name,
        profession: parsed.data.profession,
        experience_level: parsed.data.experience_level,
      },
    ]);

    if (error) {
      console.error("Supabase error:", error);
      return {
        success: false,
        error: "Failed to register. Please try again.",
      };
    }

    return {
      success: true,
      message: "Welcome to The Knight Club. The board awaits.",
    };
  } catch (err) {
    console.error("Registration error:", err);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}
