import { tv, VariantProps } from "tailwind-variants"

const sectionHeaderStyles = tv({
  slots: {
    base: "flex flex-col",
    eyebrow: "text-xs leading-4 font-semibold tracking-[1.44px] uppercase",
    title: "pt-4 text-[48px] leading-17.5 font-extrabold tracking-[-1.6px]",
    description: "max-w-xl pt-6 text-lg leading-7",
  },
  variants: {
    align: {
      left: "",
      center: { base: "items-center text-center" },
    },
    tone: {
      default: {
        eyebrow: "text-primary-blue",
        title: "text-text-primary",
        description: "text-text-secondary",
      },
      inverted: {
        eyebrow: "text-white",
        title: "text-white",
        description: "text-white",
      },
    },
  },
  defaultVariants: {
    align: "left",
    tone: "default",
  },
})

interface SectionHeaderProps extends VariantProps<typeof sectionHeaderStyles> {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align,
  tone,
}: SectionHeaderProps) {
  const styles = sectionHeaderStyles({ align, tone })

  return (
    <div className={styles.base()}>
      <span className={styles.eyebrow()}>{eyebrow}</span>
      <h2 className={styles.title()}>{title}</h2>
      {description && <p className={styles.description()}>{description}</p>}
    </div>
  )
}
