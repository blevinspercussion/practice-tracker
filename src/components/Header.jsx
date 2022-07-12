import './components.css';
import NavBar from './NavBar';

function Header () {
    return (
        <div>
            <h1 className='title'>Practice Tracker</h1>
            <NavBar />
        </div>
    )
}

export default Header;