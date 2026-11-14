import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

interface ButtonProps
  extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  variant?: "primary" | "outline" | "ghost" | "badge" | "secondary"
}

export const buttonVariants = tv({
  base: "inline-flex px-5 py-2.5 rounded-button-radius text-sm cursor-pointer rounded-[8px]",
  variants: {
    variant: {
      primary: "bg-primary-blue text-white font-bold",
      secondary: "bg-secondary-yellow text-text-primary font-bold text-sm",
      outline: "bg-white border border-[#DBDFEB] font-bold",
      ghost: "bg-transparent hover:bg-text-white-secondary text-text-secondary",
      badge:
        "border-card-border py-1.5 px-3.5 text-white border font-normal leading-6 text-sm tracking-normal",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

export default function Button({ children, className, variant }: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, className })}>
      {children}
    </button>
  )
}
