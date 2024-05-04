// src/App.js

import React, { useState } from "react";
import ImageList from "./components/ImageList";

const ProductApp = () => {
  const [images, setImages] = useState([
    { id: 1, url: "image1.jpg", alt: "Image 1" },
    { id: 2, url: "image2.jpg", alt: "Image 2" },
    { id: 3, url: "image3.jpg", alt: "Image 3" },
  ]);

  const handleDelete = (imageId) => {
    setImages(images.filter((image) => image.id !== imageId));
  };

  const handleUpdate = (imageId) => {
    // Implement update logic here
    console.log("Update image with ID:", imageId);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product Images</h1>
      <ImageList
        images={images}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default ProductApp;
