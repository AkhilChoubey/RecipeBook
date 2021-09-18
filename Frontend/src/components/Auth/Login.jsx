// import react from 'react';
import axios from 'axios';
import './Login.css';

import {  Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router';
import swal from 'sweetalert';


const Login = () => {
    const history = useHistory(); 
   

    return <div className="align">
        <div className="grid align__item">
        <div className="register">
        <form className='login-type' onSubmit = {(e) => {login(e);  }} className="form">
            <h2>Login</h2>
            
            <div className="form__field">
            <input id="email" type="email" placeholder="Enter your email" /> 
            </div>
            
            <div className="form__field">
            <input id="password" type="password" placeholder="Enter your password" />
            <Link to="/reset">
         ForgotPassword?
        </Link>
            </div>
            <div className="form__field">
            <input type="submit" id="submit" value="Login"/>
            </div>
        </form>
        
        
        <p> New user? 
        <Link to="/signup">
         Sign Up
        </Link>
        </p>
        
        </div>
        </div>
    </div>



function login(e){
    e.preventDefault();
    
    let request = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value

    }
    axios.post('https://intense-anchorage-09653.herokuapp.com/v1/auth/login', request)
    // axios.post('http://localhost:4000/v1/auth/login', request)
    // https://intense-anchorage-09653.herokuapp.com/
   // axios.post('http://192.168.43.120:4100/v1/auth/login', request)
    .then(res => {
       // console.log(res.data);
        
        swal("Login Successful " ,"Welcome! "+ res.data.data.users.first_name + " " + res.data.data.users.last_name , "success" );
        history.push({
            pathname: '/home',
            state: {details: res.data.data.users}
    });
       
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
export default withRouter(Login);




