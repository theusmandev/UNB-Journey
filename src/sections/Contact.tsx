import { ArrowUpRight, Mail } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialRow } from "@/components/SocialRow";
import { mainSite } from "@/data/projects";
import { stats } from "@/data/stats";

export function Contact() {
  return (
    <section id="contact" className="paper border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Connect"
          title="Want to Connect?"
          urdu="رابطہ"
          lead="Readers, writers, or anyone building something similar — the door is open."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <a
            href={mainSite}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explore Urdu Novel Bank <ArrowUpRight className="h-4 w-4" />
          </a>

          <div className="mt-8 flex justify-center">
            <SocialRow center />
          </div>

          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
            {stats.email}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            A Community That Keeps Growing — one reader and one writer at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
