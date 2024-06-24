import React, { useState } from "react";
import { CssBaseline, Container } from "@mui/material";
import ResumeForm from "./ResumeForm";
import ResumeTemplate from "./ResumeTemplate";

function Dashboard() {
  const [resumeData, setResumeData] = useState(null);

  const handleFormSubmit = (data) => {
    setResumeData(data);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{ marginTop: 30 }}>
        {resumeData ? (
          <ResumeTemplate data={resumeData} setResumeData={setResumeData} />
        ) : (
          <ResumeForm onSubmit={handleFormSubmit} />
        )}
      </Container>
    </React.Fragment>
  );
}

export default Dashboard;
