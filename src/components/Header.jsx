import './components.css';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <div>
            <Link to={'/'}>
                <h1 className='title'>Practice Tracker</h1>
            </Link>
            <NavBar />
        </div>
    )
}

export default Header;