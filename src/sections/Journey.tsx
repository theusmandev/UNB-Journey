import {
  AlertTriangle,
  Compass,
  FlaskConical,
  Hammer,
  Network,
  Sprout,
  Sun,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { journey, type Stage } from "@/data/journey";

const icons: Record<Stage["icon"], LucideIcon> = {
  seed: Sprout,
  flask: FlaskConical,
  trend: TrendingUp,
  alert: AlertTriangle,
  hammer: Hammer,
  network: Network,
  sun: Sun,
  compass: Compass,
};

export function Journey() {
  return (
    <section id="journey" className="border-t border-border bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="The journey"
          title="Three Years. One Idea. A Growing Journey."
          urdu="سفر"
          lead="Eight stages, told honestly — including the parts that went wrong."
        />

        <ol className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute inset-y-0 left-[15px] w-px bg-border md:hidden"
            aria-hidden="true"
          />
          <div
            className="rule-gold absolute left-0 right-0 top-[15px] hidden h-px md:block"
            aria-hidden="true"
          />
          {journey.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal as="li" key={s.title} delay={i * 60} className="relative ps-12 md:ps-0">
                <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full border border-accent bg-background text-accent md:static md:mb-5">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {s.year}
                </p>
                <h3 className="display mt-2 text-lg text-foreground">
                  {s.title}
                  {s.urdu ? <span className="font-urdu inline-block ml-2 text-sm text-accent">{s.urdu}</span> : null}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
