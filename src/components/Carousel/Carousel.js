import React, { useEffect, useState } from 'react';
import './Carousel.css';
import API from '../ENV/API';

function Carousel() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProjects(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };
  
  return (
    <div className='carousel-container'>
      <div className='carousel-wrapper' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {projects && (
        <>
          {projects.map((slide, index) => (
            <div key={index} className='carousel-item'>
              <img className='carousel-image' src={slide.image} alt='project-img' />
              <div className='carousel-content'>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <div className='carousel-buttons'>
                  <a className='carousel-live' href={slide.youtubeResourceID}>LIVE DEMO</a>
                  <a className='carousel-code' href={slide.url}>SOURCE CODE</a>
                </div>
              </div>
            </div>
          ))}
        </>
        )}
      </div>
      <div className='carousel-navigation'>
        <button className='carousel-prev' onClick={goToPrevSlide}>&larr;</button>
        <button className='carousel-next' onClick={goToNextSlide}>&rarr;</button>
      </div>
      <div className='carousel-dots'>
        {projects.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
export default Carousel;