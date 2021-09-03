import React ,{useEffect} from 'react';
import {Link} from "react-router-dom";
// import { fadeInDown } from 'react-animations';
import { animations } from 'react-animation'
// import { StyleSheet, css } from 'aphrodite';
import 'react-animation/dist/keyframes.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Element= (props)=>{

    // 
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <>
            <div className="col-md-4 col-10 mx-auto" style={{animation: animations.popIn}}>
                <div class="card" style={{ boxShadow: "0 8px 8px -4px lightblue"}} >
                <div class="card-body">
                    <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                            <h5 class="card-title font-weight-bold">{props.title}</h5>
                            <p class="card-text">Time to ready : {props.time} minutes</p>
                            <a type="botton" href={props.recipe} class="btn btn-outline-dark" style={{width: "100%"}}>Show recipe</a>
                        </div>
                </div>
            </div>
                   
        </>
    );
};

export default Element  ;