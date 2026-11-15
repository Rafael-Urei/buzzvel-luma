import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const sectionStyles = tv({
  slots: {
    base: "md:py-25 py-15",
    container: "mx-auto w-full max-w-280 px-6 xl:px-0",
  },
  variants: {
    background: {
      white: { base: "bg-white" },
      yellow: { base: "bg-background-light-yellow" },
      accent: { base: "bg-background-yellow" },
      blue: { base: "bg-primary-blue" },
    },
  },
  defaultVariants: {
    background: "white",
  },
})

interface SectionProps
  extends ComponentProps<"section">, VariantProps<typeof sectionStyles> {}

export function Section({
  background,
  className,
  children,
  ...props
}: SectionProps) {
  const { base, container } = sectionStyles({ background })

  return (
    <section className={base({ className })} {...props}>
      <div className={container()}>{children}</div>
    </section>
  )
}
