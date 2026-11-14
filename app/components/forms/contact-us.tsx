import Form from "next/form"
import Input from "./input"
import Button from "../button/button"
import TextArea from "./textarea"

export default function ContactUsForm() {
  return (
    <div className="border-card-border w-full max-w-135 space-y-2 rounded-2xl border p-10">
      <h3 className="text-xl leading-8 font-bold tracking-normal">
        Contact us
      </h3>
      <p className="text-text-secondary text-sm leading-6">
        Fill out the fields and we will get in touch.
      </p>
      <Form action="/contact" className="space-y-5 pt-3">
        <fieldset className="flex flex-col gap-y-2">
          <label htmlFor="full-name">Full name</label>
          <Input id="full-name" placeholder="Your name"></Input>
        </fieldset>
        <fieldset className="flex flex-col gap-y-2">
          <label htmlFor="email">Email</label>
          <Input id="email" placeholder="youremail@example.com"></Input>
        </fieldset>
        <fieldset className="flex flex-col gap-y-2">
          <label htmlFor="your-question">Your question</label>
          <TextArea
            id="your-question"
            placeholder="Tell us how we can help..."
          ></TextArea>
        </fieldset>
        <Button className="w-full justify-center rounded-lg px-7 py-3.5 text-center text-sm leading-6 font-bold">
          Send message
        </Button>
      </Form>
    </div>
  )
}
