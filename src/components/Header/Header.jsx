
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
             <span>This is my visiting website</span>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/usears">Usears</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;