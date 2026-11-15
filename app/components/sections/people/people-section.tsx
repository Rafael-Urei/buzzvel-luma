import Image from "next/image"
import { Section } from "../../section/section"
import Link from "next/link"

function PeopleCollage() {
  return <Image src="/students.png" alt="" width={530} height={525}></Image>
}

export default function PeopleSection() {
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
