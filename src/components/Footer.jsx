import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

const NAV = [
  { label: 'À propos', href: '#apropos' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t pt-14 pb-8 relative" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl grad-bg flex items-center justify-center font-grotesk font-bold text-white">
                H
              </div>
              <div className="font-grotesk font-bold text-lg">
                {PROFILE.brand}
                <span className="grad-text">.dev</span>
              </div>
            </div>
            <p className="text-sm opacity-60 max-w-sm leading-relaxed">
              Étudiant en L3 Informatique et développeur Full-Stack. Je crée des applications web et
              mobiles soignées, du modèle de données à l'interface.
            </p>
            <div className="flex gap-2 mt-5">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:scale-110 transition"
              >
                🐙
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:scale-110 transition"
              >
                in
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:scale-110 transition"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-grotesk font-bold mb-4 text-sm uppercase tracking-wider opacity-80">Navigation</h5>
            <div className="flex flex-col gap-2.5 text-sm opacity-60">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="hover:opacity-100 hover:text-cyan-400 transition">
                  {n.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-grotesk font-bold mb-4 text-sm uppercase tracking-wider opacity-80">Contact direct</h5>
            <div className="flex flex-col gap-2.5 text-sm opacity-60">
              <span className="inline-flex items-center gap-2">
                <Mail className="w-4 h-4" /> {PROFILE.email}
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> {PROFILE.phone}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {PROFILE.location}
              </span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-left hover:text-cyan-400 transition inline-flex items-center gap-2"
              >
                <ArrowUp className="w-4 h-4" /> Retour en haut
              </button>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t text-[13px] opacity-50"
          style={{ borderColor: 'var(--border)' }}
        >
          <span>© 2026 {PROFILE.name} • Fait avec ❤️ à Madagascar</span>
          <span className="font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" /> En recherche de stage • Disponible
          </span>
        </div>
      </div>
    </footer>
  );
}
