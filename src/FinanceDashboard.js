import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectTable from './ProjectTable';
import styles from './FinanceDashboard.module.css';

const FinanceDashboard = ({ projects }) => {
  const [financeProjects, setFinanceProjects] = useState(projects);
  const navigate = useNavigate();

  const handleAddProject = () => {
    navigate('/create-project');
  };

  const handleSaveProject = (newProject) => {
    setFinanceProjects([...financeProjects, newProject]);
    navigate('/finance-dashboard');
  };

  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.dashboardTitle}>Project Status Overview Finance</h2>
      <ProjectTable projects={financeProjects} team="finance" />
    </div>
  );
};

export default FinanceDashboard;
