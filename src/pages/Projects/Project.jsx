import React from 'react';
import ProjectCard from './ProjectCard.jsx';

// Mock project data
const projectsGH = [
  {
    id: 1,
    title: 'net-sec-toolkit',
    image: 'net-sec-toolkit.png',
    description: 'Flooding remote PC with well known DOS attack - SYN flood, cracking hashes in reverse hash feature or remote pc"s brute force credentials SSH attacking, all of these stuff straight from the web-based emulated terminal and more..',
    stack: 'C, Shell, React Typescript Python',
    link: 'https://t.ly/UntFF',
    showcase: 'showcase link'
  },
  {
    id: 2,
    title: 'metasnap',
    image: 'metasnap.png',
    description: 'Very simple .py script downloads image from a specified URL and extracts EXIF metadata if available',
    stack: 'Python',
    link: 'https://t.ly/zxyaL',
    showcase: 'showcase link'
  },
  {
    id: 3,
    title: 'brute_dirs.py',
    image: 'brute-dirs.png',
    description: 'A python script designed to inspect and display the structure of directories and files starting from a user-specified root directory. It provides a hierarchical view of folders and files',
    stack: 'Python',
    link: 'https://t.ly/jbao5',
    showcase: 'showcase link'
  },
];

export const Projects = () => {
  return (
    <>
      <h2 style={{ width: '100%', textAlign: 'center', marginTop: '2.7rem' }}>GH projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', overflow: 'auto', height: '100vh' }}>
        {projectsGH.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};