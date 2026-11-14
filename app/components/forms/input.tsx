import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

interface InputProps
  extends ComponentProps<"input">, VariantProps<typeof inputVariants> {}

const inputVariants = tv({
  base: "bg-background-light-yellow py-[12px] px-[16px] border rounded-md",
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export default function Input({ variant, className, ...props }: InputProps) {
  return (
    <input className={inputVariants({ variant, className })} {...props}></input>
  )
}
