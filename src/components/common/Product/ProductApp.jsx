import React from "react";
import ProductList from "./ProductList";

const ProductApp = () => {
  // Sample products
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description 1",
      image: "",
      price: 10,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description 2",
      image: "",
      price: 20,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description 3",
      image: "",
      price: 30,
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description 4",
      image: "",
      price: 40,
    },
    {
      id: 5,
      name: "Product 5",
      description: "Description 5",
      image: "",
      price: 50,
    },
    {
      id: 6,
      name: "Product 6",
      description: "Description 6",
      image: "",
      price: 60,
    },
  ];

  const handleEdit = (product) => {
    console.log("Edit product:", product);
  };

  const handleDelete = (productId) => {
    console.log("Delete product:", productId);
  };

  const handleAdd = (product) => {
    console.log("Add product:", product);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Product List</h1>
      <ProductList
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
    </div>
  );
};

export default ProductApp;
