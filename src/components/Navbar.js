import './Navbar.css';
import { Avatar } from '@mui/material';

const Navbar = () => {
    const scrollTo = (elementId) => {
        const element = document.getElementById(elementId);
        element.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="Navbar">
            <div className='nav-left'>
            <Avatar className='avatar' alt="Travis Howard" src={process.env.PUBLIC_URL + '/img.jpg'} sx={{ width: 60, height: 60 }} />
            </div>
        <div className='links'>
                <li onClick={() => scrollTo("home")}>Home</li>
                <li onClick={() => scrollTo("about")}>About</li>
                <a href='https://github.com/Kartik1745' target="_blank" rel='noopener noreferrer'>Projects</a>
                <li>Contact</li>
        </div>
        </div>        
    );  
}

export default Navbar;