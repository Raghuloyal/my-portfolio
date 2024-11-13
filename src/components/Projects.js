// src/components/Projects.js
import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of your project.',
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'A brief description of your project.',
      link: '#'
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
