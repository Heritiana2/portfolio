import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('accueil');

    // Gestion du scroll pour l'ombre et la section active
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY + 200);

            const sections = ['accueil', 'apropos', 'competences', 'projets', 'parcours', 'services', 'contact'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '#accueil', id: 'accueil' },
        { name: 'À propos', href: '#apropos', id: 'apropos' },
        { name: 'Compétences', href: '#competences', id: 'competences' },
        { name: 'Projets', href: "#projets", id: 'projets' },
        { name: 'Parcours', href: '#parcours', id: 'parcours' },
        { name: 'Services', href: '#services', id: 'services' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">  
            <div className={`glass rounded-2xl mt-4 px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 relative overflow-hidden transition-all duration-300 ${scrolled ? 'shadow-2xl border-white/20' : ''}`}>
            
            {/* LOGO */}
            <a href="#accueil" className="flex items-center gap-2 sm:gap-3 group min-w-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl grad-bg flex items-center justify-center font-bold text-white text-base sm:text-lg shadow-lg shadow-purple-600/30 group-hover:rotate-12 transition-transform shrink-0">
                H
                </div>
                <div className="leading-tight min-w-0">
                <div className="font-bold text-[15px] sm:text-[17px] tracking-tight whitespace-nowrap">
                    heritiana<span className="grad-text">.dev</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono opacity-60 whitespace-nowrap">Dévéloppeur Junior</div>
                </div>
            </a>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium">
                {navLinks.map((link) => (
                <a
                    key={link.id}
                    href={link.href}
                    className={`nav-link transition-colors ${
                    activeSection === link.id ? 'active text-cyan-400 font-semibold' : 'opacity-70 hover:opacity-100'
                    }`}
                >
                    {link.name}
                </a>
                ))}
            </nav>

            {/* ACTIONS (THEME & CTA) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {/* Toggle Dark/Light Mode */}
                <button
                onClick={() => setDarkMode(!darkMode)}
                title="Changer de thème"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass flex items-center justify-center hover:scale-105 transition-transform"
                >
                {darkMode ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-indigo-600" />}
                </button>

                {/* CTA Button */}
                <a
                href="#contact"
                className="hidden sm:inline-flex grad-bg text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-purple-600/30 hover:shadow-cyan-500/30 hover:scale-[1.03] transition-all items-center gap-2"
                >
                Me contacter <ArrowRight className="w-4 h-4" />
                </a>

                {/* Burger Button Mobile */}
                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Ouvrir le menu"
                className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass flex items-center justify-center"
                >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            {isMenuOpen && (
            <div className="lg:hidden glass rounded-2xl mt-2 p-3 sm:p-4 flex flex-col gap-1 text-[15px] font-medium shadow-2xl animate-fadeIn max-h-[calc(100vh-6rem)] overflow-y-auto">
                {navLinks.map((link) => (
                <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl transition-colors ${
                    activeSection === link.id ? 'bg-white/10 font-bold text-cyan-400' : 'hover:bg-white/5'
                    }`}
                >
                    {link.name}
                </a>
                ))}
                <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-xl grad-bg text-white text-center font-semibold mt-2 shadow-lg"
                >
                 Me contacter
                </a>
            </div>
            )}
        </div>
    </header>
    );
};

export default Navbar;