import React from 'react';
import FinalNav from './FinalNav';
import bg from './foodNew.jpg';
import Footer from './Footer';

const FinalHome = (props) => {
   let title = props.location.state.details.first_name;
    return <div style ={{ background : `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bg})`}} >
    <FinalNav title={title} />
    <h1> {props.location.state.details.first_name}</h1>
    hello
    <Footer />
    </div>
    
}

export default FinalHome;