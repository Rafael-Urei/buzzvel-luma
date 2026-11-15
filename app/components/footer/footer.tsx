import Link from "next/link"

const linkGroups = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Categories", href: "/categories" },
      { label: "Instructors", href: "/instructors" },
      { label: "For Teams", href: "/teams" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact", href: "/contact" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-background-darkblue text-text-white-tertiary">
      <div className="mx-auto w-full max-w-280 px-6 pt-16 md:px-0">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-[1.9fr_1fr_1fr_1fr] md:gap-0">
          <div className="not-md:col-span-2">
            <Link
              href="#"
              className="text-xl font-semibold tracking-tight text-white"
            >
              luma.
            </Link>
            <p className="mt-3 text-sm leading-6 md:max-w-55">
              Practical learning for curious people.
            </p>
          </div>

          {linkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="text-text-white-secondary text-xs leading-4 font-semibold tracking-[1.44px] uppercase">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-text-white-tertiary text-sm leading-6"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-text-secondary mt-14 border-t py-8">
          <p className="md:text-text-white-secondary text-[13px] leading-[19.5px] text-white not-md:text-center">
            &copy; 2026 Luma Learning
          </p>
        </div>
      </div>
    </footer>
  )
}
