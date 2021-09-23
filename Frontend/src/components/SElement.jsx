import React ,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const SElement= (props)=>{

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <>
            <div className="col-md-4 col-10 mx-auto" >
                <div className="card" style={{ boxShadow: "0 8px 8px -4px lightblue"}} data-aos='fade-up'>
                <div className="card-body">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                            <h5 className="card-title font-weight-bold">{props.title}</h5>
                            <p className="card-text">Time to ready : {props.time} minutes</p>
                            <p className="card-text">Calories : {props.calories} kcal</p>
                            <p className="card-text">Fat : {props.fat} g</p>
                       </div>
                </div>
            </div>
                   
        </>
    );
};

export default SElement  ;