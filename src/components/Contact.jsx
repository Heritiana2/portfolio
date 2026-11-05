import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, CalendarDays, Download, Copy, Send } from 'lucide-react';
import Reveal from './Reveal';
import { PROFILE, CALENDAR } from '../data/portfolioData';
import { toast } from '../utils/toast';
import { downloadCV } from '../utils/cv';
import { confettiBurst } from '../utils/confetti';

const PROJECT_TYPES = [
  'Stage de fin d\'études',
  'Site vitrine / Portfolio',
  'Application web',
  'Application mobile',
  'Stage / Alternance',
  'Projet académique',
  'Autre',
];

const BUDGETS = ['Non rémunéré (projet)', 'Indemnité de stage', 'Petit budget', 'À discuter'];

const EMPTY = { name: '', email: '', phone: '', type: PROJECT_TYPES[0], budget: BUDGETS[1], msg: '', botcheck: false };

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

function startOfWeek(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  return d;
}

function getWeekDates() {
  const monday = startOfWeek(new Date());
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

function toISODate(date) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

function isAvailable(date, weekday) {
  if (CALENDAR.unavailableDates?.includes(toISODate(date))) return false;
  return CALENDAR.availableDays.includes(weekday);
}

function isToday(date) {
  return toISODate(date) === toISODate(new Date());
}

function getWeekLabel(week) {
  const fmt = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long' });
  return `Semaine du ${fmt.format(week[0])} au ${fmt.format(week[6])}`;
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const msgRef = useRef(null);
  const week = getWeekDates();

  useEffect(() => {
    const handler = (e) => {
      setForm((prev) => ({ ...prev, msg: e.detail.message }));
      setTimeout(() => msgRef.current?.focus(), 700);
    };
    window.addEventListener('app:prefill', handler);
    return () => window.removeEventListener('app:prefill', handler);
  }, []);

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: false }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email).then(() => toast('📋 Email copié !', PROFILE.email));
  };

  const planCall = () => {
    update(
      'msg',
      "Bonjour, je souhaite planifier un appel de 30 minutes. Voici mes disponibilités : "
    );
    setTimeout(() => msgRef.current?.focus(), 50);
    toast('📅 Appel à planifier', 'Indique tes créneaux dans le message, je confirme sous 24h.');
  };

  const submit = async (e) => {
    e.preventDefault();
    const nextErrors = {
      name: form.name.trim().length < 2,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()),
      phone: form.phone.trim() !== '' && !/^[+]?[\d\s().-]{7,}$/.test(form.phone.trim()),
      msg: form.msg.trim().length < 10,
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) {
      toast('⚠️ Vérifie le formulaire', 'Certains champs sont invalides.', 'error');
      return;
    }
    if (!WEB3FORMS_KEY) {
      toast(
        '⚠️ Formulaire non configuré',
        'Ajoute VITE_WEB3FORMS_KEY dans le fichier .env (voir .env.example).',
        'error'
      );
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio — ${form.type}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          phone: form.phone,
          type: form.type,
          budget: form.budget,
          message: form.msg,
          botcheck: form.botcheck,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Envoi refusé par le service.');
      setStatus('sent');
      toast('✅ Message envoyé !', `Merci ${form.name.split(' ')[0]} ! Je te réponds sous 24h.`);
      confettiBurst();
      setForm(EMPTY);
      setTimeout(() => setStatus('idle'), 3500);
    } catch (err) {
      setStatus('idle');
      toast('❌ Envoi impossible', err.message || 'Réessaie plus tard.', 'error');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden" style={{ background: 'var(--bg2)' }}>
      <div className="orb w-[500px] h-[500px] bg-violet-700/30 -bottom-40 -right-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <Reveal className="flex items-center gap-3 font-mono text-sm text-cyan-400 mb-3">
          <span className="w-10 h-[2px] grad-bg rounded" />
          07 • CONTACT
        </Reveal>
        <Reveal as="h2" className="font-grotesk font-bold text-[clamp(2.2rem,5vw,3.6rem)] leading-tight">
          Un stage ? Un projet ?
          <br />
          <span className="grad-text">Discutons-en ! ☕</span>
        </Reveal>

        <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-6 sm:gap-8 mt-8 sm:mt-12">
          <div className="flex flex-col gap-5">
            <Reveal className="glass rounded-3xl p-5 sm:p-7 grad-border">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl grad-bg flex items-center justify-center font-grotesk font-bold text-white text-xl">
                    H
                  </div>
                  <span
                    className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 rounded-full"
                    style={{ borderColor: 'var(--bg2)' }}
                  />
                </div>
                <div>
                  <div className="font-bold">{PROFILE.shortName} répond vite ⚡</div>
                  <div className="text-[13px] opacity-60">En ligne • répond en ~2h</div>
                </div>
              </div>

              <div className="grid gap-3 mt-6 text-sm">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-3 sm:gap-4 glass rounded-2xl p-3 sm:p-4 hover:scale-[1.02] transition-transform group"
                >
                  <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl grad-bg text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="opacity-50 text-[11px] sm:text-[12px] block font-mono">EMAIL</span>
                    <span className="font-bold text-[13px] sm:text-base break-all group-hover:text-cyan-400 transition">{PROFILE.email}</span>
                  </span>
                </a>
                <a
                  href={`tel:${PROFILE.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 sm:gap-4 glass rounded-2xl p-3 sm:p-4 hover:scale-[1.02] transition-transform group"
                >
                  <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-green-500 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="opacity-50 text-[11px] sm:text-[12px] block font-mono">TÉLÉPHONE</span>
                    <span className="font-bold text-[13px] sm:text-base">{PROFILE.phone}</span>
                  </span>
                </a>
                <div className="flex items-center gap-3 sm:gap-4 glass rounded-2xl p-3 sm:p-4">
                  <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-pink-500 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="opacity-50 text-[11px] sm:text-[12px] block font-mono">BASE</span>
                    <span className="font-bold text-[13px] sm:text-base">{PROFILE.location} • Remote 🌍</span>
                  </span>
                </div>
              </div>

              <div className="flex gap-2 mt-5">
                <button
                  onClick={copyEmail}
                  className="flex-1 glass rounded-xl py-3 text-sm font-semibold hover:bg-white/10 transition inline-flex items-center justify-center gap-2"
                >
                  <Copy className="w-4 h-4" /> Copier email
                </button>
                <button
                  onClick={downloadCV}
                  className="flex-1 grad-bg text-white rounded-xl py-3 text-sm font-bold hover:scale-[1.02] transition inline-flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" /> Mon CV
                </button>
              </div>
            </Reveal>

            <Reveal className="glass rounded-3xl p-5 sm:p-7">
              <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between mb-1">
                <h4 className="font-grotesk font-bold inline-flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-cyan-400" /> Mes disponibilités
                </h4>
                <span className="text-[10px] sm:text-[11px] font-mono opacity-50">{getWeekLabel(week)}</span>
              </div>
              <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-[11px] sm:text-[12px] mt-4">
                {CALENDAR.days.map((d, i) => {
                  const date = week[i];
                  const available = isAvailable(date, i);
                  const today = isToday(date);
                  return (
                    <div key={i}>
                      <div className="opacity-50 font-mono mb-2">{d}</div>
                      <div
                        className={`rounded-lg sm:rounded-xl py-2 sm:py-2.5 text-xs sm:text-sm font-bold ${
                          available ? 'grad-bg text-white shadow-lg cursor-pointer hover:scale-110 transition' : ''
                        } ${today ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-transparent' : ''}`}
                        style={!available ? { background: 'rgba(148,163,184,.12)', opacity: 0.4 } : undefined}
                      >
                        {date.getDate()}
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-[11px] sm:text-[12px] opacity-50 mt-4 font-mono">🟣 = créneau libre pour un appel • 30 min offertes</p>
            </Reveal>
          </div>

          <Reveal className="glass rounded-3xl p-5 sm:p-9 grad-border relative overflow-hidden">
            <h3 className="font-grotesk font-bold text-xl mb-1">Envoyez-moi un message ✉️</h3>
            <p className="text-sm opacity-60 mb-6">Formulaire fonctionnel — réponse garantie sous 24h.</p>

            <form className="grid sm:grid-cols-2 gap-3 sm:gap-4 min-w-0" onSubmit={submit} noValidate>
              <input
                type="checkbox"
                name="botcheck"
                checked={form.botcheck}
                onChange={(e) => update('botcheck', e.target.checked)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div>
                <label className="text-[12px] font-mono opacity-60 uppercase">Nom complet *</label>
                <input
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="field w-full min-w-0 rounded-xl px-4 py-3 mt-2 text-sm"
                  placeholder="Ex : Marie Dupont"
                />
                {errors.name && <p className="text-red-400 text-[12px] mt-1">Nom requis (2 caractères min).</p>}
              </div>
              <div>
                <label className="text-[12px] font-mono opacity-60 uppercase">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="field w-full min-w-0 rounded-xl px-4 py-3 mt-2 text-sm"
                  placeholder="marie@entreprise.com"
                />
                {errors.email && <p className="text-red-400 text-[12px] mt-1">Email invalide.</p>}
              </div>
              <div>
                <label className="text-[12px] font-mono opacity-60 uppercase">Téléphone (optionnel)</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className="field w-full min-w-0 rounded-xl px-4 py-3 mt-2 text-sm"
                  placeholder="+261 34 00 000 00"
                />
                {errors.phone && <p className="text-red-400 text-[12px] mt-1">Numéro invalide.</p>}
              </div>
              <div>
                <label className="text-[12px] font-mono opacity-60 uppercase">Type de projet</label>
                <select
                  value={form.type}
                  onChange={(e) => update('type', e.target.value)}
                  className="field w-full min-w-0 rounded-xl px-4 py-3 mt-2 text-sm"
                >
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} className="bg-slate-900 text-white">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-[12px] font-mono opacity-60 uppercase">Budget / cadre</label>
                <select
                  value={form.budget}
                  onChange={(e) => update('budget', e.target.value)}
                  className="field w-full min-w-0 rounded-xl px-4 py-3 mt-2 text-sm"
                >
                  {BUDGETS.map((b) => (
                    <option key={b} className="bg-slate-900 text-white">
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-[12px] font-mono opacity-60 uppercase">Votre message *</label>
                <textarea
                  ref={msgRef}
                  rows={5}
                  value={form.msg}
                  onChange={(e) => update('msg', e.target.value.slice(0, 1000))}
                  className="field w-full min-w-0 rounded-xl px-4 py-3 mt-2 text-sm resize-none"
                  placeholder="Décrivez votre projet, vos délais, vos objectifs..."
                />
                {errors.msg && <p className="text-red-400 text-[12px] mt-1">Message de 10 caractères minimum.</p>}
                <div className="flex flex-wrap justify-between items-center gap-1 mt-2">
                  <span className="text-[11px] sm:text-[12px] font-mono opacity-50">{form.msg.length}/1000</span>
                  <span className="text-[11px] sm:text-[12px] opacity-50">📎 PJ possible après premier contact</span>
                </div>
              </div>
              <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`flex-1 text-white font-bold py-3.5 sm:py-4 rounded-2xl shadow-xl shadow-violet-600/30 transition-transform inline-flex items-center justify-center gap-2 ${
                    status === 'sent' ? 'bg-green-500' : 'grad-bg hover:scale-[1.02]'
                  }`}
                >
                  {status === 'sending' ? (
                    'Envoi en cours...'
                  ) : status === 'sent' ? (
                    '✓ Message envoyé !'
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Envoyer le message
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={planCall}
                  className="flex-1 glass rounded-2xl py-3.5 sm:py-4 font-bold text-sm text-center hover:bg-white/10 transition inline-flex items-center justify-center gap-2"
                >
                  📅 Planifier un appel
                </button>
              </div>
              <p className="sm:col-span-2 text-[12px] opacity-50 text-center">
                En envoyant, vous acceptez d'être recontacté. Aucun spam, promis 🤞 — RGPD compliant.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
