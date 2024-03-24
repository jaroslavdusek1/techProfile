import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faReact, faPython, faJsSquare } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ project }) => {
  // Function to determine if a stack contains a certain technology
  const renderStack = (stack) => {
    // Stack splitting by lines and mapping to JSX elements
    return stack.split(', ').flatMap((tech, index, array) => {
      let elements = [];

      if (tech.includes("Python")) {
        elements.push(<FontAwesomeIcon key={'python-' + index} icon={faPython} style={{ marginRight: '5px', color: 'blue', fontSize: '1.5rem' }} />);
      } 
      if (tech.includes("React")) {
        elements.push(<FontAwesomeIcon key={'react-' + index} icon={faReact} style={{ marginRight: '5px', color: 'cyan', fontSize: '1.5rem' }} />);
      }
      if (tech.includes("Typescript")) {
        elements.push(<FontAwesomeIcon key={'typescript-' + index} icon={faJsSquare} style={{ marginRight: '5px', color: '#007acc', fontSize: '1.5rem' }} />);
      } 
      if (!tech.match(/Python|React|Typescript/)) {
        elements.push(<span key={'text-' + index}>{tech}</span>);
      }
      if (index < array.length - 1) {
        elements.push(<span key={'comma-' + index}>, </span>);
      }

      return elements;
    });
  };

  return (
    <div style={{ width: '44%', boxSizing: 'border-box', marginLeft: '6rem', marginTop: '6rem', marginBottom: '-1rem', color: 'grey', backgroundColor: '#000000' }}>
      <h3 style={{ fontSize: '1.3rem', color: '#ff0000' }}>{project.title}</h3>
      <img src={project.image} alt={project.title} style={{ height: 'auto', width: '100%', objectFit: 'contain' }} />
      <p><strong>Stack:</strong> {renderStack(project.stack)}</p>
      <p style={{ marginTop: '-10px' }}><strong>Description:</strong> {project.description}</p>
      <p style={{ marginTop: '-10px' }}>
        <strong>GitHub:</strong>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} style={{ marginLeft: '10px', color: 'pink', fontSize: '1.5rem' }} />
        </a>
      </p>
      <p style={{ marginTop: '-10px' }}>
        <strong>Showcase:</strong>
        <a href={project.showcase} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} style={{ marginLeft: '10px', color: 'pink', fontSize: '1.5rem' }} />
        </a>
      </p>
    </div>
  );
};

export default ProjectCard;
