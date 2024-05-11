import React from "react";
import Product from "./Product";

const ProductList = ({ products = [], onEdit, onDelete, onAdd }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default ProductList;
