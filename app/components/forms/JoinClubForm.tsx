"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { GoldDivider } from "@/components/ui/Typography";
import {
  registerMember,
  registrationSchema,
  type RegistrationInput,
} from "@/app/actions/registerMember";

const experienceOptions = [
  { value: "", label: "Select your level..." },
  { value: "beginner", label: "Beginner — Learning the Pieces" },
  { value: "intermediate", label: "Intermediate — Club Player" },
  { value: "advanced", label: "Advanced — Tournament Competitor" },
  { value: "master", label: "Master — FIDE Rated" },
];

export function JoinClubForm() {
  const [result, setResult] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationInput>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationInput) => {
    setResult(null);
    const res = await registerMember(data);

    if (res.success) {
      setResult({ type: "success", message: res.message });
      reset();
    } else {
      setResult({ type: "error", message: res.error });
    }
  };

  return (
    <section id="join" className="tkc-section bg-tkc-black relative overflow-hidden">
      {/* Background knight */}
      <div className="absolute right-0 top-0 bottom-0 flex items-center justify-end pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[40vw] text-tkc-gold/[0.02] leading-none translate-x-1/4">
          ♚
        </span>
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-tkc-gold/5 blur-[100px] pointer-events-none" />

      <div className="tkc-container relative z-10">
        <div className="max-w-[640px]">
          {/* Header */}
          <p className="font-body text-caption uppercase tracking-[0.2em] text-tkc-gold mb-4">
            Membership
          </p>
          <h2 className="font-display font-normal text-display-lg text-tkc-white mb-4">
            Enter the{" "}
            <em className="gold-text not-italic">Grandmaster's</em>
            <br />
            Study
          </h2>
          <p className="font-body text-body-lg text-tkc-muted mb-10">
            The door is open for those who seek more than victory — who seek
            mastery, community, and the culture of the game.
          </p>

          <GoldDivider className="mb-10" />

          {/* Success state */}
          {result?.type === "success" && (
            <div className="mb-8 p-5 border border-tkc-gold/30 bg-tkc-gold/5 flex items-start gap-4">
              <CheckCircle size={20} className="text-tkc-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-body text-body-md text-tkc-white font-medium mb-1">
                  Registration Complete
                </p>
                <p className="font-body text-body-sm text-tkc-muted">
                  {result.message}
                </p>
              </div>
            </div>
          )}

          {/* Error state */}
          {result?.type === "error" && (
            <div className="mb-8 p-5 border border-red-500/30 bg-red-500/5 flex items-start gap-4">
              <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
              <p className="font-body text-body-sm text-red-400">{result.message}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
            <Input
              label="Full Name"
              placeholder="Your full name"
              error={errors.full_name?.message}
              {...register("full_name")}
            />

            <Input
              label="Profession"
              placeholder="What do you do beyond the board?"
              error={errors.profession?.message}
              {...register("profession")}
            />

            <Select
              label="Experience Level"
              options={experienceOptions}
              error={errors.experience_level?.message}
              {...register("experience_level")}
            />

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? "Registering..." : "Claim Your Seat at the Board"}
              </Button>
            </div>

            <p className="font-body text-caption text-tkc-muted/60">
              By registering, you accept our terms. We'll be in touch before the
              next event.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
