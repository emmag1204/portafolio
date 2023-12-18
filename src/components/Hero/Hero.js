import React from 'react';
import './Hero.css';
import Carousel from '../Carousel/Carousel';
import emmanuel from './img/img-hero.webp';

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
                        Hi! 👋 I'm a Computer Science Student 👨🏾‍💻 at Tecnológico de Monterrey in Zapopan, Jalisco 🇲🇽. 
                        Passionate about full-stack development and artificial intelligence 🧠 
                        who is always looking for new ways to improve myself 💪🏽 by learning and taking courses to stay up
                        to date on the latest technologies 💻.
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
                Built with ❤️ using React and Django3.
            </footer>
        </div>

    </div>
  );
}
export default Hero;

