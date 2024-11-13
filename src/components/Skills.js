// src/components/Skills.js
import React from 'react';

function Skills() {
  const skills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Git', 'SQL'];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
