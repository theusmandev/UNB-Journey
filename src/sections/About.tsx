import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { stats } from "@/data/stats";

export function About() {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <figure className="lg:sticky lg:top-28">
            <div className="flex aspect-[4/5] w-full max-w-xs flex-col items-center justify-center rounded-sm border border-border bg-secondary">
              <div className="px-6 text-center">
                <p className="font-urdu text-2xl text-accent">قاری</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  [YOUR PHOTO]
                </p>
              </div>
            </div>
            <figcaption className="mt-3 max-w-xs text-xs text-muted-foreground">
              Founder of Urdu Novel Bank — reader first, builder second. Started {stats.startDate}.
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Who's behind it"
            title="Behind Urdu Novel Bank"
            urdu="کہانی کے پیچھے"
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I didn't start as a developer. I started as someone who read Urdu novels late at night
              and kept losing them — dead links, deleted posts, files passed around until nobody knew
              where the original was.
            </p>
            <p>
              So I made a small place to keep them. That's genuinely all it was at first. Then people
              found it, asked for things, and I had to learn: blogging, then web management, then
              design, then SEO, then content workflows, then a little automation when the manual work
              got heavier than the writing.
            </p>
            <p>
              Over three years I've broken more than I'd like to admit — hosting, domains, migrations,
              a content structure I had to redo twice. Each time the choice was to stop or to rebuild.
              I kept rebuilding, mostly because readers and writers kept showing up.
            </p>
            <p>
              What exists today isn't one website. It's a set of connected spaces: a library, a portal
              for writers, tools for readers, a community, and archives. It's still unfinished, and I
              think it should be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
