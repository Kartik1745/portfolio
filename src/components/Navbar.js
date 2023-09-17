import './Navbar.css';
import { Avatar } from '@mui/material';

const Navbar = () => {
    const scrollTo = (elementId) => {
        const element = document.getElementById(elementId);
        element.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className='nav-container'>
            <div className='image'>
`               <Avatar className='avatar' alt="Travis Howard" src={process.env.PUBLIC_URL + '/img.jpg'} sx={{ width: 60, height: 60 }} />
            </div>
            <div className='links'>
                <li onClick={() => scrollTo("home")}>Home</li>
                <li onClick={() => scrollTo("about")}>About</li>
                <li onClick={() => scrollTo("project")}>Projects</li>
                <a href='https://drive.google.com/file/d/1-oR_9MOfuku34drPTG8c4vvJN1YeyQ_5/view?usp=sharing' target=' '>Resume</a>
            </div>
        </div>
    );
}

export default Navbar;