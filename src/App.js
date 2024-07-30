// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleSignIn from './GoogleSignIn';
import Login from './Login';
import ComplianceDashboard from './ComplianceDashboard';
import FinanceDashboard from './FinanceDashboard';
import MediaDashboard from './MediaDashboard';
import AccountDashboard from './AccountDashboard';
import CreateProject from './CreateProject';
import ProjectDetail from './ProjectDetail';
import Checklist from './Checklist';
import { projectData } from './projectData';
import './App.css';
import './ProjectDetail.css';

const App = () => {
  const [projects, setProjects] = useState(projectData);

  const handleSaveProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Router>
        <div className="app-container">
          <Routes>
            <Route exact path="/" element={<GoogleSignIn />} />
            <Route path="/login" element={<Login />} />
            <Route path="/compliance-dashboard" element={<ComplianceDashboard projects={projects} team="compliance" />} />
            <Route path="/finance-dashboard" element={<FinanceDashboard projects={projects} team="finance" />} />
            <Route path="/media-dashboard" element={<MediaDashboard projects={projects} team="media" />} />
            <Route path="/account-dashboard" element={<AccountDashboard projects={projects} team="account" />} />
            <Route path="/create-project" element={<CreateProject onSave={handleSaveProject} />} />
            <Route path="/upload-media-documents" element={<Checklist />} />
            <Route path="/project-detail/:jobId" element={<ProjectDetail projects={projects} />} />
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
