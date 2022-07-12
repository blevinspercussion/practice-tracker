import './components.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function NavBar () {
    return (
        <div className='nav-bar'>
            <ul className='nav-list'>
                <li>Daily Practice</li>
                <li>Goals</li>
                <li>Admin Panel</li>
            </ul>
        </div>
    )
}

export default NavBar;