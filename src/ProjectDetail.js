import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import ProjectDetailsForm from './ProjectDetailsForm';
import ProductsTable from './ProductsTable';
import Chat from './Chat';
import './ProjectDetail.css';

const ProjectDetail = ({ projects }) => {
  const { jobId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { team, status } = location.state || {};
  
  // Find the project based on jobId or relevant status
  const project = projects.find((p) => p.jobId === jobId || (p.status === status && !p.jobId));

  const [newJobId, setNewJobId] = useState(project?.jobId || '');
  const [newPoNumber, setNewPoNumber] = useState(project?.poNumber || '');

  useEffect(() => {
    console.log('Team in ProjectDetail:', team);
    console.log('Status in ProjectDetail:', status);
  }, [team, status]);

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleSendJobId = () => {
    console.log(`New Job ID: ${newJobId}`);
    // Implement the logic to handle the send action here
    navigate('/finance-dashboard');
  };

  const handleSendPoNumber = () => {
    console.log(`New PO Number: ${newPoNumber}`);
    // Implement the logic to handle the send action here
    navigate('/compliance-dashboard');
  };

  const handleDownloadDocument = (documentName) => {
    const link = document.createElement('a');
    link.href = `/${documentName.toLowerCase().replace(/\s+/g, '_')}.pdf`;
    link.download = `${documentName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fakeDocuments = [
    { id: 1, name: 'Document 1' },
    { id: 2, name: 'Document 2' },
    { id: 3, name: 'Document 3' },
  ];

  const initialMessages = [
    { sender: 'Compliance Team', text: 'Please review the latest document updates.' },
    { sender: 'Finance Team', text: 'We need the budget approvals by end of day.' },
    { sender: 'You', text: 'Sure, I will look into it.' },
  ];

  const renderFloatingButton = () => {
    if (project.status === 'Pending for Job ID' && team === 'finance') {
      return (
        <button className="floating-button" onClick={handleSendJobId}>
          Send Job ID
        </button>
      );
    } else if (project.status === 'Pending for PO Number' && team === 'compliance') {
      return (
        <button className="floating-button" onClick={handleSendPoNumber}>
          Send PO Number
        </button>
      );
    } 
    // Add more conditions here if needed
    return null;
  };

  return (
    <div className="project-detail-container">
      <h2>Project Details</h2>
      <section className="project-details-section">
        <ProjectDetailsForm 
          project={project} 
          team={team} 
          onJobIdChange={setNewJobId} 
          onPoNumberChange={setNewPoNumber} 
        />
      </section>
      
      <section className="maf-section">
        <h3>MAF</h3>
        <button onClick={() => handleDownloadDocument('maf')} className="download-button">Download MAF PDF</button>
        <div className="pdf-viewer-container">
          <iframe 
            src="/maf.pdf" 
            width="100%" 
            height="600px" 
            title="MAF PDF Viewer"
          />
        </div>
      </section>
      
      <section className="items-section">
        <h3>Items</h3>
        <ProductsTable />
      </section>
      
      {(project.status === 'Pending signature' || project.status === 'Signed') && (
      <section className="documents-section">
        <h3>Documents</h3>
        {project.status === 'Pending signature' && (
          <div className="pending-documents">
            <h4>Documents Pending for Signing</h4>
            <ul>
              {fakeDocuments.map((doc) => (
                <li key={doc.id}>
                  {doc.name} <button onClick={() => handleDownloadDocument(doc.name)}>Download</button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {project.status === 'Signed' && (
          <div className="signed-documents">
            <h4>Documents Signed</h4>
            <ul>
              {fakeDocuments.map((doc) => (
                <li key={doc.id}>
                  {doc.name} <button onClick={() => handleDownloadDocument(doc.name)}>Download</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
      )}
      
      <Chat initialMessages={initialMessages} />

      {renderFloatingButton()}
    </div>
  );
};

export default ProjectDetail;
