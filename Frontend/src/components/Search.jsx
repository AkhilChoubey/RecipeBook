import React from 'react';
import SElement from './SElement';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Wave from 'react-wavify';

const Search = (props) => {
    React.useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    let result = props.location.state.details.results;
    console.log(result);        
   
    return <div className="top-recipe" >
        <div className="seven" >
            <h1 className="text-center" style={{marginTop: "6rem", paddingTop: "26px"}}>Top Search Results</h1>
           
        </div>    
        <div className="container-fluid">
            <div className="row" >
                <div className="col-10 top-elements" >
                    <div className="row gy-4">

                        {result.length>0?result.map((data, index) => {
                            console.log(data);
                            return <SElement key={index} imgsrc={data.image} title={data.title} calories={data.nutrition.nutrients[0].amount} fat={data.nutrition.nutrients[1].amount} time = {45} />
                        }):<h1>Oops! No match found </h1>
                         }
                      
                    </div>
                </div>
            </div>
            
    
        </div>
        <div >
        <Wave fill='#4fcef5'
    paused={false}
    options={{
        height: 20,
        amplitude: 30,
        speed: 0.2,
        points: 4
    }} />
    </div>
    </div>
}

export default Search;