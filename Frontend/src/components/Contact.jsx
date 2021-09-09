import React, {useState, useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Wave from 'react-wavify';
import swal from 'sweetalert';

const Contact = () => {

    const [name,getName] = useState(null);
    const [email,getEmail] = useState(null);
    const [message,getMessage] = useState(null);
    
   function handleName(e){
        getName(e.target.value);
    }
    function  handleEmail(e){
        getEmail(e.target.value);
    }
    function  handleMessage(e){
        getMessage(e.target.value);
    }


    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    function handleChange(e){
        e.preventDefault();
        if(name === null) {
            swal({title: "Name cannot be empty " ,icon: "error" });
        } 
        else if(email === null) {
            swal({title : "Email cannot be empty " ,icon: "error" });
        }
        else if(message === null) {
            swal({title: "Message cannot be empty " ,icon: "error" });
        }
        else {
        swal( "Submition Successful ","Thanks for Contacting Us" , "success" );
        }
    }


    return <>


    <div className="card">

    <h5 className="card-header info-color white-text text-center py-4" style={{background: "#c9e3eb"}} data-aos='fade-down'>
        <strong>Contact us</strong>
    </h5>

    
    <div className="card-body px-lg-5 pt-0">

        
        <form style={{color: "#757575"}} onSubmit={handleChange}>

            
            <div className="md-form mt-3" data-aos='fade-down'>
            <label htmlFor="materialContactFormName">Name</label>
                <input type="text" id="materialContactFormName" onChange={handleName} className="form-control" />
                
            </div>

            
            <div className="md-form" style={{marginTop: "2%"}} data-aos='fade-up'>
            <label htmlFor="materialContactFormEmail">E-mail</label>
                <input type="email" id="materialContactFormEmail" onChange={handleEmail} className="form-control" />
                
            </div>

            <div style={{marginTop: "2%"}} data-aos='fade-up'>
            <span style={{marginRight: "2%"}}>Subject</span>
            <select className="mdb-select" defaultValue="1">
                <option value="" disabled>Choose option</option>
                <option value="1" >Feedback</option>
                <option value="2">Report a bug</option>
                <option value="3">Feature request</option>
                <option value="4">Feature request</option>
            </select>
            </div>
            
            <div className="md-form" style={{marginTop: "2%"}} data-aos='fade-down'>
            <label htmlFor="materialContactFormMessage">Message</label>
                <textarea id="materialContactFormMessage" onChange={handleMessage} className="form-control md-textarea" rows="3"></textarea>
                
            </div>

        
            {/* <div className="form-check">
                <input type="checkbox" className="form-check-input" id="materialContactFormCopy" />
                <label className="form-check-label" for="materialContactFormCopy">Send me a copy of this message</label>
            </div> */}

            
            <button className=" btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" onClick={handleChange} type="submit" style = {{width: "100%"}} data-aos='zoom-in'>Send</button>

        </form>
      

    </div>
    <div >
    <Wave fill='#4fcef5'
    paused={false}
    options={{
        height: 20,
        amplitude: 30,
        speed: 0.2,
        points: 4
    }} />
    </div>
    </div>



    

    </>
}

export default Contact;