import React, { useState, useEffect } from 'react';
import './TypingText.css';

/**
 * TypingText is a React component that displays text with a typewriter animation.
 * It progressively reveals the provided `phrase`, simulating the effect of typing.
 * Once the entire phrase is displayed, it triggers the `onCompleted` callback if provided.
 *
 * @param {Object} props - The component props.
 * @param {string} props.phrase - The text to display with the typewriter effect.
 * @param {Function} [props.onCompleted] - A callback function that is called once the typing effect completes.
 * @returns {JSX.Element} - The TypingText component with the animated text display.
 */

const TypingText = ({ phrase, onCompleted }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < phrase.length) {
      const timeoutId = setTimeout(() => {
        setText(text + phrase[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeoutId);
    } else if (onCompleted) {
      onCompleted();
    }
  }, [index, phrase, onCompleted, text]);

  return <div className="typing-text">{text}<span className="blinking-cursor">|</span></div>;
};

export default TypingText;
