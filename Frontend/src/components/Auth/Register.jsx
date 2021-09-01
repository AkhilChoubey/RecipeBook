import axios from 'axios';
import './Login.css';
import { BrowserRouter as Router, Switch, Route , Link, Redirect} from 'react-router-dom';
import { withRouter } from 'react-router';
import { createBrowserHistory as history } from 'history';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
 
const Register = () => {

    const history = useHistory();

    return <div className="align">
        <div className="grid align__item">
        <div className="register">
        <form onSubmit = {(e) =>  {register(e); } }className="form">
            <h2>SIGN UP</h2>
            <div className="form__field">
            <input type="text" id="first" placeholder="First Name" /> 
            </div>
            <div className="form__field">
            <input type="text" id="last" placeholder="Last Name" /> 
            </div>
            <div className="form__field">
            <input type="text" id="phone"  placeholder="Phone Number" /> 
            </div>
            <div className="form__field">
            <input id="email" type="email" placeholder="Enter your email" /> 
            </div>
            
            <div className="form__field">
            <input id="password" type="password" placeholder="Create password" />
            </div>
            <div className="form__field">
            <input type="submit" id="submit" value="Sign Up"/>
            </div>
        </form>
        
        <p> Already have an account?<Link to="/login">Login</Link></p>
        
        </div>
        </div>
    </div>


function register(e){
    e.preventDefault();
    let request = {
        first_name: document.getElementById("first").value,
        last_name: document.getElementById("last").value,
        dial_code: "+91",
        phone: document.getElementById("phone").value,
        gender: "Male",
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    axios.post('http://localhost:4100/v1/auth/register', request)
    .then(res => {
       // console.log(res.data);
        
        swal("Succesfully Registered!!! " , "success" );

        history.push('/login');
    })
    .catch( (err) => {
        if(err.response.status === 422){
            swal({title: err.response.data.errors,icon: "error"});
        }
        else {
            swal({title: err.response.data.message,icon: "error"});
        }
        console.log(err.response.data.message);
    })
}
}
export default withRouter(Register);




