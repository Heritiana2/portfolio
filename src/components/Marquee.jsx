import React from 'react';
import { TECH_MARQUEE } from '../data/portfolioData';
import { 
  Code2, 
  FileCode2, 
  Server, 
  Coffee, 
  Database, 
  Smartphone, 
  Cpu, 
  GitBranch, 
  Boxes, 
  Terminal 
} from 'lucide-react';

// Fonction pour associer chaque techno à une icône Lucide
const getTechIcon = (key) => {
  switch (key) {
    case 'react':
    case 'js':
    case 'ts':
      return <Code2 className="w-4 h-4 text-cyan-400" />;
    case 'node':
    case 'php':
    case 'python':
      return <Server className="w-4 h-4 text-green-400" />;
    case 'java':
    case 'spring':
      return <Coffee className="w-4 h-4 text-orange-400" />;
    case 'mysql':
    case 'postgres':
      return <Database className="w-4 h-4 text-indigo-400" />;
    case 'android':
    case 'flutter':
      return <Smartphone className="w-4 h-4 text-pink-400" />;
    case 'tailwind':
      return <FileCode2 className="w-4 h-4 text-sky-400" />;
    case 'git':
      return <GitBranch className="w-4 h-4 text-red-400" />;
    case 'docker':
      return <Boxes className="w-4 h-4 text-blue-400" />;
    case 'linux':
      return <Terminal className="w-4 h-4 text-yellow-400" />;
    default:
      return <Cpu className="w-4 h-4 text-purple-400" />;
  }
};

export default function Marquee() {
  const content = TECH_MARQUEE.map((tech, i) => (
    <span key={i} className="flex items-center gap-3 whitespace-nowrap">
      <span className="w-2 h-2 rounded-full grad-bg inline-block" />
      <span className="flex items-center gap-2">
        {getTechIcon(tech.key)}
        <span>{tech.name}</span>
      </span>
    </span>
  ));

  return (          
    <div
      className="relative border-y overflow-hidden py-5"
      style={{ borderColor: 'var(--border)', background: 'var(--bg2)' }}
    >
      <div className="marquee-track font-grotesk font-bold text-lg opacity-80">
        <div className="flex items-center gap-10 pr-10">{content}</div>
        <div className="flex items-center gap-10 pr-10" aria-hidden="true">{content}</div>
      </div>
    </div>
  );
}