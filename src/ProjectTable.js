import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProjectTable.module.css';

const ProjectTable = ({ projects, team }) => {
  const navigate = useNavigate();

  const renderStatus = (status, jobId) => {
    if (status === 'Pending to upload media documents' && team === 'media') {
      return (
        <button className={styles.button} onClick={() => navigate('/upload-media-documents', { state: { status: 'media' } })}>
          {status}
        </button>
      );
    } else if (status === 'Pending signature' && team === 'compliance') {
      return (
        <button className={styles.button} onClick={() => navigate('/upload-media-documents', { state: { status: 'compliance' } })}>
          {status}
        </button>
      );
    } else if (status === 'Pending the upload of signed documents' && team === 'compliance') {
      return (
        <button className={styles.button} onClick={() => navigate('/upload-media-documents', { state: { status: 'signed-documents' } })}>
          {status}
        </button>
      );
    } else if (status === 'Pending for Job ID' && team === 'finance') {
      return (
        <button className={styles.button} onClick={() => navigate(`/project-detail/${jobId}`, { state: { status: 'Pending for Job ID', team } })}>
          {status}
        </button>
      );
    } else if (status === 'Pending for PO Number' && team === 'compliance') {
      return (
        <button className={styles.button} onClick={() => navigate(`/project-detail/${jobId}`, { state: { status: 'Pending for PO Number', team } })}>
          {status}
        </button>
      );
    }
    return status;
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Job ID</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Status</th>
            <th className={styles.th}>Details</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr className={styles.tr} key={project.jobId || index}>
              <td className={styles.td}>{project.jobId}</td>
              <td className={styles.td}>{project.name}</td>
              <td className={styles.td}>{renderStatus(project.status, project.jobId || index)}</td>
              <td className={styles.td}>
                <button className={styles.button} onClick={() => navigate(`/project-detail/${project.jobId || index}`, { state: { team, status: project.status } })}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
