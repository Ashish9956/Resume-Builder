import React from 'react';
import './Resumet.css';
import html2pdf from 'html2pdf.js';
import { IconButton } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import GetAppIcon from '@mui/icons-material/GetApp';
import { useNavigate } from 'react-router-dom';

const ResumeTemplate = ({ data,setResumeData }) => {
  const navigate = useNavigate();
  const handlePrint = () => {
    window.print();
  };
  
  const handleDownloadPDF = () => {
    const element = document.getElementById('resume-pdf'); // Ensure this ID matches the element where PDF content will be generated

    html2pdf()
      .from(element)
      .save();
  };

  const handleBackToTop = () => {
    setResumeData(null);
   navigate("/dashboard")
    
  };

  return (
    <div>
      
   <div className="resume" id="resume-pdf">
      

      <section className="header">
        <h1>{data.personalData.name}</h1>
        {/* Display other personal data */}
        <ul className="contact-info">
          {data.personalData.contacts.map((contact, index) => (
            <li key={index}>
              <strong>{contact.type}: </strong>
              {contact.type === 'email' ? (
                <a href={`mailto:${contact.value}`}>{contact.value}</a>
              ) : contact.type === 'phone' ? (
                <a href={`tel:${contact.value}`}>{contact.value}</a>
              ) : (
                contact.value
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="profile">
        <h3>Career Profile</h3>
        <p>{data.objective}</p>
      </section>

      <section className="experience">
        <h3>Experience</h3>
        {data.experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <h4>{experience.title}</h4>
            {/* <p><strong>{experience.company}</strong></p> */}
            <p>{experience.datesBetween}</p>
            <p>{experience.description}</p>
          </div>
        ))}
      </section>

      <section className="education">
        <h3>Education</h3>
        {data.education.map((edu, index) => (
          <div key={index} className="education-item">
            <h4>{edu.title}</h4>
            <p>{edu.authority}</p>
            <p>{edu.rightSide}</p>
          </div>
        ))}
      </section>

      <section className="skills">
        <h3>Skills</h3>
        <p>{data.skills}</p>
      </section>

      {/* Back to top button */}
      <div className="back-to-top">
        <button onClick={handleBackToTop}>Back to Top</button>
      </div>
      <div className="resume-buttons">
        <IconButton onClick={handlePrint}>
          <PrintIcon />
        </IconButton>
        <IconButton onClick={handleDownloadPDF}>
          <GetAppIcon />
        </IconButton>
      </div>
    </div>
    </div>
 
  );
};

export default ResumeTemplate;
