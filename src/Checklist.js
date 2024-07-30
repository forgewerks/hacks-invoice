import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BudgetTable from './BudgetTable';
import './Checklist.css';

const Checklist = () => {
  const location = useLocation();
  const statusType = location.state?.status;

  const documentsData = {
    media: [
      { id: 1, name: 'Ctrip contract', uploaded: false },
      { id: 2, name: 'Qunar contract', uploaded: false },
      { id: 3, name: 'Tcel contract', uploaded: false },
    ],
    compliance: [
      { id: 1, name: 'Signature Document 1', uploaded: false },
      { id: 2, name: 'Signature Document 2', uploaded: false },
      { id: 3, name: 'Signature Document 3', uploaded: false },
    ],
    'signed-documents': [
      { id: 1, name: 'Signed Document 1', uploaded: false },
      { id: 2, name: 'Signed Document 2', uploaded: false },
      { id: 3, name: 'Signed Document 3', uploaded: false },
    ],
    default: [
      { id: 1, name: 'Job ID Document 1', uploaded: false },
      { id: 2, name: 'Job ID Document 2', uploaded: false },
      { id: 3, name: 'Job ID Document 3', uploaded: false },
    ],
  };

  const documents = documentsData[statusType] || documentsData.default;

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = Array.from(e.dataTransfer.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleSend = () => {
    console.log('Documents sent:', uploadedFiles);
    // Implement the logic to handle the send action here
  };

  const getTitle = () => {
    switch (statusType) {
      case 'media':
        return 'Upload Media Documents';
      case 'compliance':
        return 'Upload Signature Documents';
      case 'signed-documents':
        return 'Upload Signed Documents';
      default:
        return 'Upload Job ID Documents';
    }
  };

  return (
    <div className="checklist-container">
      <h2>{getTitle()}</h2>
      {statusType === 'media' && <BudgetTable />}
      <div 
        className="upload-collection"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <label htmlFor="file-upload" className="custom-file-upload">
          Drag & Drop files here or click to upload
        </label>
        <input 
          id="file-upload" 
          type="file" 
          multiple 
          onChange={handleFileUpload}
        />
        <ul className="file-list">
          {uploadedFiles.map((file, index) => (
            <li key={index} className="file-list-item">
              {file.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="button-container">
        <button onClick={handleSend} className="send-button">Send</button>
      </div>
    </div>
  );
};

export default Checklist;
