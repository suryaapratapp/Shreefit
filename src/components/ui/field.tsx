import * as React from "react";
import { cn } from "@/lib/utils";

export const inputClassName =
  "min-h-12 w-full rounded-lg border border-[var(--cream-300)] bg-white px-4 py-3 text-base text-[var(--green-950)] shadow-sm outline-none transition placeholder:text-[var(--stone-500)] focus:border-[var(--green-600)] focus:ring-2 focus:ring-[var(--ring-soft)]";

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(inputClassName, className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(inputClassName, "min-h-28 resize-y", className)}
      {...props}
    />
  );
}

export function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("text-sm font-semibold text-[var(--green-950)]", className)}
      {...props}
    />
  );
}
