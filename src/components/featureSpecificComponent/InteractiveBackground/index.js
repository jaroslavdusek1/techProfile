import React, { useState, useEffect } from 'react';
import './InteractiveBackground.css'; // Import your CSS file

const CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_=~!@#$%^&*/|;:?";

/**
 * Interactive background component that generates a random text background
 * which reacts to mouse movement.
 */
const InteractiveBackground = () => {
  // State to manage opacity of the text
  const [opacity, setOpacity] = useState(0);
  // State to store the generated random string
  const [randomString, setRandomString] = useState('');
  // State to track mouse position on the screen
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  /**
   * Generates a random string of specified length.
   * @param {number} length - Length of the random string to be generated.
   * @returns {string} Generated random string.
   */
  const generateRandomString = (length) => {
    return Array(length).fill().map(() => CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]).join("");
  };

  // Effect hook to update the random string and handle the fade effect
  useEffect(() => {
    // Function to update the random string
    const updateString = () => {
      // Adjust 'length' according to the size and needs of your background
      setRandomString(generateRandomString(20000));
    };

    // Interval to gradually decrease the opacity
    const fadeInterval = setInterval(() => {
      if (opacity > 0) {
        setOpacity(prevOpacity => prevOpacity - 0.1);
      }
    }, 100);

    // Update the string when mouse position changes
    updateString();

    // Cleanup function for useEffect
    return () => clearInterval(fadeInterval);
  }, [mousePosition, opacity]);

  /**
   * Handles mouse movement over the container.
   * @param {Object} e - Mouse event.
   */
  const handleMouseMove = (e) => {
    setOpacity(2.5);  // Set a higher opacity on mouse move && define the time until the generated background disappears
    setMousePosition({ x: e.clientX, y: e.clientY }); // Update mouse position
  };

  /**
   * Handles mouse leaving the container area.
   */
  const handleMouseLeave = () => {
    setOpacity(0); // Reset opacity to 0
  };

  return (
    <div 
      className="container" 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      style={{
        '--x': `${mousePosition.x}px`, // CSS variable for X coordinate
        '--y': `${mousePosition.y}px`, // CSS variable for Y coordinate
        opacity: opacity // CSS property for opacity
      }}
    >
      {randomString} {/* Displaying the generated random string */}
    </div>
  );
};

export default InteractiveBackground;
