export function confettiBurst() {
  const colors = ['#7c3aed', '#06b6d4', '#f472b6', '#a3e635', '#facc15'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.style.cssText = `position:fixed;left:50%;top:60%;width:8px;height:8px;border-radius:2px;z-index:9999;pointer-events:none;background:${
      colors[Math.floor(Math.random() * colors.length)]
    }`;
    document.body.appendChild(p);
    const ang = Math.random() * Math.PI * 2;
    const v = 4 + Math.random() * 9;
    let x = 0;
    let y = 0;
    let vy = -4 - Math.random() * 6;
    let life = 0;
    const t = setInterval(() => {
      life++;
      x += Math.cos(ang) * v * 0.4;
      y += vy;
      vy += 0.35;
      p.style.transform = `translate(${x}px,${y}px) rotate(${life * 12}deg)`;
      p.style.left = `calc(50% + ${x}px)`;
      p.style.top = `calc(60% + ${y}px)`;
      if (life > 70) {
        clearInterval(t);
        p.remove();
      }
    }, 16);
  }
}
