import './components.css';
import Login from './Login';
import { Link } from 'react-router-dom';

function NavBar () {

    const register = async () => {

    };

    const login = async () => {

    };

    const logout = async () => {

    };

    return (
        <div className='nav-bar'>
            <ul className='nav-list'>
                <Link to={'/dailypractice'}> 
                    <li>Daily Practice</li>
                </Link>
                <Link to={'/goals'}>
                    <li>Goals</li>
                </Link>
                <Link to={'/adminpanel'}>
                    <li>Admin Panel</li>
                </Link>
            </ul>
            <Login />
            <hr />
        </div>
    )
}

export default NavBar;