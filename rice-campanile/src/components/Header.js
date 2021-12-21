import { NavLink } from 'react-router-dom';

function Header() {
    return(
        <div>
            <div>
            <NavLink to='/'>Rice Campanile</NavLink>
            </div>
            <div>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/team'>Meet the Team!</NavLink>
            <NavLink to='/events'>Events</NavLink>
            <NavLink to='/join-us'>Join Us</NavLink>
            </div>
        </div>
    );
}
export default Header;