import { useState } from "react"

export function Header({
  path,

  navigate,
}: {
  path: string

  navigate: (path: string) => void
}) {
  const [open, setOpen] = useState(false)

  const links = [
    ["/", "Home"],

    ["/work", "Work"],

    ["/about", "About"],

    ["/contact", "Contact"],
  ]

  const go = (nextPath: string) => {
    navigate(nextPath)

    setOpen(false)
  }

  return (
    <header className="site-header">
      <button
        className="wordmark"
        onClick={() => go("/")}
        aria-label="Go to home"
      >
        MFT<span>.</span>
      </button>
      <nav
        className={open ? "nav-links is-open" : "nav-links"}
        aria-label="Main navigation"
      >
        {links.map(([href, label]) => (
          <button
            key={href}
            className={
              path === href ||
              (href === "/work" && path.startsWith("/project/"))
                ? "nav-link is-active"
                : "nav-link"
            }
            onClick={() => go(href)}
          >
            {label}
          </button>
        ))}
      </nav>
      <button
        className="menu-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? "Close" : "Menu"}
      </button>
    </header>
  )
}

export function Footer({ navigate }: { navigate: (path: string) => void }) {
  return (
    <footer className="footer">
      <div>
        <p className="eyebrow light">Have a project in mind?</p>
        <button className="footer-cta" onClick={() => navigate("/contact")}>
          LET&apos;S CONNECT <span>↗</span>
        </button>
      </div>
      <div className="footer-meta">
        <p>Makassar, Indonesia</p>
        <a href="mailto:fathant03@gmail.com">fathant03@gmail.com</a>
        <p>© 2026 Muhammad Fathan Tsaqib</p>
      </div>
    </footer>
  )
}
