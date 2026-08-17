import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/data/journey";

export function CaseStudies() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Case studies"
          title="How Each Piece Came Together"
          lead="Short versions — the problem, the process, and what actually changed."
        />

        <div className="mt-12 space-y-5">
          {caseStudies.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <article className="rounded-sm border border-border bg-card p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="display text-xl text-foreground">{c.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.headline}</p>
                  </div>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                  >
                    Visit <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <ol className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {c.steps.map((s, idx) => (
                    <li key={s.label} className="border-s-2 border-accent/40 ps-4">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {String(idx + 1).padStart(2, "0")} · {s.label}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-foreground">{s.body}</p>
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
