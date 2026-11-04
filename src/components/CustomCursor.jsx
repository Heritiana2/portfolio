import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Détecte si la souris survole un élément cliquable
      const target = e.target;
      const clickable = target.closest('button') || target.closest('a') || target.tagName === 'BUTTON' || target.tagName === 'A';
      setIsHovered(!!clickable);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Effet d'amorti fluide pour l'anneau extérieur
  useEffect(() => {
    let animationFrameId;

    const followMouse = () => {
      setCursorPosition((prev) => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        return {
          x: prev.x + dx * 0.25,
          y: prev.y + dy * 0.25,
        };
      });
      animationFrameId = requestAnimationFrame(followMouse);
    };

    animationFrameId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePosition]);

  return (
    <>
      {/* 1. L'anneau extérieur (cercle fluide avec effet de zoom au survol/clic) */}
      <div
        className="pointer-events-none fixed rounded-full border transition-transform duration-75 ease-out hidden md:block"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          width: isHovered ? '48px' : '32px',
          height: isHovered ? '48px' : '32px',
          transform: `translate(-50%, -50%) scale(${isClicked ? 0.85 : 1})`,
          borderColor: isHovered ? 'rgba(34, 211, 238, 0.9)' : 'rgba(34, 211, 238, 0.5)',
          backgroundColor: isHovered ? 'rgba(34, 211, 238, 0.1)' : 'transparent',
          zIndex: 9999,
        }}
      />

      {/* 2. Le point central (suit instantanément la souris) */}
      <div
        className="pointer-events-none fixed rounded-full bg-cyan-400 hidden md:block shadow-[0_0_8px_#22d3ee]"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: '6px',
          height: '6px',
          transform: 'translate(-50%, -50%)',
          zIndex: 10000,
        }}
      />
    </>
  );
}