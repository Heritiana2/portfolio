import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShown(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Retour en haut"
      className={`fixed bottom-6 right-6 z-[150] w-12 h-12 rounded-2xl grad-bg text-white shadow-xl items-center justify-center hover:scale-110 transition ${
        shown ? 'flex' : 'hidden'
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
