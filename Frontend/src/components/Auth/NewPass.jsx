// import react from 'react';
import axios from 'axios';
import './Login.css';
import Register from './Register';
import Home from '../Home';
import { BrowserRouter as Router, Switch, Route , Link, Redirect} from 'react-router-dom';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router';
import swal from 'sweetalert';


const NewPass = () => {
    const history = useHistory(); 
   

    return <div className="align">
        <div className="grid align__item">
        <div className="register">
        <form onSubmit = {(e) => {login(e);  }} className="form">
            <h4>Enter New Password</h4>
            
            {/* <div className="form__field">
            <input id="email" type="email" placeholder="Enter your email" /> 
            </div>
             */}
             <div className="form__field">
            <input id="otp" type="text" placeholder="Enter sent OTP" />
            
            </div>
            <div className="form__field">
            <input id="password" type="password" placeholder="Enter your new password" />
            
            </div>
            <div className="form__field">
            <input type="submit" id="submit" value="Update Password"/>
            </div>
        </form>
        
        
        
        </div>
        </div>
    </div>



function login(e){
    e.preventDefault();
    
    let request = {
        password: document.getElementById("password").value,
        otp: document.getElementById("otp").value
    }
    axios.post('http://localhost:4100/v1/auth/resetPasswordWithOtp', request)
   //axios.post('http://192.168.43.120:4100/v1/auth/login', request)
    .then(res => {
       // console.log(res.data);
        
        swal({title: "Password Successfully Updated! "  ,icon: "success" });
        history.push({
            pathname: '/login'
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
export default withRouter(NewPass);




