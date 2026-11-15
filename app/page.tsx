import { ComponentProps, ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { tv, VariantProps } from "tailwind-variants"
import Button, { buttonVariants } from "./components/button/button"
import ContactUsForm from "./components/forms/contact-us"
import { Stepper, StepperStep, StepShape } from "./components/stepper/stepper"

const pct = (value: number, total: number) => `${(value / total) * 100}%`

const sectionStyles = tv({
  slots: {
    base: "md:py-25 py-15",
    container: "mx-auto w-full max-w-280 px-6 xl:px-0",
  },
  variants: {
    background: {
      white: { base: "bg-white" },
      yellow: { base: "bg-background-light-yellow" },
      blue: { base: "bg-primary-blue" },
      accent: { base: "bg-amber-100" },
    },
  },
  defaultVariants: {
    background: "white",
  },
})

interface SectionProps
  extends ComponentProps<"section">, VariantProps<typeof sectionStyles> {}

function Section({ background, className, children, ...props }: SectionProps) {
  const { base, container } = sectionStyles({ background })

  return (
    <section className={base({ className })} {...props}>
      <div className={container()}>{children}</div>
    </section>
  )
}

interface Course {
  id: string
  title: string
  description: string
}

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
            stroke="#171B2C"
          />
        </svg>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <Section background="yellow">
      <div className="flex flex-col-reverse items-center gap-y-8 md:flex-row">
        <div className="max-w-140">
          <span className="text-primary-blue text-xs leading-4 font-semibold tracking-[1.44px] uppercase">
            Learn at your own pace
          </span>
          <h1 className="font-jakarta pt-4 text-[40px] leading-11 font-extrabold tracking-[-1.6px] md:text-[65px] md:leading-17.5">
            Build skills that actually move you forward.
          </h1>
          <p className="text-text-secondary pt-6 text-base leading-6.5 tracking-normal md:text-lg md:leading-7">
            Practical courses taught by people who do the work every day. Learn
            design, technology, business and more — one focused lesson at a
            time.
          </p>
          <div className="flex flex-col gap-4 pt-8 md:flex-row">
            <Button className="justify-center px-7 py-3.5 text-center">
              Explore courses
            </Button>
            <Button
              variant="outline"
              className="justify-center px-7 py-3.5 text-center"
            >
              See how it works
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 pt-8 md:justify-start">
            <Image
              src="/three-avatars.png"
              width={80}
              height={32}
              alt=""
            ></Image>
            <p className="text-sm">
              <strong>Trusted by 24,000+</strong> learners
            </p>
          </div>
        </div>
        <div>
          <Image src="/woman.png" width={500} height={520} alt=""></Image>
        </div>
      </div>
    </Section>
  )
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

