import React, { useState } from 'react';
import CV from '../../components/CV/CV';
import TypingText from '../../components/Introductory/TypingText';
import Contacts from '../../components/Contacts/Contacts'
import './About.css';

/**
 * `AboutPage` component serves as a detailed section that introduces the user's professional background, skills, and future goals.
 * It renders a set of statements describing the user's experience and aspirations, alongside options to download a CV and view social profiles.
 *
 * The component organizes content into two main sections: 
 * 1. A textual representation of the user's profile, dynamically displayed using the `TypingText` component.
 * 2. A top-right container that provides access to the user's CV and social media profiles through the `CV` and `Contacts` components.
 *
 * @returns {JSX.Element} The `AboutPage` component renders sections with user descriptions and interactive links for CV and social profiles.
 */
export const AboutPage = () => {
  const aboutTextLines = [
    "-  yo, iam a fs dev guy with over 3 years in the game",
    "-  pumped about web dev and diving into network and security stuff, like ethical hacking",
    "-  iam all about grinding - putting in a solid 60- 70+ hours each week to level up my skills and crush my goals",
    "-  so for the future, it's clear, aiming to dive deep into security, get real low-level with networking and pentesting",
    "-  right now, I am getting my hands dirty with C, C++, and this year 00011000 is all about leveling up with low-level, assembly, Rust and Go",
    "-  also, this year I wanna focus on CCNA, CWA certifications",
    "-",
    "-",
    "-  i currently work in a company that basically deals with the AUTOMATION OF NETWORK PROCESSES",
    "-  every day stack its about js frameworks react & meteor, on be python and nosql db mongodb",
    "-",
    "-"
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  // Call next line after the current line is finished typing
  const handleLineCompleted = () => {
    if (currentLineIndex < aboutTextLines.length - 1) {
      setCurrentLineIndex(currentLineIndex + 1);
    }
  };

  return (
    <div className="about-page-container">
      <div className="about-text">
        <h2>about me</h2>
        <div>
          {aboutTextLines.slice(0, currentLineIndex + 1).map((line, index) => (
            <React.Fragment key={index}>
              <TypingText phrase={line} onCompleted={index === currentLineIndex ? handleLineCompleted : null} />
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="top-right-container">
        <CV />
        <Contacts />
      </div>
    </div>
  );
};