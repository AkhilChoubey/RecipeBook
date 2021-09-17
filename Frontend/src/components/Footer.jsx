import React from "react";

import {FaLinkedin} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import {AiFillFacebook} from "react-icons/ai";
import {AiOutlineTwitter} from "react-icons/ai";
import Wave from 'react-wavify';

const Footer=()=>{
    return (
        <div style={{background: 'black'}}>
        <Wave fill='#fff'
        // '#4fcef5'
    paused={false}
    options={{
        height: 20,
        amplitude: 30,
        speed: 0.2,
        points: 4
    }} />
          <footer className="footer-container" style={{marginTop: "0"}}>
         
              <div className="copy">
                  <p style={{color: 'black'}}>&copy; AkhilChoubey</p>
              </div>
              <div className="logo">
              <a href="https://www.linkedin.com/in/akhil-choubey-376887192" style={{paddingLeft: "35px"}}><FaLinkedin style={{color: 'black'}}/></a>
                 <a href="https://github.com/AkhilChoubey"><AiFillGithub style={{color: 'black'}}/></a>
                 <a href="https://www.facebook.com/profile.php?id=100009258792168"><AiFillFacebook style={{color: 'black'}} /></a>
                 <a href="https://twitter.com/AkhilKrChoubey1?s=08"><AiOutlineTwitter style={{color: 'black'}}/></a>

              </div>
              {/* <div className="developer">
                 <a href="https://www.linkedin.com/in/akhil-choubey-376887192"><FaLinkedin /></a>
                 <a href="https://www.linkedin.com/in/akhil-choubey-376887192"><AiFillGithub /></a>
                 <a href="https://www.linkedin.com/in/akhil-choubey-376887192"><AiFillFacebook /></a>
                 <a href="https://www.linkedin.com/in/akhil-choubey-376887192"><AiOutlineTwitter /></a>
                 
              </div> */}

          </footer>

        </div>
    )
}


export default Footer;
