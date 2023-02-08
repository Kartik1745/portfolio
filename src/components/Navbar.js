import './Navbar.css';
import { Avatar } from '@mui/material';

const Navbar = () => {
    return (
        <div className="Navbar">
           <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 56, height: 56 }} />
           <div className='links'>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Projects</a>
                <a href='/'>Contact</a>
           </div>
        </div>
    );  
}

export default Navbar;