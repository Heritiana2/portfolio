import { useState } from 'react';
import { Plus } from 'lucide-react';
import Reveal from './Reveal';
import { FAQS } from '../data/portfolioData';

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Reveal as="h2" className="font-grotesk font-bold text-[clamp(1.8rem,4vw,2.6rem)] text-center mb-3">
          Questions <span className="grad-text">fréquentes</span>
        </Reveal>
        <Reveal as="p" className="text-center opacity-60 mb-10">
          Tout ce qu'on me demande le plus souvent.
        </Reveal>

        <div className="flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} className={`faq-item glass rounded-2xl overflow-hidden ${isOpen ? 'open' : ''}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 p-5 text-left font-semibold text-[15px]"
                >
                  <span className="w-8 h-8 rounded-lg grad-bg text-white flex items-center justify-center text-sm shrink-0 font-mono">
                    {i + 1}
                  </span>
                  {f.q}
                  <span className="faq-icon ml-auto w-8 h-8 rounded-lg glass flex items-center justify-center shrink-0">
                    <Plus className="w-4 h-4 text-cyan-400" />
                  </span>
                </button>
                <div className="faq-answer">
                  <p className="px-5 pb-5 pl-[68px] text-sm opacity-70 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
