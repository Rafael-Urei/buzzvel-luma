import { tv } from "tailwind-variants"

export interface Course {
  id: string
  title: string
  description: string
}

const courseCardStyles = tv({
  base: "flex flex-col justify-start rounded-2xl border p-[28px]",
  slots: {
    title: "text-text-primary text-lg font-bold",
    description: "text-tertiary pt-[12px] text-sm tracking-normal",
  },
})

export function CourseCard({ card }: { card: Course }) {
  const { base, title, description } = courseCardStyles()

  return (
    <div className={base()}>
      <div className="bg-primary-blue-light text-primary-blue flex w-max items-center justify-center rounded-md px-2 py-1 text-center text-xs font-semibold">
        {card.id}
      </div>
      <span className={title()}>{card.title}</span>
      <p className={description()}>{card.description}</p>
      <div className="pt-6">Explore (icon)</div>
    </div>
  )
}
