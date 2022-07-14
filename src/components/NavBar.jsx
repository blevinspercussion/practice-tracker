import './components.css';
import { Link } from 'react-router-dom';

function NavBar () {



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
            <hr />
        </div>
    )
}

export default NavBar;