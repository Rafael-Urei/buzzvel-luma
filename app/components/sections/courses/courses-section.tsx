import Link from "next/link"
import Button from "../../button/button"
import Image from "next/image"
import { Section } from "../../section/section"
import { tv } from "tailwind-variants"

interface Course {
  id: string
  title: string
  description: string
}

const courses: Course[] = [
  {
    id: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
  },
  {
    id: "02",
    title: "Technology",
    description:
      "Build a stronger understanding of the tools shaping digital products.",
  },
  {
    id: "03",
    title: "Business",
    description:
      "Develop practical skills for better decisions and stronger teams.",
  },
  {
    id: "04",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
  },
]

const courseCardStyles = tv({
  base: "flex flex-col justify-start rounded-2xl border border-card-border p-[28px]",
  slots: {
    title: "text-text-primary leading-[32px] text-xl font-bold ",
    description:
      "text-text-tertiary pt-[12px] flex-1 leading-[24px] text-sm tracking-normal",
  },
})

function CourseCard({ card }: { card: Course }) {
  const { base, title, description } = courseCardStyles()

  return (
    <div className={base()}>
      <div className="h-[46.5px]">
        <div className="bg-primary-blue-light text-primary-blue flex w-max items-center justify-center rounded-md px-2 py-1 text-center text-xs leading-4 font-semibold tracking-[1.44px]">
          {card.id}
        </div>
      </div>
      <h3 className={title()}>{card.title}</h3>
      <p className={description()}>{card.description}</p>
      <div className="inline-flex items-center gap-2 justify-self-end pt-6 text-sm leading-6 font-bold tracking-normal">
        Explore
        <Image src="/icons/arrow.svg" alt="Menu Icon" width={20} height={20} />
      </div>
    </div>
  )
}

export function Courses() {
  return (
    <Section id="courses">
      <span className="text-primary-blue text-xs leading-4 font-semibold tracking-[1.44px] uppercase">
        Find your next skill
      </span>
      <h2 className="text-text-primary font-jakarta pt-4 text-[32px] leading-9 font-extrabold md:max-w-140 md:md:text-[48px] md:leading-14 md:tracking-[-1.2px]">
        Learn something worth knowing.
      </h2>
      <p className="text-text-secondary max-w-140 pt-6 text-base leading-6.5 tracking-normal md:text-lg md:leading-7">
        Short, practical courses designed around skills you can put to work
        immediately.
      </p>
      <div className="grid grid-cols-1 gap-4 pt-10 md:grid-cols-2 md:grid-cols-4">
        {courses.map((course) => (
          <CourseCard key={course.id} card={course} />
        ))}
      </div>
    </Section>
  )
}

export default function FeaturedCourse() {
  return (
    <Section background="blue">
      <div className="flex flex-col items-center gap-15 md:flex-row">
        <div>
          <Image
            src="/featured-course.png"
            width={540}
            height={410}
            alt=""
          ></Image>
        </div>
        <div className="max-w-135">
          <span className="text-xs leading-4 font-semibold tracking-[1.44px] text-white uppercase">
            Most popular this month
          </span>
          <h2 className="pt-4 text-[32px] leading-8 font-extrabold tracking-[-1.6px] text-white md:text-[48px] md:leading-14">
            Designing products people understand.
          </h2>
          <p className="pt-6 text-sm leading-6 tracking-normal text-white md:text-base md:leading-7">
            Learn how to turn complex workflows into simple, intentional product
            experiences through research, structure and thoughtful interaction
            design.
          </p>
          <p className="pt-6 text-sm leading-6 tracking-normal text-white md:text-base md:leading-7">
            with Maya Chen · Senior Product Designer
          </p>
          <div className="flex items-center gap-3 pt-6">
            <Button variant="badge">8 lessons</Button>
            <Button variant="badge">2h 40min</Button>
            <Button variant="badge">Intermediate</Button>
          </div>
          <div className="flex flex-col items-center gap-3 pt-8 md:flex-row">
            <Button
              variant="secondary"
              className="w-full justify-center px-7 py-3.5 text-center md:w-max"
            >
              View course
            </Button>
            <Link
              href="#"
              className="text-text-white-secondary flex items-center gap-2 text-sm leading-6 font-bold tracking-normal"
            >
              Browse all courses
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 10H16M11 15L16 10L11 5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
