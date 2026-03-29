import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import type { ContactFormData } from "@/types";

import FormField from "./FormField";

const ContactForm = () => {
  const { t } = useTranslation();

  const validationSchema = z.object({
    name: z.string().min(1, t("validation.nameRequired")),
    email: z
      .string()
      .min(1, t("validation.emailRequired"))
      .email(t("validation.emailInvalid")),
    phone: z
      .string()
      .min(1, t("validation.phoneRequired"))
      .refine((value) => {
        const phoneNumber = parsePhoneNumberFromString(value, "BG");
        return phoneNumber?.isValid() ?? false;
      }, t("validation.phoneInvalid")),
    message: z
      .string()
      .min(1, t("validation.messageRequired"))
      .max(500, t("validation.messageMax")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("https://submit-form.com/HRKZbYxa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(t("contact.successMessage"));
        reset();
      } else {
        throw new Error(t("contact.errorSend"));
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : t("contact.unknownError");
      toast.error(`${t("contact.errorRetry")} ${errorMessage}`);
    }
  };

  return (
    <div className="glass-strong rounded-2xl p-6 sm:p-8">
      <h2 className="font-display text-2xl sm:text-3xl tracking-[0.1em] text-center mb-2 text-gradient">
        {t("contact.formTitle")}
      </h2>
      <div className="flex justify-center mb-8">
        <div className="h-0.5 w-12 bg-brass" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-[600px] mx-auto">
        <FormField
          label={t("contact.name")}
          type="text"
          name="name"
          register={register}
          error={errors.name}
          helperText={errors.name?.message}
        />
        <FormField
          label={t("contact.email")}
          name="email"
          type="email"
          register={register}
          error={errors.email}
          helperText={errors.email?.message}
        />
        <FormField
          label={t("contact.phone")}
          name="phone"
          type="text"
          register={register}
          error={errors.phone}
          helperText={errors.phone?.message}
        />
        <FormField
          label={t("contact.message")}
          name="message"
          register={register}
          multiline
          rows={6}
          error={errors.message}
          helperText={errors.message?.message}
        />
        <Button
          type="submit"
          className="w-full mt-5 bg-brass hover:bg-brass-light text-background font-bold tracking-[0.15em] uppercase text-sm py-6 glow-brass hover:glow-brass-strong transition-all duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            t("contact.submit")
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
