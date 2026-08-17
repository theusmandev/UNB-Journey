import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ProjectIcon } from "@/components/ProjectIcon";
import { projects, type Project } from "@/data/projects";

function Card({ p }: { p: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-sm border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-10 w-10 place-items-center rounded-sm bg-secondary text-accent">
          <ProjectIcon name={p.icon} className="h-5 w-5" />
        </span>
        <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
          {p.category}
        </span>
      </div>
      <h3 className="display mt-5 text-lg text-foreground">
        {p.name}
        {p.urdu ? <span className="font-urdu inline-block ml-2 text-sm text-accent">{p.urdu}</span> : null}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{p.status}</span>
        <a
          href={p.url}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent"
        >
          Visit Project
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-t border-border bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="The projects"
          title="What I've Built So Far"
          urdu="منصوبے"
          lead="Each one started because something was breaking or missing."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.url} delay={i * 60} className="h-full">
              <Card p={p} />
            </Reveal>
          ))}
        </div>

        <h3 className="display mt-16 text-xl text-foreground">
          Other Experiments &amp; Related Projects
        </h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p, i) => (
            <Reveal key={p.url} delay={i * 60} className="h-full">
              <Card p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
