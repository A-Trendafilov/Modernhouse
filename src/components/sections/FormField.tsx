import type { UseFormRegister, FieldError } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ContactFormData } from "@/types";

interface FormFieldProps {
  label: string;
  name: keyof ContactFormData;
  register: UseFormRegister<ContactFormData>;
  error?: FieldError;
  helperText?: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
}

const FormField = ({
  label,
  name,
  register,
  error,
  helperText,
  type = "text",
  multiline = false,
  rows = 4,
}: FormFieldProps) => {
  const Component = multiline ? Textarea : Input;

  return (
    <div className="mb-5">
      <label htmlFor={name} className="block text-sm font-medium text-neutral-300 mb-1.5 tracking-wide">
        {label} <span className="text-red-500 ml-0.5">*</span>
      </label>
      <Component
        id={name}
        type={type}
        {...register(name)}
        {...(multiline ? { rows } : {})}
        className={`w-full bg-white/5 backdrop-blur-md border-white/10 text-white placeholder:text-neutral-500 focus:border-[#B8860B] focus:ring-[#B8860B]/20 transition-colors duration-300 ${
          error ? "border-red-500 focus:border-red-500" : ""
        }`}
      />
      {helperText && (
        <p className="mt-1 text-sm text-red-400">{helperText}</p>
      )}
    </div>
  );
};

export default FormField;
