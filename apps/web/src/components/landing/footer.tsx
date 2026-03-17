import Qlogo from "./Qlogo"

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Integrations"],
  Company: ["About", "Careers", "Blog", "Contact"],
  Resources: ["Documentation", "API Reference", "Community", "Status"],
  Legal: ["Privacy", "Terms", "Compliance", "Cookie Policy"],
}

const Footer = () => (
  <footer className="bg-secondary-foreground/70 py-16 dark:bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-5">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-4 flex items-center gap-2">
            <Qlogo className="h-8 w-8" />
            <span className="font-display text-lg font-bold text-primary-foreground">
              Quantix
            </span>
          </div>
          <p className="text-sm leading-relaxed text-primary-foreground/50">
            Enterprise resource planning for the modern era.
          </p>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-display mb-4 text-sm font-semibold text-primary-foreground">
              {title}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/50 transition-colors hover:text-primary-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row">
        <span className="text-sm text-primary-foreground/40">
          © 2026 Quantix. All rights reserved.
        </span>
        <div className="flex gap-6 text-sm text-primary-foreground/40">
          <a
            href="#"
            className="transition-colors hover:text-primary-foreground"
          >
            Twitter
          </a>
          <a
            href="#"
            className="transition-colors hover:text-primary-foreground"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="transition-colors hover:text-primary-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
