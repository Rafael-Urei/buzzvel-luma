import Image from "next/image"
import { ReactNode } from "react"
import { Section } from "../../section/section"
import ContactUsForm from "../../forms/contact-us"

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
    icon: "email",
    href: "mailto:contact@luma.com",
  },
  {
    label: "Response Time",
    value: "Up to 24 hours on business days",
    icon: "clock",
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
              {item.icon && (
                <Image
                  src={`/icons/${item.icon}.svg`}
                  alt="Communication Icon"
                  width={20}
                  height={20}
                ></Image>
              )}
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
                <span className="text-text-tertiary text-sm">{item.value}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ContactSection() {
  return (
    <Section>
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
        <ContactIntro />
        <ContactUsForm />
      </div>
    </Section>
  )
}
