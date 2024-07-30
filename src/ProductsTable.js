import React, { useState, useEffect } from 'react';
import './ProductsTable.css';

const ProductsTable = ({ products = [], onProductsChange = () => {} }) => {
  const [localProducts, setLocalProducts] = useState(
    products.length > 0
      ? products
      : [
          { platform: 'Ctrip', placement: 'APP Screen Opening Ad — Post Travel', category: 'Digital Display', amount: 256629, quantity: 1, rate: 256629 },
          { platform: 'Ctrip', placement: 'APP Homepage Feeds Ad - Post Travel', category: 'Digital Display', amount: 100639, quantity: 1, rate: 100639 },
        ]
  );

  const [fee, setFee] = useState(10);

  useEffect(() => {
    onProductsChange(localProducts);
  }, [localProducts, onProductsChange]);

  const handleAddRow = () => {
    setLocalProducts([...localProducts, { platform: '', placement: '', category: '', amount: 0, quantity: 1, rate: 0 }]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedProducts = localProducts.map((product, i) =>
      i === index ? { ...product, [field]: value } : product
    );
    setLocalProducts(updatedProducts);
  };

  const handleFeeChange = (value) => {
    setFee(value);
  };

  const calculateSubtotal = () => {
    return localProducts.reduce((sum, product) => sum + (parseFloat(product.rate || 0) * parseFloat(product.quantity || 1)), 0).toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return (subtotal * (1 + fee / 100)).toFixed(2);
  };

  return (
    <div className="products-table-container">
      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Placement</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Amount (USD)</th>
          </tr>
        </thead>
        <tbody>
          {localProducts.map((product, index) => (
            <tr key={index}>
              <td><input type="text" value={product.platform} onChange={(e) => handleInputChange(index, 'platform', e.target.value)} /></td>
              <td><input type="text" value={product.placement} onChange={(e) => handleInputChange(index, 'placement', e.target.value)} /></td>
              <td><input type="text" value={product.category} onChange={(e) => handleInputChange(index, 'category', e.target.value)} /></td>
              <td><input type="number" value={product.quantity} onChange={(e) => handleInputChange(index, 'quantity', e.target.value)} /></td>
              <td><input type="number" value={product.rate} onChange={(e) => handleInputChange(index, 'rate', e.target.value)} /></td>
              <td><input type="number" value={product.amount} onChange={(e) => handleInputChange(index, 'amount', e.target.value)} /></td>
            </tr>
          ))}
          <tr>
            <td colSpan="5"><strong>SUBTOTAL</strong></td>
            <td><strong>${calculateSubtotal()}</strong></td>
          </tr>
          <tr>
            <td colSpan="5"><strong>Fee (%)</strong></td>
            <td>
              <input
                type="number"
                value={fee}
                onChange={(e) => handleFeeChange(parseFloat(e.target.value))}
                min="0"
                max="100"
              />
            </td>
          </tr>
          <tr>
            <td colSpan="5"><strong>TOTAL</strong></td>
            <td><strong>${calculateTotal()}</strong></td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

export default ProductsTable;
