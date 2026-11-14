import Link from "next/link"
import Button, { buttonVariants } from "../button/button"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-background-light-yellow border-card-border inline-flex h-17.5 w-full items-center justify-between border-b px-20">
      <h1>
        <img src="./luma..svg" alt="luma." />
      </h1>
      <nav className="hidden items-center justify-center sm:inline-flex">
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
      <div className="inline-flex items-center gap-4">
        <Button variant="ghost">Log in</Button>
        <Button>Start learning</Button>
      </div>
    </header>
  )
}
