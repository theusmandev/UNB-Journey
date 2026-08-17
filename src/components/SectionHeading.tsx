export function SectionHeading({
  eyebrow,
  title,
  urdu,
  lead,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  urdu?: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <header className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="display mt-3 text-3xl leading-tight text-foreground sm:text-4xl">
        {title}
        {urdu ? (
          <span className="font-urdu mt-2 block text-xl text-muted-foreground">
            {urdu}
          </span>
        ) : null}
      </h2>
      <div
        className={`rule-gold mt-5 h-px w-24 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {lead ? <p className="mt-5 text-base leading-relaxed text-muted-foreground">{lead}</p> : null}
    </header>
  );
}
