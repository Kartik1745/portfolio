import './Navbar.css';
import { Avatar } from '@mui/material';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className='nav-left'>
            <Avatar className='avatar' alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 56, height: 56 }} />
            <h1 className='name'>Kartik Patil</h1>
            </div>
           <div className='links'>
                <a>Home</a>
                <a >About</a>
                <a >Projects</a>
                <a >Contact</a>
           </div>
        </div>
    );  
}

export default Navbar;