import React, { useState, useEffect } from 'react';
import './ProjectDetailsForm.css';

const ProjectDetailsForm = ({ project, team, onJobIdChange, onPoNumberChange }) => {
  const [newJobId, setNewJobId] = useState(project?.jobId || '');
  const [newPoNumber, setNewPoNumber] = useState(project?.poNumber || '');

  useEffect(() => {
    console.log('Project Status Overview:', project.status);
    console.log('Team:', team);
    console.log('New Job ID:', newJobId);
    console.log('New PO Number:', newPoNumber);
  }, [project, team, newJobId, newPoNumber]);

  const handleJobIdChange = (e) => {
    setNewJobId(e.target.value);
    onJobIdChange(e.target.value);
  };

  const handlePoNumberChange = (e) => {
    setNewPoNumber(e.target.value);
    onPoNumberChange(e.target.value);
  };

  // Mock data to demonstrate the detail view with all fields
  const projectDetails = {
    client: 'Boeing',
    invoiceType: 'Others',
    projectName: 'Test Invoice only',
    invoiceDate: 'Upon Client Signature',
    date: '2024-06-22',
    dueDate: '2024-07-22',
    terms: '30 Days',
    requestedBy: 'Admin User - developer@hylinkgroup.com',
    balanceDue: '$12.00',
    serviceDetail: 'TEst',
    projectDurationFrom: '2024-06-22',
    projectDurationTo: '2024-06-22'
  };

  return (
    <div className="project-details-form">
      <div>
        <strong>Client:</strong> {projectDetails.client}
      </div>
      <div>
        <strong>Invoice Type:</strong> {projectDetails.invoiceType}
      </div>
      <div>
        <strong>Project/Campaign Name:</strong> {projectDetails.projectName}
      </div>
      <div>
        <strong>Invoice Date:</strong> {projectDetails.invoiceDate}
      </div>
      <div>
        <strong>Date:</strong> {projectDetails.date}
      </div>
      <div>
        <strong>Due Date:</strong> {projectDetails.dueDate}
      </div>
      <div>
        <strong>Terms:</strong> {projectDetails.terms}
      </div>
      {project.status === 'Pending for Job ID' && team === 'finance' ? (
        <div>
          <strong>Job ID:</strong>
          <input
            type="text"
            value={newJobId}
            onChange={handleJobIdChange}
          />
        </div>
      ) : project.status === 'Pending for Job ID' ? (
        <div>
          <strong>Job ID:</strong>
          <input
            type="text"
            value={newJobId}
            onChange={handleJobIdChange}
            disabled
            style={{ visibility: 'hidden' }}
          />
        </div>
      ) : (
        <div>
          <strong>Job ID:</strong> {project.jobId}
        </div>
      )}
      {project.status === 'Pending for PO Number' && team === 'compliance' ? (
        <div>
          <strong>PO#:</strong>
          <input
            type="text"
            value={newPoNumber}
            onChange={handlePoNumberChange}
          />
        </div>
      ) : (
        <div>
          <strong>PO#:</strong> {project.poNumber}
        </div>
      )}
      <div>
        <strong>Requested By:</strong> {projectDetails.requestedBy}
      </div>
      <div>
        <strong>Balance Due:</strong> {projectDetails.balanceDue}
      </div>
      <div>
        <strong>Service Detail:</strong> {projectDetails.serviceDetail}
      </div>
      <div>
        <strong>Project Duration/Period:</strong> From {projectDetails.projectDurationFrom} To {projectDetails.projectDurationTo}
      </div>
      <div>
        <strong>Status:</strong> {project.status}
      </div>
    </div>
  );
};

export default ProjectDetailsForm;
