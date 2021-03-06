import './Logout.css';
import logoutPic from '../../../assets/powerButton.png'

const Logout = (props) => {
    console.log(props);
    return(
        <div>
            <img id='logout' className='logout' src={logoutPic} alt='powerbutton' onClick={props.Logout} />
        </div>
    )
}

export default Logout;