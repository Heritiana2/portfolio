import { useEffect, useRef } from 'react';

export default function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = 0;
    let H = 0;
    let raf;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const isSmall = window.innerWidth < 640;
    const maxDist = isSmall ? 90 : 130;
    const pts = Array.from({ length: isSmall ? 30 : 70 }, () => ({
      x: Math.random() * 2000,
      y: Math.random() * 1200,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 1,
      col: Math.random() > 0.5 ? '124,58,237' : '34,211,238',
    }));

    const anim = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x % W, p.y % H, p.r, 0, 7);
        ctx.fillStyle = `rgba(${p.col},.6)`;
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x % W, pts[i].y % H);
            ctx.lineTo(pts[j].x % W, pts[j].y % H);
            ctx.strokeStyle = `rgba(124,58,237,${(1 - d / maxDist) * 0.25})`;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(anim);
    };
    anim();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />;
}
