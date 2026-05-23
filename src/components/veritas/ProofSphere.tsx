export function ProofSphere() {
  const size = 460;
  const r = 180;
  const cx = size / 2;
  const cy = size / 2;

  // Lattice nodes around the sphere
  const nodes = Array.from({ length: 24 }).map((_, i) => {
    const a = (i / 24) * Math.PI * 2;
    return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r, i };
  });

  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      {/* Outer corner brackets */}
      <div className="absolute inset-0">
        {[
          "top-0 left-0 border-t border-l",
          "top-0 right-0 border-t border-r",
          "bottom-0 left-0 border-b border-l",
          "bottom-0 right-0 border-b border-r",
        ].map((cls) => (
          <span key={cls} className={`absolute w-6 h-6 border-signal/60 ${cls}`} />
        ))}
      </div>

      {/* coordinates */}
      <div className="absolute -top-5 left-2 text-[10px] font-mono text-muted-foreground tracking-widest">
        SHA-256 · NODE 04
      </div>
      <div className="absolute -bottom-5 right-2 text-[10px] font-mono text-muted-foreground tracking-widest">
        LAT 59.3293° · LON 18.0686°
      </div>

      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
        <defs>
          <radialGradient id="sphereGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.78 0.18 195 / 0.12)" />
            <stop offset="60%" stopColor="oklch(0.78 0.18 195 / 0.02)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        <circle cx={cx} cy={cy} r={r + 30} fill="url(#sphereGlow)" />

        {/* concentric rings */}
        {[r, r * 0.72, r * 0.45, r * 0.18].map((rr, idx) => (
          <circle
            key={rr}
            cx={cx}
            cy={cy}
            r={rr}
            fill="none"
            stroke="oklch(0.78 0.18 195 / 0.25)"
            strokeWidth={idx === 0 ? 1 : 0.5}
            strokeDasharray={idx === 1 ? "2 4" : undefined}
          />
        ))}

        {/* rotating lattice */}
        <g
          className="rotate-slow"
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        >
          {nodes.map((n, i) =>
            nodes.slice(i + 1).map((m) => {
              if ((m.i - n.i) % 5 !== 0) return null;
              return (
                <line
                  key={`${n.i}-${m.i}`}
                  x1={n.x} y1={n.y} x2={m.x} y2={m.y}
                  stroke="oklch(0.78 0.18 195 / 0.18)"
                  strokeWidth={0.4}
                />
              );
            })
          )}
          {nodes.map((n) => (
            <circle key={n.i} cx={n.x} cy={n.y} r={2} fill="oklch(0.78 0.18 195)" />
          ))}
        </g>

        {/* counter axes */}
        <g
          className="rotate-counter"
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        >
          <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.35} fill="none" stroke="oklch(0.94 0.005 240 / 0.12)" />
          <ellipse cx={cx} cy={cy} rx={r * 0.6} ry={r} fill="none" stroke="oklch(0.94 0.005 240 / 0.12)" />
        </g>

        {/* center hash */}
        <g>
          <rect x={cx - 38} y={cy - 10} width={76} height={20}
            fill="oklch(0.14 0.005 240)" stroke="oklch(0.78 0.18 195 / 0.5)" />
          <text x={cx} y={cy + 4} textAnchor="middle"
            fontSize="9" fontFamily="JetBrains Mono, monospace"
            fill="oklch(0.78 0.18 195)" letterSpacing="1">
            0x9F4A··C7E1
          </text>
        </g>

        {/* crosshair */}
        <line x1={cx} y1={cy - r - 16} x2={cx} y2={cy - r + 4}
          stroke="oklch(0.78 0.18 195 / 0.6)" strokeWidth={0.6} />
        <line x1={cx} y1={cy + r - 4} x2={cx} y2={cy + r + 16}
          stroke="oklch(0.78 0.18 195 / 0.6)" strokeWidth={0.6} />
      </svg>

      {/* status pill */}
      <div className="absolute top-3 right-3 panel px-2.5 py-1.5 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-verify pulse-dot" />
        <span className="text-[10px] font-mono uppercase tracking-[0.18em]">Topology · Active</span>
      </div>
    </div>
  );
}