function Courses() {
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

function FeaturedCourse() {
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

const steps: StepperStep[] = [
  {
    icon: <StepShape shape="circle" tone="blue" />,
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
  },
  {
    icon: <StepShape shape="tilted" tone="orange" />,
    title: "Learn from experience",
    description:
      "Follow concise lessons created by professionals who use these skills.",
  },
  {
    icon: <StepShape shape="square" tone="yellow" />,
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
  },
]

function HowItWorks() {
  return (
    <Section background="yellow">
      <div className="text-center">
        <p className="text-primary-blue text-xs leading-4 font-semibold tracking-[1.44px] uppercase">
          How Luma works
        </p>
        <h2 className="text-text-primary mt-4 text-[36px] leading-9 font-extrabold tracking-[-0.8px] md:text-5xl md:leading-14 md:tracking-[-1.2px]">
          Less browsing. More learning.
        </h2>
      </div>

      <div className="mt-20">
        <Stepper steps={steps} />
      </div>
    </Section>
  )
}

const testimonial = {
  quote:
    "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.",
  author: "Alex Morgan",
  role: "Product Manager",
  avatar: "/img-alex-morgan.png",
}

const stats = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
]

function TestimonialStats() {
  return (
    <Section>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <figure>
          <span
            aria-hidden
            className="text-primary-blue block text-6xl leading-none font-bold"
          >
            &quot;
          </span>

          <blockquote className="md:mt-2">
            <h4 className="text-text-primary max-w-150 text-xl leading-8 font-semibold md:text-3xl md:leading-11 md:tracking-[-0.75px]">
              {testimonial.quote}
            </h4>
          </blockquote>

          <figcaption className="mt-8 flex items-center gap-4">
            <Image
              src={testimonial.avatar}
              alt={testimonial.author}
              width={48}
              height={48}
              className="size-12 rounded-full object-cover"
            />
            <div>
              <p className="text-text-primary text-base leading-7 font-semibold">
                {testimonial.author}
              </p>
              <p className="text-text-secondary text-sm leading-6">
                {testimonial.role}
              </p>
            </div>
          </figcaption>
        </figure>

        <dl className="border-primary-blue-light flex flex-row items-start gap-4 pt-12 md:w-100 md:flex-col md:border-t-0 md:border-l md:pt-0 md:pl-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="text-text-tertiary mt-2 text-sm leading-6 tracking-normal">
                {stat.label}
              </dt>
              <dd className="text-primary-blue font-jakarta text-[40px] leading-17.5 font-extrabold tracking-[-1.6px] md:text-[64px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}

// const PEOPLE_CANVAS = { width: 520, height: 497 }

// interface Tile {
//   src: string
//   alt: string
//   x: number
//   y: number
//   w: number
//   h: number
// }

// const tiles: Tile[] = [
//   {
//     src: "/people/01.jpg",
//     alt: "Student raising her hand at a desk",
//     x: 35,
//     y: 80,
//     w: 103,
//     h: 154,
//   },
//   {
//     src: "/people/02.jpg",
//     alt: "Group of students studying together",
//     x: 0,
//     y: 247,
//     w: 138,
//     h: 207,
//   },
//   {
//     src: "/people/03.jpg",
//     alt: "Student reading a book",
//     x: 154,
//     y: 0,
//     w: 103,
//     h: 170,
//   },
//   {
//     src: "/people/04.jpg",
//     alt: "Two students practicing music by a window",
//     x: 154,
//     y: 183,
//     w: 103,
//     h: 172,
//   },
//   {
//     src: "/people/05.jpg",
//     alt: "Student reading at his desk",
//     x: 154,
//     y: 368,
//     w: 103,
//     h: 128,
//   },
//   {
//     src: "/people/06.jpg",
//     alt: "Graduate holding a diploma",
//     x: 272,
//     y: 8,
//     w: 103,
//     h: 138,
//   },
//   {
//     src: "/people/07.jpg",
//     alt: "Student working on a laptop at home",
//     x: 272,
//     y: 158,
//     w: 103,
//     h: 138,
//   },
//   {
//     src: "/people/08.jpg",
//     alt: "Teacher on a video call",
//     x: 272,
//     y: 309,
//     w: 103,
//     h: 154,
//   },
//   {
//     src: "/people/09.jpg",
//     alt: "Student holding folders outdoors",
//     x: 392,
//     y: 60,
//     w: 128,
//     h: 205,
//   },
//   {
//     src: "/people/10.jpg",
//     alt: "Student with a coffee and a backpack",
//     x: 392,
//     y: 278,
//     w: 103,
//     h: 132,
//   },
// ]

function PeopleCollage() {
  return <Image src="/students.png" alt="" width={530} height={525}></Image>
}

function PeopleSection() {
  return (
    <Section background="yellow">
      <div className="flex flex-col items-center gap-x-15 md:flex-row">
        <div className="flex max-w-132.5 flex-col gap-8">
          <div>
            <p className="text-primary-blue text-xs leading-4 font-semibold tracking-[1.44px] uppercase">
              The people
            </p>
            <h2 className="text-text-primary text-[32px] leading-9 font-extrabold tracking-[-0.8px] md:text-5xl md:leading-14 md:tracking-[-1.2px]">
              Meet international students &amp; teachers
            </h2>
          </div>
          <p className="text-text-secondary text-base leading-6.5 md:text-lg md:leading-7">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
            senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
            facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
            urna, faucibus aenean lorem faucibus integer.
          </p>
          <Link
            href="#"
            className="border-card-border text-text-primary max-w-max rounded-lg border bg-white px-7 py-3.5 text-sm leading-6 font-bold"
          >
            Explore teachers and students
          </Link>
        </div>
        <PeopleCollage />
      </div>
    </Section>
  )
}

const CTA_CANVAS = { width: 1280, height: 470 }

// const avatars = [
//   "/avatars/01.jpg",
//   "/avatars/02.jpg",
//   "/avatars/03.jpg",
//   "/avatars/04.jpg",
// ]

const ring = "rounded-full border-2 border-orange-200"
const outline = "border-2 border-orange-200"
const fill = "bg-orange-200"

interface Shape {
  x: number
  y: number
  w: number
  h: number
  className: string
  rotate?: number
}

const shapes: Shape[] = [
  { x: 22, y: 16, w: 107, h: 107, className: ring },
  {
    x: 318,
    y: 44,
    w: 64,
    h: 64,
    className: `${outline} rounded-xl`,
    rotate: 12,
  },
  { x: 877, y: 43, w: 31, h: 31, className: ring },
  {
    x: 1150,
    y: -20,
    w: 130,
    h: 130,
    className: `${fill} rounded-3xl`,
    rotate: 12,
  },
  {
    x: -15,
    y: 235,
    w: 60,
    h: 60,
    className: `${fill} rounded-xl`,
    rotate: -12,
  },
  { x: 143, y: 216, w: 28, h: 28, className: `${fill} rounded-full` },
  { x: 56, y: 372, w: 120, h: 120, className: `${fill} rounded-full` },
  { x: 302, y: 383, w: 32, h: 50, className: `${fill} rounded-lg`, rotate: 14 },
  { x: 966, y: 390, w: 41, h: 29, className: `${outline} rounded-sm` },
  { x: 1208, y: 429, w: 31, h: 31, className: ring },
]

function BackgroundShapes() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block"
    >
      {shapes.map((shape, index) => (
        <span
          key={index}
          className={`absolute ${shape.className}`}
          style={{
            left: pct(shape.x, CTA_CANVAS.width),
            top: pct(shape.y, CTA_CANVAS.height),
            width: shape.w,
            height: shape.h,
            transform: shape.rotate ? `rotate(${shape.rotate}deg)` : undefined,
          }}
        />
      ))}
    </div>
  )
}

function CtaSection() {
  return (
    <Section
      background="accent"
      className="relative overflow-hidden text-center"
    >
      <BackgroundShapes />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
        <Image src="/four-avatars.png" alt="" width={1000} height={400} />

        <h2 className="text-text-primary mt-10 text-[36px] leading-10 font-extrabold tracking-[-0.9px] md:text-[56px] md:leading-16 md:tracking-[-1.4px]">
          What will you learn next?
        </h2>
        <p className="text-text-secondary mt-4 text-base leading-7 md:text-lg">
          Start with one course. Build from there.
        </p>

        <div className="mt-10 flex w-full flex-col gap-3 md:flex-row">
          <Link
            href="#"
            className={buttonVariants({
              className: "w-full justify-center px-7 py-3.5 md:max-w-max",
            })}
          >
            Explore all courses
          </Link>
          <Link
            href="#"
            className={buttonVariants({
              variant: "outline",
              className: "w-full justify-center px-7 py-3.5 md:max-w-max",
            })}
          >
            Join Luma
          </Link>
        </div>
      </div>
    </Section>
  )
}

interface ContactInfo {
  label: string
  value: string
  href?: string
  icon?: ReactNode
}

const contactInfo: ContactInfo[] = [
  {
    label: "Email",
    value: "contact@luma.com",
    href: "mailto:contact@luma.com",
  },
  {
    label: "Response Time",
    value: "Up to 24 hours on business days",
  },
]

function ContactIntro() {
  return (
    <div className="max-w-120">
      <p className="text-primary-blue text-xs leading-4 font-semibold tracking-[1.44px] uppercase">
        Contact
      </p>
      <h2 className="text-text-primary mt-4 text-[32px] font-extrabold tracking-[-0.8] not-md:leading-9 md:text-5xl md:tracking-[-1.2px]">
        Get in touch
      </h2>
      <p className="text-text-secondary mt-4 text-sm leading-6 md:text-lg md:leading-7">
        Have a question? We’re here to help. Whether you’re looking for the
        right course, learning with your team or interested in teaching with
        Luma, we’d love to hear from you.
      </p>

      <ul className="mt-10 space-y-4">
        {contactInfo.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-4 rounded-2xl bg-stone-50 p-5"
          >
            <div className="bg-primary-blue-light text-primary-blue flex size-10 shrink-0 items-center justify-center rounded-lg">
              {item.icon}
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-text-primary text-sm">{item.label}</span>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-primary-blue text-sm hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-sm text-slate-500">{item.value}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ContactSection() {
  return (
    <Section>
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
        <ContactIntro />
        <ContactUsForm />
      </div>
    </Section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Courses />
      <FeaturedCourse />
      <HowItWorks />
      <TestimonialStats />
      <PeopleSection />
      <ContactSection />
      <CtaSection />
    </main>
  )
}
