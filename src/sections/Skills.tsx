import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { builtWith, skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Skills"
          title="Learned by Building, Not by Listing"
          lead="Grouped by the kind of work it came from."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <div className="h-full rounded-sm border border-border bg-card p-6">
                <h3 className="display text-base text-foreground">{g.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="display text-xl text-foreground">Built With</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Tools I've explored throughout the journey — not every project uses every one.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {builtWith.map((g, i) => (
              <Reveal key={g.title} delay={i * 60}>
                <div className="h-full rounded-sm border border-border p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">{g.title}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
