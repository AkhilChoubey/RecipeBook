import React from 'react';
import NavBar from './NavBar';
import bg from './foodNew.jpg';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import img from './FOODIE.png';

const Home = () => {
   
    return <div style ={{ background : `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bg})`,backgroundSize:"auto", backgroundAttachment: "fixed" }} >
    <NavBar />
    
    {/* <h1> {props.location.state.details.first_name}</h1> */}
    <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
        <div className="row">
            <div className="col-10 mx-auto" >
            <div className="row">
            <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img  src={img}  className="img-fluid animated" alt="About Image"/>
                </div> 
                <div id="title" className="titleHeader col-md-6 pt-5 pt-lg-0 order-2 order-lg- d-flex justify-content-center flex-column" >
                <h1>Welcome to the world of <strong className="brand-name">Recipes</strong></h1>
                <h2 className="my-3" style={{color:"white"}}>Please Login or Sign Up to access the complete Website.</h2>
                <div className="mt-3">
                    <Link to='/login' className="btn-get-started ">Login</Link>
                    <Link to='/signup' className="btn-get-started " style={{marginLeft: "5%"}}>Sign Up</Link>
                </div>
                </div>

                
            </div>


            </div>
        </div>
        </div>
        </section>
        <Footer />
    </div>
}

export default Home;