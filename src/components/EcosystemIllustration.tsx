import { useState } from "react";
import { projects } from "@/data/projects";

const featuredNodes = projects.filter((p) => p.featured);

// Degrees for each node — same layout as the existing static SVG
const DEGREES = [0, 60, 120, 180, 240, 300];

// SVG center and orbit radius
const SVG_CX = 210;
const SVG_CY = 210;
const ORBIT_R = 120;



/**
 * Per-node label layout — calculated from the angle so labels radiate
 * outward and never overlap lines, the center icon, or each other.
 *
 * Label anchor point = node circle edge + a gap in the radial direction.
 *   cos > +0.3  → text-anchor "start"  (label extends rightward)
 *   cos < -0.3  → text-anchor "end"    (label extends leftward)
 *   |cos| ≤ 0.3 → text-anchor "middle" (top/bottom — centered)
 *
 * Vertical dy aligns the text baseline correctly per quadrant.
 */
function getLabelLayout(
  deg: number,
  cx: number,
  cy: number
): { lx: number; ly: number; anchor: "start" | "middle" | "end"; dy: number } {
  const rad = (deg * Math.PI) / 180;
  const cosA = Math.cos(rad);
  const sinA = Math.sin(rad);

  // Place anchor 26px beyond the node circle edge (r=13 + 13px gap)
  const GAP = 26;
  const lx = cx + cosA * GAP;
  const ly = cy + sinA * GAP;

  let anchor: "start" | "middle" | "end" = "middle";
  if (cosA > 0.3) anchor = "start";
  else if (cosA < -0.3) anchor = "end";

  // dy = vertical offset from anchor point to text baseline
  // sin > 0.5  → node is in lower half → push baseline down (+11)
  // sin < -0.5 → node is in upper half → push baseline up  (−3)
  // else       → left/right → center on node              (+4)
  let dy = 4;
  if (sinA > 0.5) dy = 11;
  else if (sinA < -0.5) dy = -3;

  return { lx, ly, anchor, dy };
}

export function EcosystemIllustration() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative">
      {/*
       * viewBox expanded to give labels breathing room on all sides,
       * especially the leftward-extending labels (180° node = "Smart Urdu
       * Novel Bank") on narrow viewports. Extra 60px left, 50px top/bottom,
       * 60px right keep proportions balanced without clipping.
       */}
      <svg
        viewBox="-60 -50 540 520"
        role="img"
        aria-label="Illustration of a manuscript unfolding into a connected digital ecosystem of readers, writers, community and platforms"
        className="mx-auto w-full max-w-md"
        style={{ overflow: "visible" }}
      >
        {/*
          Responsive font size for node labels.
          CSS px on SVG text is subject to the viewBox CTM, so:
            mobile (375px viewport, viewBox 540 wide): 13px × (375/540) ≈ 9px rendered
            but that's still bigger than current 9.5 × (375/480) ≈ 7.4px.
          At ≥640px (desktop, SVG capped at max-w-md ≈ 448px): 9.5px stays as-is.
        */}
        <style>{`
          .eco-label { font-size: 13px; }
          @media (min-width: 640px) { .eco-label { font-size: 9.5px; } }
        `}</style>
        <defs>
          <linearGradient id="page" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--card)" />
            <stop offset="100%" stopColor="var(--secondary)" />
          </linearGradient>
        </defs>

        {/* Outer dashed spinning ring */}
        <circle
          cx={SVG_CX}
          cy={SVG_CY}
          r="168"
          fill="none"
          stroke="var(--border)"
          strokeDasharray="3 7"
          className="origin-center animate-[spin_60s_linear_infinite]"
        />

        {/* Inner orbit ring */}
        <circle cx={SVG_CX} cy={SVG_CY} r={ORBIT_R} fill="none" stroke="var(--border)" />

        {/* Six animated nodes */}
        {DEGREES.map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const cx = SVG_CX + ORBIT_R * Math.cos(rad);
          const cy = SVG_CY + ORBIT_R * Math.sin(rad);
          const project = featuredNodes[i];
          const isHovered = hovered === i;

          if (!project) return null;

          const { lx, ly, anchor, dy } = getLabelLayout(deg, cx, cy);

          return (
            <g
              key={deg}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Animated connecting line */}
              <line
                x1={SVG_CX}
                y1={SVG_CY}
                x2={cx}
                y2={cy}
                stroke="var(--gold)"
                strokeOpacity={isHovered ? 0.75 : 0.35}
                strokeWidth={isHovered ? 1.5 : 1}
                strokeDasharray="120"
                strokeDashoffset="120"
                style={{ transition: "stroke-opacity 0.2s, stroke-width 0.2s" }}
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="120"
                  to="0"
                  dur="1.4s"
                  begin={`${0.3 + i * 0.15}s`}
                  fill="freeze"
                />
              </line>

              {/* Circle node */}
              <circle
                cx={cx}
                cy={cy}
                r={isHovered ? 16 : 13}
                fill={isHovered ? "var(--gold)" : "var(--card)"}
                stroke="var(--gold)"
                strokeWidth={isHovered ? 2 : 1.5}
                opacity="0"
                style={{ transition: "r 0.2s, fill 0.2s, stroke-width 0.2s" }}
              >
                <animate
                  attributeName="opacity"
                  from="0"
                  to="1"
                  dur="0.5s"
                  begin={`${1.1 + i * 0.15}s`}
                  fill="freeze"
                />
              </circle>

              {/*
               * Permanently visible label — always shown, never gated behind hover.
               *
               * Legibility technique: SVG paintOrder="stroke fill" with a thick
               * background-colored stroke drawn first, then the fill text on top.
               * This creates a knockout halo against the diagram lines without
               * needing a separate rect/pill element.
               *
               * Color: muted-foreground at rest → gold on hover, matching the site palette.
               */}
              <text
                x={lx}
                y={ly + dy}
                textAnchor={anchor}
                fontFamily="var(--font-sans)"
                fontWeight="600"
                letterSpacing="0.01em"
                className="eco-label"
                fill={isHovered ? "var(--gold)" : "var(--muted-foreground)"}
                stroke="var(--background)"
                strokeWidth="3"
                strokeLinejoin="round"
                style={{
                  paintOrder: "stroke fill",
                  pointerEvents: "none",
                  userSelect: "none",
                  transition: "fill 0.2s",
                }}
              >
                {project.name}
              </text>
            </g>
          );
        })}

        {/* Center book/manuscript icon */}
        <g style={{ pointerEvents: "none" }}>
          <rect
            x="160"
            y="158"
            width="100"
            height="104"
            rx="6"
            fill="url(#page)"
            stroke="var(--border)"
          />
          <line x1="210" y1="158" x2="210" y2="262" stroke="var(--border)" />
          {[178, 194, 210, 226, 242].map((y) => (
            <g key={y}>
              <line
                x1="172"
                y1={y}
                x2="200"
                y2={y}
                stroke="var(--muted-foreground)"
                strokeOpacity="0.5"
              />
              <line
                x1="220"
                y1={y}
                x2="248"
                y2={y}
                stroke="var(--muted-foreground)"
                strokeOpacity="0.5"
              />
            </g>
          ))}
          <circle
            cx="210"
            cy="210"
            r="60"
            fill="none"
            stroke="var(--gold)"
            strokeOpacity="0.5"
          />
        </g>
      </svg>
    </div>
  );
}
