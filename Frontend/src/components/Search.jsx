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
                        {/* <Element key={665170} imgsrc={ "https://spoonacular.com/recipeImages/665170-556x370.jpg"} title={"White Chocolate Cherry Hand Pies"} recipe={ "https://www.foodista.com/recipe/T22BGDFV/white-chocolate-cherry-hand-pies"} time={45} />
                        <Element key={634854} imgsrc={"https://spoonacular.com/recipeImages/634854-556x370.jpg"} title={ "Berry Fruit Crumble"} recipe={ "https://www.foodista.com/recipe/67KX7C62/berry-fruit-crumble"} time={45} />
                        <Element key={659180} imgsrc= {"https://spoonacular.com/recipeImages/635552-556x370.jpg"} title={"Blueberry Vanilla Pie"} recipe={ "http://www.foodista.com/recipe/QQC5Y6J8/blueberry-vanilla-pie"} time={55} />
                        <Element key={652750} imgsrc={"https://spoonacular.com/recipeImages/652750-556x370.jpg"} title={"Mussels & Clams in White Wine {Cozze e Vongole}"} recipe={"http://www.foodista.com/recipe/TXM3X2KZ/mussels-clams-in-white-wine-cozze-e-vongole"} time={60} />
                        <Element key={664273} imgsrc={"https://spoonacular.com/recipeImages/664273-556x370.jpg"} title={"Valentine's Day Potted Plant Ice-Cream Desserts"} recipe={"https://www.foodista.com/recipe/2GZ5DQ3F/valentine-s-day-potted-plant-ice-cream-desserts"} time={50} />
                        <Element key={652332} imgsrc={"https://spoonacular.com/recipeImages/652332-556x370.jpg"} title={"Monastery soup"} recipe={"https://www.foodista.com/recipe/Y67R5WMP/monastery-soup"} time={45} /> */}

                        {/* <img src={wave} style={{padding: "0", width: "100%"}} data-aos='fade-down'/> */}
                        
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