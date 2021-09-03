import React ,{useEffect} from 'react';
import {Link} from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
const SElement= (props)=>{

    // 
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <>
            <div className="col-md-4 col-10 mx-auto" >
                <div class="card" style={{ boxShadow: "0 8px 8px -4px lightblue"}} data-aos='fade-up'>
                <div class="card-body">
                    <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                            <h5 class="card-title font-weight-bold">{props.title}</h5>
                            <p class="card-text">Time to ready : {props.time} minutes</p>
                            <p class="card-text">Calories : {props.calories} kcal</p>
                            <p class="card-text">Fat : {props.fat} g</p>
                       </div>
                </div>
            </div>
                   
        </>
    );
};

export default SElement  ;