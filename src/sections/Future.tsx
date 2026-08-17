import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { futureDirections } from "@/data/skills";

export function Future() {
  return (
    <section className="border-t border-border bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="The future"
          title="What Comes Next?"
          urdu="آگے کیا؟"
          lead="No roadmap promises — just the directions I'm actually working toward."
        />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {futureDirections.map((f, i) => (
            <Reveal as="li" key={f.title} delay={i * 60} className="bg-card p-6">
              <p className="display text-base text-foreground">{f.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
