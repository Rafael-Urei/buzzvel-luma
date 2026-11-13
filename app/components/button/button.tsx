import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"

interface Props {
  variant?: "primary" | "outline" | "ghost",
  children?: ReactNode,
  className?: string,
}

export const buttonVariants = tv({
  base: "inline-flex px-5 py-2.5 rounded-button-radius text-sm cursor-pointer",
  variants: {
    variant: {
      primary: "bg-primary-blue text-white font-bold",
      outline: "bg-white border border-[#DBDFEB] font-bold",
      ghost: "bg-transparent hover:bg-text-white-secondary text-text-secondary"
    }
  }
})

export default function Button({children, className = "", variant = "primary"}: Props) {
  return (
    <button className={twMerge(buttonVariants({variant}), className)}>
      {children}
    </button>
  )
}
