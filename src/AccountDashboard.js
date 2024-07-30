import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectTable from './ProjectTable';
import styles from './AccountDashboard.module.css';

const AccountDashboard = ({ projects }) => {
  const [accountProjects, setAccountProjects] = useState(projects);
  const navigate = useNavigate();

  const handleAddProject = () => {
    navigate('/create-project', { state: { team: 'account' } });
  };

  const handleSaveProject = (newProject) => {
    setAccountProjects([...accountProjects, newProject]);
    navigate('/account-dashboard');
  };

  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.dashboardTitle}>Project Status Overview Account</h2>
      <button className={styles.addButton} onClick={handleAddProject}>Add New Project</button>
      <ProjectTable projects={accountProjects} team="account" />
    </div>
  );
};

export default AccountDashboard;
