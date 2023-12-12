import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css';
import Resume from './Emmanuel-Resume.pdf'
import Nombre from './img/navbar-logo.jpg';

function Navigation() {
    return (
        <Navbar className='principal'>
            <Container className='marca'>
                <a href='/' className='home-link'>
                    <img width='90' height='90' src={Nombre} alt='logo'/>
                    <h1>Home</h1>
                </a>
            </Container>
            <Container className='informacion'>
                <a href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a>
                <a href='https://www.linkedin.com/in/emmanuel-solorzano/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                <a href='mailto:emahumsol@hotmail.com'>Contact</a>
            </Container>
        </Navbar>
    );
}
export default Navigation;