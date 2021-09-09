import React, {useState, useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Wave from 'react-wavify';
import swal from 'sweetalert';
import {ImLocation} from "react-icons/im";
import {ImPhone} from "react-icons/im";
import {MdEmail} from "react-icons/md";
import {RiSendPlaneFill} from "react-icons/ri";
import {FaLinkedin} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import {AiFillFacebook} from "react-icons/ai";
import {AiOutlineTwitter} from "react-icons/ai";



const Contact2 =  ()=>{

    const HorizontalLine = () => (
        <hr
            style={{
                color: 'white',
                backgroundColor: 'white',
                height: 2
            }}
        />);

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return <>
    <section id="contact" style={{background: 'black'}} > 
    {/* data-aos='fade-down'> */}
  
  <h1 className="section-header eleven" data-aos='fade-down' >Contact</h1>
  
  <div className="contact-wrapper" >
  

    
    <form id="contact-form" className="form-horizontal" role="form" >
       
      <div className="form-group">
        <div className="col-sm-12">
          <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value="" style={{marginBottom : '10px'}} required data-aos='fade-up'/>
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-12">
          <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value="" style={{marginBottom : '10px'}} required data-aos='fade-up' />
        </div>
      </div>

      <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" style={{marginBottom : '10px'}} required data-aos='fade-down'></textarea>
      
      <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div className="alt-send-button">
          <RiSendPlaneFill style={{fontSize: "1.5rem"}}/><span className="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    
  
    
      <div className="direct-contact-container">

        <ul className="contact-list">
          <li className="list-item"><ImLocation className="fa fa-2x" style={{fontSize: "1.5rem"}} data-aos='fade-down'/><span className="contact-text place" data-aos='fade-up'>Palamu, Jharkhand</span></li>
          
          <li className="list-item"><ImPhone style={{fontSize: "1.5rem"}} data-aos='fade-down'  /><span className="contact-text phone"><a href="tel:9693480133" title="Give me a call" data-aos='fade-up'>+91 9693480133</a></span></li>
          
          <li className="list-item"><MdEmail style={{fontSize: "1.5rem"}} data-aos='fade-down' /><span className="contact-text gmail"><a href="mailto:akhilchoubeys@gmail.com" title="Send me an email" data-aos='fade-up'>akhilchoubeys@gmail.com</a></span></li>
          
        </ul>

        <hr></hr>
      
            <HorizontalLine />
        <ul className="social-media-list" data-aos='zoom-in'>
          <li><a href="https://www.linkedin.com/in/akhil-choubey-376887192" target="_blank" className="contact-icon">
            <FaLinkedin style={{fontSize: "1.5rem"}}  className="fa " aria-hidden="true" /></a>
          </li>
          <li><a href="https://github.com/AkhilChoubey" target="_blank" className="contact-icon">
            <AiFillGithub style={{fontSize: "1.5rem"}}  className="fa" aria-hidden="true" /></a>
          </li>
          <li><a href="https://www.facebook.com/profile.php?id=100009258792168" target="_blank" className="contact-icon">
            <AiFillFacebook style={{fontSize: "1.5rem"}}  className="fa" aria-hidden="true" /></a>
          </li>
          <li><a href="https://twitter.com/AkhilKrChoubey1?s=08" target="_blank" className="contact-icon">
            <AiOutlineTwitter style={{fontSize: "1.5rem"}}  className="fa" aria-hidden="true" /></a>
          </li>       
        </ul>
        <hr />
        <HorizontalLine />
        <div className="copyright">&copy; AKHIL CHOUBEY</div>

      </div>
    
  </div>
  
</section>  
  
  
    </>
}

export default Contact2;