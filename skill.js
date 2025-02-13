import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <p>Here are some of the technologies and tools I am proficient in:</p>
      <div className="skills-container">
        <div className="skill-card">
          <h3>Front-End</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Back-End</h3>
          <ul>
            <li>PHP</li>
            <li>Java</li>
            <li>C++</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
