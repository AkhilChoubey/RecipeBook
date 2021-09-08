import React ,{useEffect} from 'react';
// import react from 'react';
import axios from 'axios';
import './Login.css';
import Register from './Register';
import Home from '../Home';
import { BrowserRouter as Router, Switch, Route , Link, Redirect} from 'react-router-dom';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router';
import swal from 'sweetalert';


const ResetPass = () => {
    const history = useHistory(); 
   

    return <div className="align">
        <div className="grid align__item">
        <div className="register">
        <form onSubmit = {(e) => {login(e);  }} className="form">
            <h3>Reset Password</h3>
            
            <div className="form__field">
            <input id="email" type="email" placeholder="Enter your email" /> 
            </div>
            
            {/* <div className="form__field">
            <input id="password" type="password" placeholder="Enter your password" />
            <Link to="/reset">
         ForgotPassword?
        </Link>
            </div> */}
            <div className="form__field">
            <input type="submit" id="submit" value="Send OTP"/>
            </div>
        </form>
        
        
        </div>
        </div>
    </div>



function login(e){
    e.preventDefault();
    
    let request = {
        email: document.getElementById("email").value
    }
    axios.post('http://localhost:4100/v1/auth/sendOtpToEmail', request)
   // axios.post('http://192.168.43.120:4100/v1/auth/login', request)
    .then(res => {
       // console.log(res.data);
        
        swal({title: "OTP Sent on ",icon: "success" });
        history.push({
            pathname: '/resetpassword'
            //state: {details: res.data.data.users}
    });
       
    })
    .catch( (err) => {
//         
swal({title: "OTP Sent ",icon: "success" });
        history.push({
            pathname: '/resetpassword'
            //state: {details: res.data.data.users}
    });
    })
}
}







export default ResetPass;

