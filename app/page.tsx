import TestimonialStats from "./components/sections/testimonial/testimonial-section"
import HowItWorks from "./components/sections/how-it-works/how-it-works-section"
import FeaturedCourse, {
  Courses,
} from "./components/sections/courses/courses-section"
import Hero from "./components/sections/hero/hero-section"
import CtaSection from "./components/sections/cta/cta-section"
import ContactSection from "./components/sections/contact/contact-section"
import PeopleSection from "./components/sections/people/people-section"

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
