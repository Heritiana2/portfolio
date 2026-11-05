import { useEffect, useState } from 'react';
import { PROFILE } from '../data/portfolioData';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 18;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setHidden(true), 500);
          return 100;
        }
        return next;
      });
    }, 130);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#05060f] flex items-center justify-center flex-col transition-all duration-500 ${
        hidden ? 'opacity-0 invisible pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="font-grotesk text-3xl font-bold tracking-tight text-white">
        {PROFILE.brand}
        <span className="grad-text">.dev</span>
      </div>
      <div className="text-sm text-slate-400 mt-2 font-mono">
        Initialisation du portfolio... {Math.floor(progress)}%
      </div>
      <div className="w-[260px] max-w-[80vw] h-[3px] bg-white/10 rounded-full overflow-hidden mt-6">
        <div
          className="h-full rounded-full transition-all duration-150"
          style={{ width: `${progress}%`, background: 'linear-gradient(90deg,#7c3aed,#06b6d4,#f472b6)' }}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-6 px-4 font-mono text-[10px] sm:text-[11px] text-slate-500">
        <span className="px-2 py-1 rounded bg-white/5 border border-white/10">React</span>
        <span className="px-2 py-1 rounded bg-white/5 border border-white/10">Node.js</span>
         <span className="px-2 py-1 rounded bg-white/5 border border-white/10">Java</span>
        <span className="px-2 py-1 rounded bg-white/5 border border-white/10">MySQL, PostgreSQL</span>
      </div>
    </div>
  );
}
