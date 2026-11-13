import Button from "./components/button/button";
import Header from "./components/header/header";

export default function Home() {
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
    </div>
  );
}
