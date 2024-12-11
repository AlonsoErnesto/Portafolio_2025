// @ts-nocheck
import type React from 'react';
import { useState, useEffect, useMemo, useCallback } from 'react';

const AboutMe: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  const personalInfo = useMemo(
    () => ({
      name: 'Ernesto',
      experience: 3,
      technologies: ['ReactJS', 'Axios', 'Redux', 'RxJS'],
    }),
    []
  );

  const toggleDetails = useCallback(() => setShowDetails((prev) => !prev), []);

  useEffect(() => {
    if (showDetails) {
      console.log('Details displayed for', personalInfo.name);
    }
  }, [showDetails, personalInfo.name]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>About Me</h1>
      <p>
        Hi, I'm <strong>{personalInfo.name}</strong>. I have{' '}
        <strong>{personalInfo.experience} years of experience</strong> working with{' '}
        <strong>ReactJS</strong>. My expertise includes building scalable and modern web
        applications.
      </p>
      <h2>Technologies I Use:</h2>
      <ul>
        {personalInfo.technologies.map((tech) => (
          <li key={tech} style={{ margin: '5px 0' }}>
            {tech}
          </li>
        ))}
      </ul>
      <button onClick={toggleDetails}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
      {showDetails && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <p>
            I enjoy solving challenging problems and collaborating with teams to build impactful
            software solutions. Feel free to reach out for projects or collaborations!
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
