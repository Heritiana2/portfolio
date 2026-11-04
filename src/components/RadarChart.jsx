import { useMemo } from 'react';

export default function RadarChart({ labels, values, size = 300 }) {
  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.36;
  const n = labels.length;

  const angleFor = (i) => (-90 + (360 / n) * i) * (Math.PI / 180);

  const point = (i, r) => {
    const a = angleFor(i);
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  };

  const rings = [0.25, 0.5, 0.75, 1];

  const dataPoints = useMemo(
    () =>
      values
        .map((v, i) => {
          const [x, y] = point(i, (v / 100) * radius);
          return `${x.toFixed(1)},${y.toFixed(1)}`;
        })
        .join(' '),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [values, radius]
  );

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
      {rings.map((ring, ri) => {
        const pts = labels
          .map((_, i) => {
            const [x, y] = point(i, radius * ring);
            return `${x.toFixed(1)},${y.toFixed(1)}`;
          })
          .join(' ');
        return (
          <polygon
            key={ri}
            points={pts}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.12}
            strokeWidth={1}
          />
        );
      })}

      {labels.map((_, i) => {
        const [x, y] = point(i, radius);
        return (
          <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="currentColor" strokeOpacity={0.12} strokeWidth={1} />
        );
      })}

      <g className="radar-pop">
        <polygon points={dataPoints} fill="rgba(124,58,237,0.22)" stroke="#7c3aed" strokeWidth={2} />
        {values.map((v, i) => {
          const [x, y] = point(i, (v / 100) * radius);
          return <circle key={i} cx={x} cy={y} r={4} fill="#22d3ee" stroke="#fff" strokeWidth={1.5} />;
        })}
      </g>

      {labels.map((label, i) => {
        const [x, y] = point(i, radius * 1.22);
        return (
          <text
            key={label}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-current"
            style={{ fontSize: 11, fontWeight: 700 }}
            fill="currentColor"
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}
