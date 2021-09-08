import React , {useEffect , useState} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Element from './Element';
import MealSearch from './MealSearch';
import Wave from 'react-wavify';
//for meals
// https://api.spoonacular.com/mealplanner/generate?apiKey=7b1f4ee3530d45dd9f612707cbeb22cf&timeFrame=day&targetCalories=2500&diet=vegetarian

//for image
// https://api.spoonacular.com/recipes/1531955/information?apiKey=7b1f4ee3530d45dd9f612707cbeb22cf&includeNutrition=false




const MealPlaner = (props) => {

    const [image, setImage] = useState(null);

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${props.data.id}/information?apiKey=7b1f4ee3530d45dd9f612707cbeb22cf&includeNutrition=false`)
        .then(res => res.json())
        .then((data) => {
            setImage(data.image);
        })
    }
    , []);

     return <div className="top-recipe" >
            <div className="seven" >
                <h1 className="text-center" style={{marginTop: "6rem", paddingTop: "26px"}}>Your Meal Plan</h1>
           
        </div>    
        <div className="container-fluid">
            <div className="row" >
                <div className="col-10 top-elements" >
                    <div className="row gy-4">

                        {/* {result.map((data, index) => {
                            console.log(data);
                            return <Element key={index} imgsrc={image} recipe={data.sourceUrl} title={data.meals[0].title} calories={data.nutrition.nutrients[0].amount} fat={data.nutrition.nutrients[1].amount} time = {45} />
                        })
                         } */}
                      
                        
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

export default MealPlaner;