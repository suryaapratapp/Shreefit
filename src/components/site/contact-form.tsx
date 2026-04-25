"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea, inputClassName } from "@/components/ui/field";
import { site } from "@/lib/site";

const formSchema = z.object({
  name: z.string().min(2, "Name kam se kam 2 characters ka hona chahiye."),
  parentAge: z
    .string()
    .min(1, "Parent age required hai.")
    .refine((value) => {
      const age = Number(value);
      return Number.isFinite(age) && age >= 40 && age <= 100;
    }, "Please valid age enter karein."),
  city: z.string().min(2, "City required hai."),
  batch: z.enum(["Morning Batch", "Evening Batch", "Need guidance"], {
    message: "Preferred batch choose karein.",
  }),
  whatsapp: z
    .string()
    .min(8, "WhatsApp number required hai.")
    .regex(/^[0-9+\s-]+$/, "Please valid WhatsApp number enter karein."),
  message: z.string().min(8, "Short message required hai."),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      batch: "Need guidance",
      message:
        "Namaste, main ShreeFit Hindi online fitness classes ke liye guidance chahta/chahti hoon. Parent ke comfort aur suitable batch ke baare mein please suggest karein.",
    },
  });

  function onSubmit(values: FormValues) {
    const message = [
      "Namaste, mujhe ShreeFit Hindi online fitness classes ke liye enquiry karni hai.",
      `Name: ${values.name}`,
      `Parent age: ${values.parentAge}`,
      `City: ${values.city}`,
      `Preferred batch: ${values.batch}`,
      `WhatsApp: ${values.whatsapp}`,
      `Message: ${values.message}`,
      "Please fees, available batch aur joining process share kar dijiye.",
    ].join("\n");

    window.open(
      `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form
      className="grid gap-5 rounded-lg border border-[var(--cream-300)] bg-white p-5 shadow-[0_18px_50px_rgba(47,74,59,0.08)] sm:p-6"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Aapka naam" autoComplete="name" {...register("name")} />
        {errors.name ? <p className="field-error">{errors.name.message}</p> : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="parentAge">Parent age</Label>
          <Input
            id="parentAge"
            inputMode="numeric"
            placeholder="e.g. 58"
            {...register("parentAge")}
          />
          {errors.parentAge ? <p className="field-error">{errors.parentAge.message}</p> : null}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="e.g. Delhi" autoComplete="address-level2" {...register("city")} />
          {errors.city ? <p className="field-error">{errors.city.message}</p> : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="batch">Preferred batch</Label>
          <select id="batch" className={inputClassName} {...register("batch")}>
            <option value="Need guidance">Need guidance</option>
            <option value="Morning Batch">Morning Batch</option>
            <option value="Evening Batch">Evening Batch</option>
          </select>
          {errors.batch ? <p className="field-error">{errors.batch.message}</p> : null}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="whatsapp">WhatsApp number</Label>
          <Input
            id="whatsapp"
            inputMode="tel"
            placeholder="+91 ..."
            autoComplete="tel"
            {...register("whatsapp")}
          />
          {errors.whatsapp ? <p className="field-error">{errors.whatsapp.message}</p> : null}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" {...register("message")} />
        {errors.message ? <p className="field-error">{errors.message.message}</p> : null}
      </div>

      <Button type="submit" size="lg" variant="saffron" disabled={isSubmitting}>
        <MessageCircle className="h-5 w-5" />
        Send detailed WhatsApp enquiry
        <ArrowRight className="h-5 w-5" />
      </Button>
    </form>
  );
}
