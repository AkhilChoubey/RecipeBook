import React from 'react';
import {Link} from "react-router-dom";

const Element= (props)=>{
    return (
        <>
        
            <div className="col-md-4 col-10 mx-auto">
                <div class="card" style={{ boxShadow: "0 8px 8px -4px lightblue"}} >
                    <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">{props.title}</h5>
                            <p class="card-text">Time to ready : {props.time} minutes</p>
                            <a type="botton" href={props.recipe} class="btn btn-outline-dark" style={{marginLeft: "31%"}}>Show recipe</a>
                        </div>
                </div>
            </div>

                   
        </>
    );
};

export default Element  ;