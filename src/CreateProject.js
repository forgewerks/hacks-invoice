// src/CreateProject.js
import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import ProductsTable from './ProductsTable';
import './CreateProject.css';

const CreateProject = ({ onSave }) => {
  const [project, setProject] = useState({
    client: '',
    invoiceType: '',
    projectName: '',
    invoiceDate: '',
    date: '',
    dueDate: '',
    terms: '',
    poNumber: '',
    requestedBy: '',
    balanceDue: '',
    serviceDetail: '',
    projectDurationFrom: '',
    projectDurationTo: '',
    status: 'Pending for Job ID',
  });

  const [documents, setDocuments] = useState([]);
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleProductChange = (newProducts) => {
    setProducts(newProducts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...project, documents, products });
  };

  return (
    <div className="create-project-container">
      <h2>Create New Project</h2>
      <ProjectForm project={project} handleChange={handleChange} />
      <ProductsTable products={products} onProductsChange={handleProductChange} />
      <button onClick={handleSubmit} className="save-button">Save Project</button>
    </div>
  );
};

export default CreateProject;
