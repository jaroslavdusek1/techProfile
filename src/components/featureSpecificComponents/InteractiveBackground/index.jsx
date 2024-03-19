import React, { useState, useEffect, useRef } from 'react';
import './InteractiveBackground.css';
const CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_=~!@#$%^&*/\\|;:?";

const randomCharacter = () => CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];

const generateRandomString = length =>
  Array.from({ length }, randomCharacter).join('');

const RandomLetters = () => {
  const [opacity, setOpacity] = useState('0');
  const containerRef = useRef(null);
  const lettersRef = useRef(null);

  const handleMouseMove = e => {
    const container = containerRef.current;
    const letters = lettersRef.current;
    if (!container || !letters) return;


    const { clientX, clientY } = e;
    const fontSize = parseInt(window.getComputedStyle(letters).fontSize, 10);
    const rect = letters.getBoundingClientRect();
    const characterWidth = fontSize / 1.8;
    const characterCount = Math.floor(rect.width / characterWidth) * Math.floor(rect.height / fontSize);

    letters.style.setProperty("--x", `${clientX}px`);
    letters.style.setProperty("--y", `${clientY}px`);

    letters.textContent = generateRandomString(characterCount);
  };

  useEffect(() => {
    let fadeInterval;
    const container = containerRef.current;

    const handleMouseLeave = () => {
      clearInterval(fadeInterval);
      setOpacity('0');
    };
    
    container.addEventListener('mouseleave', handleMouseLeave);
    return () => container.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <div ref={containerRef} className="wrapper" onMouseMove={handleMouseMove}>
      <div className="container">
        <div ref={lettersRef} className="letters" style={{ opacity: 1 }}>
        </div>
      </div>
    </div>
  );
};

export default RandomLetters;
