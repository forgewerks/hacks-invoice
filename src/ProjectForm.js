import React from 'react';
import './ProjectForm.css';

const ProjectForm = ({ project, handleChange }) => {
  return (
    <div className="project-form">
      <div className="form-group">
        <label>Client</label>
        <input
          type="text"
          name="client"
          value={project.client}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Invoice Type</label>
        <input
          type="text"
          name="invoiceType"
          value={project.invoiceType}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Project/Campaign Name</label>
        <input
          type="text"
          name="projectName"
          value={project.projectName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Invoice Date</label>
        <input
          type="date"
          name="invoiceDate"
          value={project.invoiceDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={project.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={project.dueDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Terms</label>
        <input
          type="text"
          name="terms"
          value={project.terms}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Requested By</label>
        <input
          type="text"
          name="requestedBy"
          value={project.requestedBy}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Service Detail</label>
        <input
          type="text"
          name="serviceDetail"
          value={project.serviceDetail}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Project Duration/Period From</label>
        <input
          type="date"
          name="projectDurationFrom"
          value={project.projectDurationFrom}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Project Duration/Period To</label>
        <input
          type="date"
          name="projectDurationTo"
          value={project.projectDurationTo}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default ProjectForm;