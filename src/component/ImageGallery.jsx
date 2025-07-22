import React, { useState } from 'react';
import './ImageGallery.css'; // Create this CSS file

function ImageGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-gallery">
      {images.length > 0 ? (
        <>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="gallery-image"
          />
          <p className="image-caption">{images[currentIndex].alt}</p>
          <div className="gallery-controls">
            <button onClick={goToPrevious}>Previous</button>
            <button onClick={goToNext}>Next</button>
          </div>
        </>
      ) : (
        <p>No images to display.</p>
      )}
    </div>
  );
}

export default ImageGallery;