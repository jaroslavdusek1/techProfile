import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contacts.css';

/**
 * `Contacts` component renders a list of social media icons (GitHub and LinkedIn)
 * for user interaction. Each icon is wrapped inside an anchor (`<a>`) tag that
 * links to the respective social media profile. Clicking on these icons will
 * open the user's GitHub or LinkedIn profile in a new tab.
 */
const Contacts = () => {
  return (
    <div className="contacts-container">
      <a
        href="https://github.com/jaroslavdusek1"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub profile"
      >
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      <a
        href="https://www.linkedin.com/in/jaroslav-dusek"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn profile"
      >
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
    </div>
  );
};

export default Contacts;