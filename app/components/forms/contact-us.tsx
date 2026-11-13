import Form from 'next/form'
import Input from './input'
import Button from '../button/button'

export default function ContactUsForm() {
  return (
    <div className='rounded-lg border p-10 max-w-135 w-full'>
      <h3 className='font-bold text-xl tracking-normal leading-8'>Contact us</h3>
      <p className='text-text-secondary text-sm leading-6'>Fill out the fields and we will get in touch.</p>
      <Form action="/contact">
        <fieldset className='flex flex-col'>
          <label htmlFor="full-name">Full name</label>
          <Input id="full-name" placeholder="Your name"></Input>
        </fieldset>
        <fieldset className='flex flex-col'>
          <label htmlFor="email">Email</label>
           <Input id="email" placeholder="youremail@example.com"></Input>
        </fieldset>
        <fieldset className='flex flex-col'>
          <label htmlFor="your-question">Your question</label>
        </fieldset>
        <Button>Send message</Button>
      </Form>
    </div>
  )
}
