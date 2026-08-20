import { Facebook, Instagram, MessageCircle, Send, Youtube } from "lucide-react";
import type { Social } from "@/data/socials";
import { socials } from "@/data/socials";

/** Pinterest brand icon — inline SVG, matches Lucide's 16×16 viewBox and stroke style. */
function PinterestIcon({ className, "aria-hidden": ariaHidden }: { className?: string; "aria-hidden"?: boolean | "true" | "false" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden={ariaHidden}
    >
      {/* Official Pinterest 'P' path */}
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

const icons = {
  facebook: Facebook,
  whatsapp: MessageCircle,
  pinterest: PinterestIcon,
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

export function SocialRow({ compact = false, center = false }: { compact?: boolean; center?: boolean }) {
  return (
    <ul className={`flex flex-wrap gap-2.5${center ? " justify-center" : ""}`}>
      {socials.map((s) => (
        <li key={s.name}>
          <Item s={s} compact={compact} />
        </li>
      ))}
    </ul>
  );
}
