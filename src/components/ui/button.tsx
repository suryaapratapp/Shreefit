import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--green-900)] text-white shadow-[0_16px_34px_rgba(21,61,43,0.18)] hover:-translate-y-0.5 hover:bg-[var(--green-800)]",
        saffron:
          "bg-[var(--saffron-500)] text-[var(--green-950)] shadow-[0_16px_34px_rgba(218,142,45,0.22)] hover:-translate-y-0.5 hover:bg-[var(--saffron-400)]",
        outline:
          "border border-[var(--green-200)] bg-white/80 text-[var(--green-900)] hover:-translate-y-0.5 hover:border-[var(--green-500)]",
        ghost:
          "text-[var(--green-900)] hover:bg-[var(--cream-100)]",
      },
      size: {
        default: "min-h-12 px-6",
        lg: "min-h-14 px-7 text-base",
        sm: "min-h-10 px-4 text-sm",
        icon: "h-12 w-12 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
