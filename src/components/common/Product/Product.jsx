import React, { useState } from "react";

const Product = ({ product, onEdit, onDelete, onAdd }) => {
  const [image, setImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={image || product.image}
        alt={product.name}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id={`upload-${product.id}`}
          />
          <label
            htmlFor={`upload-${product.id}`}
            className="text-blue-500 cursor-pointer"
          >
            Upload Image
          </label>

          <button onClick={() => onAdd(product)} className="text-green-500">
            Add
          </button>

          <div className="flex justify-between items-center">
            <button onClick={() => onEdit(product)} className="text-yellow-500">
              Edit
            </button>
            <button
              onClick={() => onDelete(product.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
