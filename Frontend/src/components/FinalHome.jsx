import React from 'react';
import FinalNav from './FinalNav';
import bg from './foodNew.jpg';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Top from './Top';
import ReactTextTransition, { presets } from "react-text-transition";
import Typewriter from 'typewriter-effect';
import Healthy from './Healthy';
import Slider from './Slider';
import Contact from './Contact';

 
const FinalHome = (props) => {


    let title = props.location.state.details.first_name;
    const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

    const texts = ["Recipes", "Magic", "Taste"];

    return <div style ={{ background : `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bg})`, backgroundAttachment: "fixed",backgroundRepeat: "no-repeat"}} >
    <FinalNav title={title} />
    {/* <h1> {props.location.state.details.first_name}</h1> */}
    <section id="header" className="d-flex align-items-center">
    <div id="title" className="titleHeader col-md-6 pt-5 pt-lg-0 order-2 order-lg- d-flex justify-content-center flex-column" >
                <h1>Welcome to the world of <strong className="brand-name"> 
                <Typewriter options={{  strings: ["Recipes", "Magic", "Taste"],  autoStart: true,  loop: true,changeDelay:2 }}/>

              </strong>
               </h1>
               <h2 className="my-3" style={{color:"white"}}>
               <Typewriter options={{  strings: ['Search for your favourite food', "Let's surprise others with our cooking talent"],  autoStart: true,  loop: true,changeDelay:2 }}/>
               </h2>
                
                <div className="mt-3">
                    <Link to='/top' className="btn-get-started ">Top</Link>
                    <Link to='/healthy' className="btn-get-started " style={{marginLeft: "5%"}}>Healthy</Link>
                </div>
                </div>
    </section>
    <Top />
    <Healthy />
    
    <Slider />
    <Contact />
    <Footer />
    
    </div>
    
} 

export default FinalHome;