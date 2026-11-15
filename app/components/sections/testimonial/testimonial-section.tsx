import Image from "next/image"
import { Section } from "../../section/section"

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

export default function TestimonialStats() {
  return (
    <Section>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <figure>
          <span aria-hidden>
            <Image src="/icons/quote.svg" alt="Luma" width={24} height={22} />
          </span>

          <blockquote className="mt-2">
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
