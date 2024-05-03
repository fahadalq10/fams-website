import React, { useState } from 'react';
import './Carousel.css';
import program_1 from '../../assets/program_1.png';
import program_2 from '../../assets/program_2.png';
import program_3 from '../../assets/program_3.png';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [program_1, program_2, program_3]; // Array of imported images

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={goToPrevious}>Previous</button>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
      <button className="carousel-button" onClick={goToNext}>Next</button>
    </div>
  );
}

export default Carousel;