import React, { useState } from "react";

const ImageList = ({ images, onDelete, onUpdate }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDelete = (imageId) => {
    onDelete(imageId);
  };

  const handleUpdate = (imageId) => {
    setSelectedImage(imageId);
    onUpdate(imageId);
  };

  // Initialize an empty array to hold the JSX elements
  const imageElements = [];

  // Iterate over the images array using a for loop
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    imageElements.push(
      <div key={image.id} className="relative">
        <img src={image.url} alt={image.alt} className="w-full h-auto" />
        <div className="absolute bottom-2 right-2 flex space-x-2">
          <button
            onClick={() => handleUpdate(image.id)}
            className="px-3 py-1 bg-blue-500 text-white rounded-md"
          >
            Update
          </button>
          <button
            onClick={() => handleDelete(image.id)}
            className="px-3 py-1 bg-red-500 text-white rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  // Render the array of JSX elements
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {imageElements}
    </div>
  );
};

export default ImageList;
