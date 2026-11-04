import { useEffect, useState } from 'react';

export default function Toaster() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handler = (e) => {
      const id = Date.now() + Math.random();
      setToasts((prev) => [...prev, { id, ...e.detail }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4200);
    };
    window.addEventListener('app:toast', handler);
    return () => window.removeEventListener('app:toast', handler);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-[300] flex flex-col gap-3 max-w-[340px]">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="toast glass rounded-2xl p-4 flex gap-3 items-start grad-border shadow-2xl"
          style={{ background: 'var(--bg2)' }}
        >
          <div
            className={`w-10 h-10 rounded-xl ${
              t.type === 'error' ? 'bg-red-500' : 'grad-bg'
            } text-white flex items-center justify-center shrink-0`}
          >
            {t.type === 'error' ? '⚠️' : '✓'}
          </div>
          <div className="flex-1">
            <div className="font-bold text-sm">{t.title}</div>
            {t.sub ? <div className="text-[13px] opacity-60 mt-0.5">{t.sub}</div> : null}
          </div>
        </div>
      ))}
    </div>
  );
}
