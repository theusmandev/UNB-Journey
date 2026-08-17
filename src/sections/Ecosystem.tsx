import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectIcon } from "@/components/ProjectIcon";
import { projects } from "@/data/projects";

export function Ecosystem() {
  const nodes = projects.filter((p) => p.featured);
  const [active, setActive] = useState(0);
  const selected = nodes[active] ?? nodes[0]!;

  return (
    <section id="ecosystem" className="border-t border-border bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="The ecosystem"
          title="One Idea, Several Connected Spaces"
          urdu="ایک نظام"
          lead="Everything orbits the same centre: making Urdu literature easier to find, publish and talk about."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Desktop radial map */}
          <div className="relative hidden aspect-square w-full max-w-lg lg:block">
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
              {nodes.map((_, i) => {
                const rad = ((i * 360) / nodes.length - 90) * (Math.PI / 180);
                return (
                  <line
                    key={i}
                    x1="200"
                    y1="200"
                    x2={200 + 150 * Math.cos(rad)}
                    y2={200 + 150 * Math.sin(rad)}
                    stroke={i === active ? "var(--gold)" : "var(--border)"}
                    strokeWidth={i === active ? 1.5 : 1}
                    className="transition-all duration-500"
                  />
                );
              })}
              <circle cx="200" cy="200" r="150" fill="none" stroke="var(--border)" strokeDasharray="2 8" />
            </svg>

            <span className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-accent bg-background text-center text-xs font-medium text-foreground">
              Urdu
              <br />
              Novel Bank
            </span>

            {nodes.map((n, i) => {
              const rad = ((i * 360) / nodes.length - 90) * (Math.PI / 180);
              const left = 50 + 37.5 * Math.cos(rad);
              const top = 50 + 37.5 * Math.sin(rad);
              return (
                <button
                  key={n.url}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  style={{ left: `${left}%`, top: `${top}%` }}
                  className={`absolute w-32 -translate-x-1/2 -translate-y-1/2 rounded-sm border px-3 py-2 text-xs transition-all duration-300 ${
                    i === active
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border bg-background text-foreground hover:border-accent"
                  }`}
                >
                  {n.name}
                </button>
              );
            })}
          </div>

          {/* Mobile / detail list */}
          <div>
            <ul className="space-y-2 lg:hidden">
              {nodes.map((n, i) => (
                <li key={n.url}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={i === active}
                    className={`flex w-full items-center gap-3 rounded-sm border px-4 py-3 text-left text-sm transition-colors ${
                      i === active ? "border-accent" : "border-border"
                    }`}
                  >
                    <ProjectIcon name={n.icon} className="h-4 w-4 text-accent" />
                    {n.name}
                  </button>
                  {i === active ? (
                    <div className="border-s border-accent/50 px-4 py-3 ms-5">
                      <p className="text-sm text-muted-foreground">{n.description}</p>
                      <a
                        href={n.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-2 inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                      >
                        Visit <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>

            <div className="hidden rounded-sm border border-border bg-background p-7 lg:block">
              <span className="grid h-10 w-10 place-items-center rounded-sm bg-secondary text-accent">
                <ProjectIcon name={selected.icon} className="h-5 w-5" />
              </span>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-5">
                {selected.category}
              </p>
              <h3 className="display mt-2 text-xl text-foreground">{selected.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {selected.description}
              </p>
              <a
                href={selected.url}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Visit {selected.name} <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
