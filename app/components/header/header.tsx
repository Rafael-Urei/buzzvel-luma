import Link from "next/link"
import Button, { buttonVariants } from "../button/button"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-background-light-yellow border-card-border inline-flex h-17.5 w-full items-center justify-between border-b px-6 md:px-20">
      <h1>
        <img src="./luma..svg" alt="luma." />
      </h1>
      <nav className="hidden items-center justify-center md:inline-flex">
        <Link href="#courses" className={buttonVariants({ variant: "ghost" })}>
          Courses
        </Link>
        <Link
          href="#for_teams"
          className={buttonVariants({ variant: "ghost" })}
        >
          For Teams
        </Link>
        <Link
          href="#community"
          className={buttonVariants({ variant: "ghost" })}
        >
          Community
        </Link>
        <Link href="#about" className={buttonVariants({ variant: "ghost" })}>
          About
        </Link>
      </nav>
      <div className="hidden items-center gap-4 md:inline-flex">
        <Button variant="ghost">Log in</Button>
        <Button>Start learning</Button>
      </div>
      <button className="block md:hidden">
        <svg
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.75 0.75H18.75M0.75 5.75H18.75M0.75 10.75H18.75"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke="#171B2C"
          />
        </svg>
      </button>
    </header>
  )
}
