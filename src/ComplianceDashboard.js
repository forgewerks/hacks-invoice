import React from 'react';
import ProjectTable from './ProjectTable';
import styles from './ComplianceDashboard.module.css';

const ComplianceDashboard = ({ projects }) => {
  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.dashboardTitle}>Project Status Overview Compliance</h2>
      <ProjectTable projects={projects} team="compliance" />
    </div>
  );
};

export default ComplianceDashboard;
