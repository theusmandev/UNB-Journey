import { Facebook, Instagram, MessageCircle, Send, Youtube, Image as ImageIcon } from "lucide-react";
import type { Social } from "@/data/socials";
import { socials } from "@/data/socials";

const icons = {
  facebook: Facebook,
  whatsapp: MessageCircle,
  pinterest: ImageIcon,
  instagram: Instagram,
  youtube: Youtube,
  telegram: Send,
} as const;

function Item({ s, compact }: { s: Social; compact?: boolean }) {
  const Icon = icons[s.icon];
  const inner = (
    <>
      <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
      <span className="text-sm">{s.name}</span>
      {!s.url ? <span className="text-xs text-muted-foreground">[ADD URL]</span> : null}
    </>
  );
  const cls = `inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 transition-colors ${
    s.url ? "hover:border-accent hover:text-accent" : "opacity-70"
  } ${compact ? "bg-transparent" : "bg-background"}`;

  return s.url ? (
    <a href={s.url} target="_blank" rel="noreferrer noopener" className={cls}>
      {inner}
    </a>
  ) : (
    <span className={cls} title="Add the real channel link in src/data/socials.ts">
      {inner}
    </span>
  );
}

export function SocialRow({ compact = false }: { compact?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {socials.map((s) => (
        <li key={s.name}>
          <Item s={s} compact={compact} />
        </li>
      ))}
    </ul>
  );
}
