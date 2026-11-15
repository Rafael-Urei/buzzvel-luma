import Link from "next/link"
import Button, { buttonVariants } from "../button/button"
import Image from "next/image"
import MobileMenu from "../menu/menu"

export default function Header() {
  return (
    <header className="bg-background-light-yellow border-card-border sticky top-0 z-20 inline-flex h-17.5 w-full items-center justify-between border-b px-6 md:px-20">
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
      <div className="block md:hidden">
        <MobileMenu></MobileMenu>
      </div>
    </header>
  )
}
