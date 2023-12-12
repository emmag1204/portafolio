import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Carousel.css';

function Carousel() {
  const data = [
    {
        image: require('./img/yourvids.png'),
        title: 'YourVids.live',
        text: 'Developed a web app to upload videos named YourVids where the users can login and register in the app, upload videos, visit other users channels, delete their own videos, edit their own videos and search for videos in the plataform. Build using Django3 and ReactJS. The WebApp is available in: YourVids.live',
        videoLink: 'prueba',
        sourceCode: 'prueba',
    },
    {
      image: require('./img/yourvids.png'),
      title: 'YourVids.live',
      text: 'Developed a web app to upload videos named YourVids where the users can login and register in the app, upload videos, visit other users channels, delete their own videos, edit their own videos and search for videos in the plataform. Build using Django3 and ReactJS. The WebApp is available in: YourVids.live',
      videoLink: 'prueba',
      sourceCode: 'prueba',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };
  
  return (
    <div className='carousel-container'>
      <div className='carousel-wrapper' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {data.map((slide, index) => (
          <div key={index} className='carousel-item'>
            <img className='carousel-image' src={slide.image} alt='project-img' />
            <div className='carousel-content'>
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
              <div className='carousel-buttons'>
                <a className='carousel-live' href={slide.videoLink}>LIVE DEMO</a>
                <a className='carousel-code' href={slide.sourceCode}>SOURCE CODE</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='carousel-navigation'>
        <button className='carousel-prev' onClick={goToPrevSlide}><FaArrowLeft /></button>
        <button className='carousel-next' onClick={goToNextSlide}><FaArrowRight /></button>
      </div>
    </div>
  );
}
export default Carousel;