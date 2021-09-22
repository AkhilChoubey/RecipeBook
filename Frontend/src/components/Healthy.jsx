import React ,{ useEffect} from 'react';
import Element from './Element';
import wave from './wave.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Healthy = () =>{

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
 
    return <div style={{background: "white"}}>
        <div style={{margin: "0"}}>
        <img src={wave} style={{padding: "0", width: "100%", transform: "rotate(180deg)"}} data-aos='fade-up' alt='404 not found!' />
        <div className="seven">
            <h1 className="text-center">Healthy Recipes</h1>
            </div>    
        </div>    
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 top-elements">
                    <div className="row gy-4">
                
                        <Element key={638797} imgsrc={"https://spoonacular.com/recipeImages/638797-556x370.jpg"} title={"Chocoholic's Deep Dark Dream Chiffon Cake"} recipe={"http://www.foodista.com/recipe/PVY6548N/chocoholics-deep-dark-dream-chiffon-cake"} time= {45} />
                        <Element key={647395} imgsrc={"https://spoonacular.com/recipeImages/647395-556x370.jpg"} title={"Hot Artichoke Crab Dip"} recipe={ "https://www.foodista.com/recipe/QKLVNNXS/crab-artichoke-dip-hot"} time={45} />
                        <Element key={644860} imgsrc= {"https://spoonacular.com/recipeImages/644860-556x370.jpg"} title={"Gluten Free Waffles"} recipe={"https://www.foodista.com/recipe/576TZWT3/gluten-free-waffles"} time={55} />
                        <Element key={653977} imgsrc={"https://spoonacular.com/recipeImages/633921-556x370.jpg"} title={"Orange Zest Maple Date Bars"} recipe={"http://www.foodista.com/recipe/CK5NCLGT/balsamic-honey-glazed-salmon-with-lemony-asparagus"} time={60} />
                        <Element key={636212} imgsrc={"https://spoonacular.com/recipeImages/636212-556x370.jpg"} title={"Broccoli Rabe with Tomatoes, Anchovies & Spaghetti"} recipe={"http://www.foodista.com/recipe/NN7GPTYR/broccoli-rabe-with-tomatoes-anchovies-spaghetti"} time={45} />
                        <Element key={769754} imgsrc={"https://spoonacular.com/recipeImages/769754-556x370.jpg"} title={"Beef Carrot Stew"} recipe={"http://www.afrolems.com/2016/05/26/beef-carrot-stew/"} time={45} />
                        
                    </div>
                </div>
            </div>
        </div>
    </div>



}

export default Healthy;