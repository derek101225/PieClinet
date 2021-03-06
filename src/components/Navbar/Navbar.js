import './Navbar.css';
import Logout from './Logout/Logout';
import piePic from '../../assets/piePic.jpeg';

const Navbar = (props) => {
    console.log(props);
    return(
        <div>
            <nav>
                <img id='piePic' src={piePic} alt='pie' />
                <Logout Logout={props.Logout} />
            </nav>
        </div>
    );
}


export default Navbar;