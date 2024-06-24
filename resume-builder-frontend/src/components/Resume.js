import React from 'react';
import './Resume.css';

const Resume = () => {
  const personalData = {
    name: 'Patricio López J.',
    title: 'Software Engineer',
    contacts: [
      { type: 'email', value: 'patricio@lopezjuri.com' },
      { type: 'phone', value: '+56 9 87654321' },
      { type: 'location', value: 'Av. Vicuña Mackenna 6100, Santiago' },
      { type: 'website', value: 'lopezjuri.com' },
      { type: 'linkedin', value: 'lopezjuri' },
      { type: 'twitter', value: 'mrpatiwi' },
    ],
  };

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Mediastream',
      description: 'Full-time summer job developing Node.js, React, and React-Native applications.',
      companyWebsite: 'https://mediastre.am',
      datesBetween: 'Dec 2016 - Mar 2017',
      responsibilities: [
        'Requirement gathering',
        'Design and setup with React and Redux',
      ],
    },
  ];

  const projects = [
    {
      title: 'GitHub Projects',
      description: 'Various projects hosted on GitHub.',
      projectUrl: 'https://78f34fc9.ngrok.io',
      githubUrl: 'https://github.com/mrpatiwi',
    },
  ];

  const volunteering = [
    {
      title: 'Volunteer',
      authority: 'Censo 2017',
      rightSide: 'Apr 2017',
    },
  ];

  const references = [
    {
      name: 'Nicolas Gebauer',
      reference: 'This guy is a genius; before meeting him, I was coding in COBOL!',
    },
  ];

  return (
    <div className="resume">
      <section className="header">
        <h1>{personalData.name}</h1>
        <h2>{personalData.title}</h2>
        <ul className="contact-info">
          {personalData.contacts.map((contact, index) => (
            <li key={index}>
              <strong>{contact.type}: </strong>
              {contact.type === 'email' ? (
                <a href={`mailto:${contact.value}`}>{contact.value}</a>
              ) : contact.type === 'phone' ? (
                <a href={`tel:${contact.value}`}>{contact.value}</a>
              ) : contact.type === 'website' ? (
                <a href={`http://${contact.value}`} target="_blank" rel="noopener noreferrer">{contact.value}</a>
              ) : contact.type === 'linkedin' || contact.type === 'twitter' ? (
                <a href={`https://www.${contact.type}.com/${contact.value}`} target="_blank" rel="noopener noreferrer">{contact.value}</a>
              ) : (
                contact.value
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="profile">
        <h3>Career Profile</h3>
        <p>
          Rocket scientist, software drawer, IT consultant, and personal psychologist. Interested in state-of-the-art technology and time-bomb hacks.
        </p>
      </section>

      <section className="experience">
        <h3>Experience</h3>
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <h4>{experience.title}</h4>
            <p><strong>{experience.company}</strong> - <a href={experience.companyWebsite} target="_blank" rel="noopener noreferrer">{experience.companyWebsite}</a></p>
            <p>{experience.datesBetween}</p>
            <ul>
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
            <p>{experience.description}</p>
          </div>
        ))}
      </section>

      <section className="projects">
        <h3>Projects</h3>
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">Project URL</a>
            <br />
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub URL</a>
          </div>
        ))}
      </section>

      <section className="volunteering">
        <h3>Volunteering</h3>
        {volunteering.map((volunteer, index) => (
          <div key={index} className="volunteer-item">
            <h4>{volunteer.title}</h4>
            <p>{volunteer.authority}</p>
            <p>{volunteer.rightSide}</p>
          </div>
        ))}
      </section>

      <section className="references">
        <h3>References</h3>
        {references.map((reference, index) => (
          <div key={index} className="reference-item">
            <p>"{reference.reference}"</p>
            <p>- {reference.name}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Resume;
