import { ComponentProps, ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { tv, VariantProps } from "tailwind-variants"
import Button from "./components/button/button"
import ContactUsForm from "./components/forms/contact-us"
import { Stepper, StepperStep, StepShape } from "./components/stepper/stepper"

const pct = (value: number, total: number) => `${(value / total) * 100}%`

const sectionStyles = tv({
  slots: {
    base: "py-25",
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

const sectionHeaderStyles = tv({
  slots: {
    base: "flex flex-col",
    eyebrow: "text-xs leading-4 font-semibold tracking-[1.44px] uppercase",
    title: "pt-4 font-extrabold tracking-[-1.6px]",
    description: "pt-6 text-lg leading-7 tracking-normal",
  },
  variants: {
    align: {
      left: "",
      center: { base: "items-center text-center" },
    },
    size: {
      md: { title: "text-[48px] leading-17.5" },
      lg: { title: "text-4xl md:text-6xl" },
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
    size: "md",
    tone: "default",
  },
})

interface SectionHeaderProps extends VariantProps<typeof sectionHeaderStyles> {
  eyebrow: string
  title: string
  description?: string
}

function SectionHeader({
  eyebrow,
  title,
  description,
  align,
  size,
  tone,
}: SectionHeaderProps) {
  const styles = sectionHeaderStyles({ align, size, tone })

  return (
    <div className={styles.base()}>
      <span className={styles.eyebrow()}>{eyebrow}</span>
      <h2 className={styles.title()}>{title}</h2>
      {description && <p className={styles.description()}>{description}</p>}
    </div>
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
    title: "text-text-primary text-lg font-bold",
    description: "text-tertiary pt-[12px] text-sm tracking-normal",
  },
})

function CourseCard({ card }: { card: Course }) {
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

function Hero() {
  return (
    <Section background="yellow">
      <div className="flex items-center">
        <div>
          <span className="text-primary-blue text-xs leading-4 font-semibold tracking-[1.44px] uppercase">
            Learn at your own pace
          </span>
          <h1 className="pt-4 text-[65px] leading-17.5 font-extrabold tracking-[-1.6px]">
            Build skills that actually move you forward.
          </h1>
          <p className="text-text-secondary pt-6 text-lg leading-7 tracking-normal">
            Practical courses taught by people who do the work every day. Learn
            design, technology, business and more — one focused lesson at a
            time.
          </p>
          <div className="inline-flex gap-4 pt-8">
            <Button className="px-7 py-3.5">Explore courses</Button>
            <Button variant="outline" className="px-7 py-3.5">
              See how it works
            </Button>
          </div>
          <div className="flex items-center gap-2 pt-8">
            <img src="/three-avatars.png" alt="" />
            <p className="text-sm">
              <strong>Trusted by 24,000+</strong> learners
            </p>
          </div>
        </div>
        <div>
          <img src="/woman.png" alt="" />
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
      <SectionHeader
        eyebrow="Find your next skill"
        title="Learn something worth knowing."
        description="Short, practical courses designed around skills you can put to work immediately."
      />
      <div className="grid grid-cols-4 gap-4 pt-10">
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
      <div className="flex items-start gap-8">
        <div>
          <img src="/featured-course.png" alt="" />
        </div>
        <div>
          <SectionHeader
            tone="inverted"
            eyebrow="Most popular this month"
            title="Designing products people understand."
            description="Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design."
          />
          <p className="pt-6 text-lg leading-7 tracking-normal text-white">
            with Maya Chen · Senior Product Designer
          </p>
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
      <SectionHeader
        align="center"
        size="lg"
        eyebrow="How Luma works"
        title="Less browsing. More learning."
      />
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
  avatar: "/avatars/alex-morgan.jpg",
}

const stats = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
]

function TestimonialStats() {
  return (
    <Section>
      <div className="grid items-center gap-12 md:grid-cols-[1fr_auto] md:gap-16">
        <figure>
          <span
            aria-hidden
            className="text-primary-blue block text-6xl leading-none font-bold"
          >
            &quot;
          </span>

          <blockquote className="mt-2 max-w-xl">
            <p className="text-text-primary text-3xl leading-snug font-medium tracking-tight">
              {testimonial.quote}
            </p>
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
              <p className="text-text-primary text-base font-semibold">
                {testimonial.author}
              </p>
              <p className="text-sm text-slate-500">{testimonial.role}</p>
            </div>
          </figcaption>
        </figure>

        <dl className="border-primary-blue-light flex flex-col gap-4 border-t pt-12 md:border-t-0 md:border-l md:pt-0 md:pl-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="mt-2 text-base text-slate-500">{stat.label}</dt>
              <dd className="text-primary-blue text-6xl leading-none font-bold tracking-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}

const PEOPLE_CANVAS = { width: 520, height: 497 }

interface Tile {
  src: string
  alt: string
  x: number
  y: number
  w: number
  h: number
}

const tiles: Tile[] = [
  {
    src: "/people/01.jpg",
    alt: "Student raising her hand at a desk",
    x: 35,
    y: 80,
    w: 103,
    h: 154,
  },
  {
    src: "/people/02.jpg",
    alt: "Group of students studying together",
    x: 0,
    y: 247,
    w: 138,
    h: 207,
  },
  {
    src: "/people/03.jpg",
    alt: "Student reading a book",
    x: 154,
    y: 0,
    w: 103,
    h: 170,
  },
  {
    src: "/people/04.jpg",
    alt: "Two students practicing music by a window",
    x: 154,
    y: 183,
    w: 103,
    h: 172,
  },
  {
    src: "/people/05.jpg",
    alt: "Student reading at his desk",
    x: 154,
    y: 368,
    w: 103,
    h: 128,
  },
  {
    src: "/people/06.jpg",
    alt: "Graduate holding a diploma",
    x: 272,
    y: 8,
    w: 103,
    h: 138,
  },
  {
    src: "/people/07.jpg",
    alt: "Student working on a laptop at home",
    x: 272,
    y: 158,
    w: 103,
    h: 138,
  },
  {
    src: "/people/08.jpg",
    alt: "Teacher on a video call",
    x: 272,
    y: 309,
    w: 103,
    h: 154,
  },
  {
    src: "/people/09.jpg",
    alt: "Student holding folders outdoors",
    x: 392,
    y: 60,
    w: 128,
    h: 205,
  },
  {
    src: "/people/10.jpg",
    alt: "Student with a coffee and a backpack",
    x: 392,
    y: 278,
    w: 103,
    h: 132,
  },
]

function PeopleCollage() {
  return (
    <div
      className="relative mx-auto aspect-520/497 w-full max-w-130 lg:mx-0"
      aria-label="Photos of international students and teachers"
    >
      <div
        aria-hidden
        className="bg-primary-blue-light absolute top-[-2.9%] left-[2.9%] aspect-square w-[96.2%] rounded-full"
      />

      {tiles.map((tile) => (
        <div
          key={tile.src}
          className="absolute overflow-hidden rounded-lg shadow-md"
          style={{
            left: pct(tile.x, PEOPLE_CANVAS.width),
            top: pct(tile.y, PEOPLE_CANVAS.height),
            width: pct(tile.w, PEOPLE_CANVAS.width),
            height: pct(tile.h, PEOPLE_CANVAS.height),
          }}
        >
          <Image
            src={tile.src}
            alt={tile.alt}
            fill
            sizes="(min-width: 1024px) 140px, 30vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}

function PeopleSection() {
  return (
    <Section background="yellow">
      <div className="grid items-center gap-16 lg:grid-cols-[1fr_520px]">
        <div>
          <p className="text-primary-blue text-sm font-medium tracking-widest uppercase">
            The people
          </p>
          <h2 className="text-text-primary mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Meet international students &amp; teachers
          </h2>
          <p className="mt-8 text-lg leading-7 text-slate-500">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
            senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
            facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
            urna, faucibus aenean lorem faucibus integer.
          </p>
          <Link
            href="/people"
            className="text-text-primary border-primary-blue-light mt-10 inline-flex h-13.5 items-center rounded-xl border px-7 text-base font-semibold transition-colors hover:bg-slate-50"
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

const avatars = [
  "/avatars/01.jpg",
  "/avatars/02.jpg",
  "/avatars/03.jpg",
  "/avatars/04.jpg",
]

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
        <div role="img" aria-label="Luma learners" className="flex -space-x-1">
          {avatars.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-full border-2 border-yellow-200 object-cover"
            />
          ))}
        </div>

        <h2 className="text-text-primary mt-10 text-4xl font-bold tracking-tight md:text-6xl">
          What will you learn next?
        </h2>
        <p className="mt-4 text-lg text-slate-500">
          Start with one course. Build from there.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/courses"
            className="bg-primary-blue inline-flex h-13 items-center justify-center rounded-xl px-7 text-base font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Explore all courses
          </Link>
          <Link
            href="/signup"
            className="text-text-primary border-primary-blue-light inline-flex h-13 items-center justify-center rounded-xl border bg-white px-7 text-base font-semibold transition-colors hover:bg-slate-50"
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
      <p className="text-primary-blue text-xs font-semibold tracking-widest uppercase">
        Contact
      </p>
      <h2 className="text-text-primary mt-4 text-5xl font-extrabold tracking-tight">
        Get in touch
      </h2>
      <p className="text-text-secondary mt-4 text-lg leading-7">
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
      <div className="flex items-center justify-between">
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
      <CtaSection />
      <ContactSection />
    </main>
  )
}
