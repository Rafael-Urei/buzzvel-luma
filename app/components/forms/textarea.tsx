import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

interface TextAreaProps
  extends ComponentProps<"textarea">, VariantProps<typeof textareaVariants> {}

const textareaVariants = tv({
  base: "bg-background-light-yellow py-[12px] px-[16px] border rounded-md",
})

export default function TextArea({ className, ...props }: TextAreaProps) {
  return (
    <textarea className={textareaVariants({ className })} {...props}></textarea>
  )
}
