import Image from "next/image"
import Button from "../../button/button"
import { Section } from "../../section/section"

export default function Hero() {
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
              alt="Three people avatars, a woman and two men."
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
