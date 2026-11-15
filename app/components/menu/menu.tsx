"use client"

import { useState } from "react"
import Link from "next/link"
import Sheet from "./sheet"
import Image from "next/image"

const links = [
  { label: "Courses", href: "/#courses" },
  { label: "For Teams", href: "/#for-teams" },
  { label: "Community", href: "/#community" },
  { label: "About", href: "/#about" },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="md:hidden"
      >
        <Image
          src="/icons/menu-icon.svg"
          alt="Menu Icon"
          width={24}
          height={24}
        />
      </button>

      <Sheet
        open={open}
        onClose={() => setOpen(false)}
        side="right"
        className="max-w-sm"
      >
        <nav className="flex flex-col gap-4 p-6">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="self-end"
          >
            <Image
              src="/icons/arrow.svg"
              alt="Menu Icon"
              width={24}
              height={24}
            />
          </button>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Sheet>
    </>
  )
}
