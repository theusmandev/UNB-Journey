import { mainSite } from "@/data/projects";
import { SocialRow } from "./SocialRow";

const links = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="display text-lg text-foreground">Urdu Novel Bank</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Building digital spaces for Urdu readers and writers.
            </p>
            <p className="font-urdu mt-3 text-base text-muted-foreground">تین سال، ایک سفر</p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={mainSite}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-accent hover:underline"
                >
                  Main site
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10">
          <SocialRow compact />
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Urdu Novel Bank. All rights reserved.</p>
          <p>Built with curiosity, consistency &amp; countless revisions.</p>
        </div>
      </div>
    </footer>
  );
}
