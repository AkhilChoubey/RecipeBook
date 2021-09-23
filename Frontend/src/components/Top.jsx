import React ,{ useEffect} from 'react';
import Element from './Element';
import wave from './wave.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Top = () =>{

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
     
        
    
    return <div className="top-recipe" >
        <div  className="eleven" data-aos='fade-up'>
            <h1 className="text-center" style={{paddingTop: "120px"}}>Top Recipes</h1>
           
        </div>    
        <div className="container-fluid">
            <div className="row" >
                <div className="col-10 top-elements" >
                    <div className="row gy-4">

                        <Element key={665170} imgsrc={ "https://spoonacular.com/recipeImages/665170-556x370.jpg"} title={"White Chocolate Cherry Hand Pies"} recipe={ "https://www.foodista.com/recipe/T22BGDFV/white-chocolate-cherry-hand-pies"} time={45} />
                        <Element key={634854} imgsrc={"https://spoonacular.com/recipeImages/634854-556x370.jpg"} title={ "Berry Fruit Crumble"} recipe={ "https://www.foodista.com/recipe/67KX7C62/berry-fruit-crumble"} time={45} />
                        <Element key={659180} imgsrc= {"https://spoonacular.com/recipeImages/635552-556x370.jpg"} title={"Blueberry Vanilla Pie"} recipe={ "http://www.foodista.com/recipe/QQC5Y6J8/blueberry-vanilla-pie"} time={55} />
                        <Element key={652750} imgsrc={"https://spoonacular.com/recipeImages/652750-556x370.jpg"} title={"Mussels & Clams in White Wine {Cozze e Vongole}"} recipe={"http://www.foodista.com/recipe/TXM3X2KZ/mussels-clams-in-white-wine-cozze-e-vongole"} time={60} />
                        <Element key={664273} imgsrc={"https://spoonacular.com/recipeImages/664273-556x370.jpg"} title={"Valentine's Day Potted Plant Ice-Cream Desserts"} recipe={"https://www.foodista.com/recipe/2GZ5DQ3F/valentine-s-day-potted-plant-ice-cream-desserts"} time={50} />
                        <Element key={652332} imgsrc={"https://spoonacular.com/recipeImages/652332-556x370.jpg"} title={"Monastery soup"} recipe={"https://www.foodista.com/recipe/Y67R5WMP/monastery-soup"} time={45} />

                        <img src={wave} style={{padding: "0", width: "100%"}} data-aos='fade-down' alt='404 not found!' />
                        
                    </div>
                </div>
            </div>
        </div>
    </div>



}

export default Top;