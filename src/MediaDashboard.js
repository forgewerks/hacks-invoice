import React from 'react';
import ProjectTable from './ProjectTable';
import styles from './MediaDashboard.module.css';

const MediaDashboard = ({ projects }) => {
  const mediaProjects = projects.filter(project => project.status === 'Pending to upload media documents');

  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.dashboardTitle}>Project Status Overview Media</h2>
      <ProjectTable projects={mediaProjects} team="media" />
    </div>
  );
};

export default MediaDashboard;
