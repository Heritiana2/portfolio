import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import { PROFILE } from '../data/portfolioData';
import { downloadCV } from '../utils/cv';

const INTRO = {
  html: '➜ Bienvenue sur le terminal de Heritiana. Tape « help » pour découvrir les commandes.',
  cls: 'text-green-400',
};

export default function Terminal() {
  const [lines, setLines] = useState([INTRO]);
  const [value, setValue] = useState('');
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);

  const print = (html, cls = '') => setLines((prev) => [...prev, { html, cls }]);

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    print(`<span class="text-green-400">➜ ~</span> <span class="text-cyan-200">${raw}</span>`);

    if (cmd === 'help')
      print(
        'Commandes : <span class="text-cyan-300">about</span> • <span class="text-cyan-300">skills</span> • <span class="text-cyan-300">projects</span> • <span class="text-cyan-300">contact</span> • <span class="text-cyan-300">cv</span> • <span class="text-cyan-300">clear</span>'
      );
    else if (cmd === 'about')
      print(`🎓 ${PROFILE.name}, L3 Informatique @ ${PROFILE.school}. ${PROFILE.location}. Recherche un stage.`);
    else if (cmd === 'skills')
      print('🖥️ Frontend • ⚙️ Backend • 📱 Mobile • 🗄️ SGBD — React, Node, Java, SQL, Flutter...');
    else if (cmd === 'projects')
      print(
        '📦 6 projets phares : BiblioTech, TaskFlow, E-Campus, AssistBot, Orbit 3D, ScolaAPI. <span class="text-yellow-300">Scroll jusqu\'à #projets pour tout voir.</span>'
      );
    else if (cmd === 'contact')
      print(`📧 ${PROFILE.email} • 📱 ${PROFILE.phone} • <span class="text-green-300">Réponse < 24h</span>`);
    else if (cmd === 'cv') {
      print('📄 Génération du CV...');
      downloadCV();
    } else if (cmd === 'clear') {
      setLines([]);
    } else if (cmd === 'hello' || cmd === 'bonjour' || cmd === 'salut')
      print(`Salut ! 👋 Moi c'est ${PROFILE.shortName}. Tape <span class="text-cyan-300">help</span> pour me découvrir.`);
    else print(`❌ Commande inconnue : "${raw}". Essaie <span class="text-cyan-300">help</span>.`, 'text-red-300');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && value.trim()) {
      run(value);
      setValue('');
    }
  };

  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Reveal className="glass rounded-3xl overflow-hidden grad-border">
          <div
            className="flex items-center gap-2 px-4 sm:px-5 py-3 border-b"
            style={{ borderColor: 'var(--border)' }}
          >
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 sm:ml-3 flex-1 min-w-0 truncate font-mono text-[11px] sm:text-[12px] opacity-60">
              heritiana@portfolio: ~ — essaie « help » puis Entrée
            </span>
            <button
              onClick={() => run('cv')}
              className="ml-auto shrink-0 text-[10px] sm:text-[11px] font-mono px-2.5 sm:px-3 py-1 rounded-lg grad-bg text-white"
            >
              ./my-cv.sh
            </button>
          </div>

          <div
            ref={bodyRef}
            className="terminal p-4 sm:p-6 text-[12.5px] sm:text-[13.5px] leading-relaxed min-h-[260px] sm:min-h-[280px] max-h-[380px] overflow-y-auto break-words"
          >
            {lines.map((l, i) => (
              <div key={i} className={`${l.cls} mt-1`} dangerouslySetInnerHTML={{ __html: l.html }} />
            ))}
          </div>

          <div
            className="flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-4 border-t"
            style={{ borderColor: 'var(--border)' }}
            onClick={() => inputRef.current?.focus()}
          >
            <span className="font-mono text-green-400 text-sm">➜ ~</span>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              className="terminal-input text-sm min-w-0"
              placeholder="help, about, skills, projects, contact, cv, clear..."
              autoComplete="off"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
