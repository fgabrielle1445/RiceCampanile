import { NavLink } from 'react-router-dom';
import './header.css';

// import Navbar from 'react-bootstrap/Navbar'

function Header() {
    return(
        <div>
            <div class="topnav">
            <NavLink to='/'>Rice Campanile</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/team'>Meet the Team!</NavLink>
            <NavLink to='/events'>Events</NavLink>
            <NavLink to='/join-us'>Join Us</NavLink>
            </div>

            <p>Rice University's undergraduate yearbook</p>

        </div>
    );
}
export default Header;