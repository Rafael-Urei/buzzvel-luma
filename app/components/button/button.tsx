import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

interface ButtonProps
  extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  variant?: "primary" | "outline" | "ghost"
}

export const buttonVariants = tv({
  base: "inline-flex px-5 py-2.5 rounded-button-radius text-sm cursor-pointer rounded-[8px]",
  variants: {
    variant: {
      primary: "bg-primary-blue text-white font-bold",
      outline: "bg-white border border-[#DBDFEB] font-bold",
      ghost: "bg-transparent hover:bg-text-white-secondary text-text-secondary",
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
