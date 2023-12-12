import React from 'react';
import './Hero.css';
import Carousel from '../Carousel/Carousel';
import emmanuel from './img/img-hero.png';

function Hero() {
    return (
    <div>
        <div className='section-1'>
            <div className='about-me'>
                <h1>Emmanuel Solorzano's Portfolio</h1>
                <div className='content-wrapper'>
                    <div className='picture-me foto'>
                        <img src={emmanuel} alt='me'/>
                    </div>
                    <div className='text-container'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                            in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='section-2'>
            <div className='proyectos'>
                <h2>Recent Projects</h2>
                <Carousel />
            </div>
            <footer>
                Built with ❤️ using React.
            </footer>
        </div>

    </div>
  );
}
export default Hero;

