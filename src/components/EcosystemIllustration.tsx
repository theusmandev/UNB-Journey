export function EcosystemIllustration() {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 420 420"
        role="img"
        aria-label="Illustration of a manuscript unfolding into a connected digital ecosystem of readers, writers, community and platforms"
        className="mx-auto w-full max-w-md"
      >
        <defs>
          <linearGradient id="page" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--card)" />
            <stop offset="100%" stopColor="var(--secondary)" />
          </linearGradient>
        </defs>

        <circle
          cx="210"
          cy="210"
          r="168"
          fill="none"
          stroke="var(--border)"
          strokeDasharray="3 7"
          className="origin-center animate-[spin_60s_linear_infinite]"
        />
        <circle cx="210" cy="210" r="120" fill="none" stroke="var(--border)" />

        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x = 210 + 120 * Math.cos(rad);
          const y = 210 + 120 * Math.sin(rad);
          return (
            <g key={deg}>
              <line
                x1="210"
                y1="210"
                x2={x}
                y2={y}
                stroke="var(--gold)"
                strokeOpacity="0.35"
                strokeDasharray="120"
                strokeDashoffset="120"
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
              <circle cx={x} cy={y} r="13" fill="var(--card)" stroke="var(--gold)" opacity="0">
                <animate
                  attributeName="opacity"
                  from="0"
                  to="1"
                  dur="0.5s"
                  begin={`${1.1 + i * 0.15}s`}
                  fill="freeze"
                />
              </circle>
            </g>
          );
        })}

        <g>
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
              <line x1="172" y1={y} x2="200" y2={y} stroke="var(--muted-foreground)" strokeOpacity="0.5" />
              <line x1="220" y1={y} x2="248" y2={y} stroke="var(--muted-foreground)" strokeOpacity="0.5" />
            </g>
          ))}
          <circle cx="210" cy="210" r="60" fill="none" stroke="var(--gold)" strokeOpacity="0.5" />
        </g>
      </svg>
    </div>
  );
}
