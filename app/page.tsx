import { tv } from "tailwind-variants";
import Button from "./components/button/button";

type CardProps = {
  id: string;
  title: string;
  description: string;
}

export function Card({ card }: { card: CardProps }) {
  const cardVariants = tv({
    base: "border rounded-[16px] p-[28px] flex flex-col justify-start",
    slots: {
      title: "font-bold text-lg text-text-primary",
      description: "text-tertiary text-sm tracking-normal pt-[12px]"
    }
  })

  const { base, title, description} = cardVariants();
  return (
    <div className={base()}>
      <div className="text-center rounded-md bg-primary-blue-light text-primary-blue font-semibold text-xs py-1 px-2 w-max flex items-center justify-center">
        {card.id}
      </div>
      <span className={title()}>{card.title}</span>
      <p className={description()}>{card.description}</p>
      <div className="pt-6">
          Explore (icon)
      </div>
    </div>
  )
}

export default function Home() {
  const cards = [
    {
      id: "01",
      title: "Product Design",
      description: "Turn complex problems into clear, useful experiences.",
    },
    {
      id: "02",
      title: "Technology",
      description: "Build a stronger understanding of the tools shaping digital products.",
    },
    {
      id: "03",
      title: "Business",
      description: "Develop practical skills for better decisions and stronger teams.",
    },
    {
      id: "04",
      title: "Creative",
      description: "Explore new ways to communicate, create and tell stories.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      <section id="courses" className="py-25 px-20 bg-background-light-yellow flex items-center">
        <div>
          <span className="text-primary-blue text-xs font-semibold uppercase tracking-[1.44px] leading-4">Learn at your own pace</span>
          <h1 className="font-extrabold text-[65px] leading-17.5 tracking-[-1.6px] pt-4">
            Build skills that actually move you forward.
          </h1>
          <p className="text-lg text-text-secondary leading-7 tracking-normal pt-6">Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.</p>
          <div className="inline-flex gap-4 pt-8">
            <Button className="py-3.5 px-7">
              Explore courses
            </Button>
            <Button variant="outline" className="py-3.5 px-7">
              See how it works
            </Button>
          </div>
          <div className="pt-8 flex items-center gap-2">
            <img src="./three-avatars.png" alt=""></img>
            <p className="text-sm"><strong>Trusted by 24,000+</strong> learners</p>
          </div>
        </div>
        <div>
          <img src="./woman.png" alt=""></img>
        </div>
      </section>

      <section className="py-25 px-20">
        <span className="text-primary-blue text-xs font-semibold uppercase tracking-[1.44px] leading-4">Find your next skill</span>
        <h2 className="font-extrabold text-[48px] leading-17.5 tracking-[-1.6px] pt-4">
          Learn something worth knowing.
        </h2>
        <p className="text-lg text-text-secondary leading-7 tracking-normal pt-6">Short, practical courses designed around skills you can put to work immediately.</p>
        <div className="grid grid-cols-4 gap-4 pt-10">
          {cards.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </section>

      <section className="py-25 px-20 bg-primary-blue flex items-start gap-8">
        <div>
          <img src="./featured-course.png" alt=""></img>
        </div>
        <div>
          <span className="text-white text-xs font-semibold uppercase tracking-[1.44px] leading-4">Most popular this month</span>
          <h2 className="font-extrabold text-white text-[48px] leading-17.5 tracking-[-1.6px] pt-4">
            Designing products people understand.
          </h2>
          <p className="text-lg text-white leading-7 tracking-normal pt-6">Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.</p>
          <p className="text-lg text-white leading-7 tracking-normal pt-6">with Maya Chen · Senior Product Designer</p>
        </div>
      </section>

      <section className="py-25 px-20 bg-background-light-yellow text-center">
          <span className="text-primary-blue text-center text-xs font-semibold uppercase tracking-[1.44px] leading-4">How Luma works</span>
          <h2 className="font-extrabold text-center text-[48px] leading-17.5 tracking-[-1.6px] pt-4">
            Less browsing. More learning.
          </h2>
      </section>

      <section className="py-25 px-20 bg-transparent flex items-start gap-8">
          <span className="text-white text-xs font-semibold uppercase tracking-[1.44px] leading-4">The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.</span>
          <p className="text-lg text-white leading-7 tracking-normal pt-6">Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.</p>
          <p className="text-lg text-white leading-7 tracking-normal pt-6">with Maya Chen · Senior Product Designer</p>
      </section>
    </div>
  );
}
