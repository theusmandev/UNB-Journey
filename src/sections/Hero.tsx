import { ArrowUpRight, ArrowDown } from "lucide-react";
import { mainSite } from "@/data/projects";
import { stats } from "@/data/stats";
import { EcosystemIllustration } from "@/components/EcosystemIllustration";

export function Hero() {
  return (
    <section id="home" className="paper relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="font-urdu text-lg text-accent">تین سال، ایک سفر</p>
          <h1 className="display mt-3 text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Three Years of Building Urdu Novel Bank.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            From a simple idea to a growing digital ecosystem for Urdu readers and writers.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#journey"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore My Journey <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={mainSite}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Explore Urdu Novel Bank <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
            >
              View My Projects
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
            {[
              [stats.yearsBuilding, stats.yearsLabel],
              [stats.platforms, stats.platformsLabel],
              [stats.publications, stats.publicationsLabel],
              [stats.community, stats.communityLabel],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="display text-2xl text-foreground">{value}</dd>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{label}</p>
              </div>
            ))}
          </dl>
        </div>

        <EcosystemIllustration />
      </div>
    </section>
  );
}
