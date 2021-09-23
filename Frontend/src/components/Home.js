import React,{useEffect} from 'react';
import NavBar from './NavBar';
import bg from './foodNew.jpg';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import img from './FOODIE.png';
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Contact2 from './Contact2';


const Home = () => {
   
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return <div style ={{ background : `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bg})`,backgroundSize:"auto", backgroundAttachment: "fixed" }} >
    <NavBar />
    
    <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
        <div className="row">
            <div className="col-10 " style={{width: '100%'}} >
            <div className="row">
            <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img  src={img}  className="img-fluid" alt="404 not found!" data-aos='zoom-in'/>
                </div> 
                <div id="title2" className="titleHeader col-md-6 pt-5 pt-lg-0 order-2 order-lg- d-flex justify-content-center flex-column" >
              

                <h1 >Welcome to the world of <strong className="brand-name">  <Typewriter options={{  strings: ['Recipes', 'Magic', 'Taste'],  autoStart: true,  loop: true,changeDelay:2 }}/></strong></h1>
                <h2 style= {{fontSize: '1.75rem'}} style={{color:"white"}}>Please Login or Sign Up to access the complete Website.</h2>
                <div style={{marginTop: '5px'}} >
                    <Link to='/login' className="btn-get-started ">Login</Link>
                    <Link to='/signup' className="btn-get-started " style={{marginLeft: "5%"}}>Sign Up</Link>
                </div>
                </div>

                
            </div>


            </div>
        </div>
        </div>
        </section>
        <Contact2 />
        <Footer />
    </div>
}

export default Home;