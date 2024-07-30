import React, { useState } from 'react';
import './BudgetTable.css';

const BudgetTable = () => {
  const [rows, setRows] = useState([
    { id: 1, budgetFrom: 'APAC', poNumber: "Haven't received yet", jobId: 'CA-ELC465', publisher: 'Ctrip APP', netMedia: '$108,378', rmbAmount: '', currencyRate: '', usdAmount: '' },
    { id: 2, budgetFrom: '', poNumber: '', jobId: '', publisher: 'Qunar', netMedia: '$153,148', rmbAmount: '', currencyRate: '', usdAmount: '' },
    { id: 3, budgetFrom: '', poNumber: '', jobId: '', publisher: 'TCEL', netMedia: '$177,572', rmbAmount: '', currencyRate: '', usdAmount: '' },
    { id: 4, budgetFrom: '', poNumber: '', jobId: '', publisher: 'Ctrip PDB', netMedia: '$200,234', rmbAmount: '', currencyRate: '', usdAmount: '' },
    { id: 5, budgetFrom: '', poNumber: '', jobId: '', publisher: 'MFW', netMedia: '$120,987', rmbAmount: '', currencyRate: '', usdAmount: '' },
    { id: 6, budgetFrom: '', poNumber: '', jobId: '', publisher: 'UPS', netMedia: '$145,784', rmbAmount: '', currencyRate: '', usdAmount: '' },
  ]);

  const [mode, setMode] = useState('single');

  const handleInputChange = (id, field, value) => {
    setRows(rows.map(row => row.id === id ? { ...row, [field]: value } : row));
  };

  return (
    <div>
      <label htmlFor="mode">Mode:</label>
      <select id="mode" value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="single">Single Amount</option>
        <option value="multiple">Multiple Amounts</option>
      </select>
      <table className="budget-table">
        <thead>
          <tr>
            <th>Budget From</th>
            <th>PO Number</th>
            <th>Job ID</th>
            <th>Publisher</th>
            <th>Net Media</th>
            <th>RMB Amount</th>
            <th>Currency Rate</th>
            <th>USD Amount</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id}>
              <td>{row.budgetFrom}</td>
              <td>{row.poNumber}</td>
              <td>{row.jobId}</td>
              <td>{row.publisher}</td>
              <td>{row.netMedia}</td>
              <td>
                {mode === 'single' && index !== 0 ? (
                  ''
                ) : (
                  <input
                    type="text"
                    value={row.rmbAmount}
                    onChange={(e) => handleInputChange(row.id, 'rmbAmount', e.target.value)}
                  />
                )}
              </td>
              <td>
                {index === 0 ? (
                  <input
                    type="text"
                    value={row.currencyRate}
                    onChange={(e) => handleInputChange(row.id, 'currencyRate', e.target.value)}
                  />
                ) : (
                  ''
                )}
              </td>
              <td>
                {mode === 'single' && index !== 0 ? (
                  ''
                ) : (
                  <input
                    type="text"
                    value={row.usdAmount}
                    onChange={(e) => handleInputChange(row.id, 'usdAmount', e.target.value)}
                  />
                )}
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="4">Total</td>
            <td>$906,103</td>
            <td>¥5,940,944</td>
            <td></td>
            <td>$906,103</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;
