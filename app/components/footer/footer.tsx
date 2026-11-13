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
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto w-full max-w-280 px-6 pt-16 md:px-0">
        <div className="grid gap-12 md:grid-cols-[1.9fr_1fr_1fr_1fr] md:gap-0">
          <div>
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight text-white"
            >
              luma.
            </Link>
            <p className="mt-3 max-w-55 text-sm leading-6">
              Practical learning for curious people.
            </p>
          </div>

          {linkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="text-xs font-medium uppercase tracking-widest text-slate-200">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 border-t border-slate-700 py-8">
          <p className="text-sm text-slate-300">
            &copy; 2026 Luma Learning
          </p>
        </div>
      </div>
    </footer>
  )
}
