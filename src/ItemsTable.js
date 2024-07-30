import React from 'react';
import './ItemsTable.css';

const ItemsTable = ({ items }) => {
  const calculateTotal = (quantity, value) => quantity * value;

  const totalSum = items.reduce((acc, item) => acc + calculateTotal(item.quantity, item.value), 0);

  return (
    <div className="items-table-container">
      <h3>Items</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.value}</td>
              <td>{calculateTotal(item.quantity, item.value)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3"><strong>Total</strong></td>
            <td><strong>{totalSum}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ItemsTable;