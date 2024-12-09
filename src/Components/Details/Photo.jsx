import React from "react";

const PhotoGallery = ({ photos, style, title }) => {
  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold p-[45px] text-center mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative">
            <img
              src={photo}
              style={style}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full  object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
