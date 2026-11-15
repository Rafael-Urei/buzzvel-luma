import { Section } from "../../section/section"
import { Stepper, StepperStep, StepShape } from "../../stepper/stepper"

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

export default function HowItWorks() {
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

      <div className="mt-10 md:mt-20">
        <Stepper steps={steps} />
      </div>
    </Section>
  )
}
