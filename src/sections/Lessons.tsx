import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { lessons } from "@/data/journey";

export function Lessons() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Lessons" title="What Three Years Taught Me" />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {lessons.map((l, i) => (
            <Reveal
              as="li"
              key={l.title}
              delay={i * 50}
              className="bg-background p-6 transition-colors hover:bg-secondary"
            >
              <p className="display text-base text-foreground">{l.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
