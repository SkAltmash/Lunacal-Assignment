import React, { useState } from "react";

function Gallery() {
  const [images, setImages] = useState([]);

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImage = URL.createObjectURL(file);
      setImages([...images, newImage]);
    }
  };

  return (
    <div className="max-w-xl flex mx-auto p-4 rounded-xl shadow-2xl w-[720px] h-[316px]  bg-[#363C43]">
      <h2 className="text-2xl font-semibold mb-4">📸 Gallery</h2>

      {/* Add Image Button */}
      <label className="inline-block mb-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg cursor-pointer">
        + Add Image
        <input
          type="file"
          accept="image/*"
          onChange={handleAddImage}
          className="hidden"
        />
      </label>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-gray-700"
          >
            <img
              src={img}
              alt={`gallery-${index}`}
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Empty state */}
      {images.length === 0 && (
        <p className="text-gray-400 mt-4">No images added yet.</p>
      )}
    </div>
  );
}

export default Gallery;
