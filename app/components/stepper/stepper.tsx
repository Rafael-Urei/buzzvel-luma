import { ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

export interface StepperStep {
  icon: ReactNode
  title: string
  description: string
  action?: ReactNode
}

interface StepperItemProps extends StepperStep {
  index: number
  isLast: boolean
}

function StepperItem({
  index,
  isLast,
  icon,
  title,
  description,
  action,
}: StepperItemProps) {
  const label = `Step ${String(index + 1).padStart(2, "0")}`

  return (
    <li className="relative">
      {!isLast && (
        <span
          aria-hidden
          className="absolute top-7 -right-20 left-0 hidden h-px bg-slate-200 md:block"
        />
      )}

      <div className="relative z-10 w-fit">{icon}</div>

      <p className="text-text-tertiary mt-6 text-xs leading-4 font-semibold tracking-[1.44px] uppercase">
        {label}
      </p>
      <h3 className="mt-3 text-xl leading-8 font-bold tracking-normal text-slate-900">
        {title}
      </h3>
      <p className="text-text-secondary mt-4 max-w-xs text-base leading-7">
        {description}
      </p>

      {action && <div className="mt-6">{action}</div>}
    </li>
  )
}

interface StepperProps {
  steps: StepperStep[]
}

export function Stepper({ steps }: StepperProps) {
  return (
    <ol className="grid gap-12 md:grid-cols-3 md:gap-x-20">
      {steps.map((step, index) => (
        <StepperItem
          key={step.title}
          index={index}
          isLast={index === steps.length - 1}
          {...step}
        />
      ))}
    </ol>
  )
}

const stepShape = tv({
  slots: {
    base: "relative size-14 shrink-0",
    inner: "absolute",
  },
  variants: {
    tone: {
      blue: { base: "bg-blue-100", inner: "bg-blue-600" },
      orange: { base: "bg-orange-200", inner: "bg-orange-500" },
      yellow: { base: "bg-yellow-100", inner: "bg-yellow-400" },
    },
    shape: {
      circle: {
        base: "rounded-full",
        inner: "left-2 top-2 size-6 rounded-md",
      },
      tilted: {
        base: "rotate-[8deg] rounded-xl",
        inner: "bottom-2 right-2 size-7 rounded-full",
      },
      square: {
        base: "rounded-xl",
        inner: "bottom-2 left-2 size-5 rounded-full",
      },
    },
  },
  defaultVariants: {
    tone: "blue",
    shape: "circle",
  },
})

type StepShapeProps = VariantProps<typeof stepShape>

export function StepShape({ tone, shape }: StepShapeProps) {
  const { base, inner } = stepShape({ tone, shape })

  return (
    <div aria-hidden className={base()}>
      <span className={inner()} />
    </div>
  )
}
