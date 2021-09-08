import React , {useEffect , useState} from 'react';
import {BsSearch} from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Element from './Element';
import { useHistory } from 'react-router';
import MealPlaner from './MealPlaner';
//for meals
// https://api.spoonacular.com/mealplanner/generate?apiKey=7b1f4ee3530d45dd9f612707cbeb22cf&timeFrame=day&targetCalories=2500&diet=vegetarian

//for image
// https://api.spoonacular.com/recipes/1531955/information?apiKey=7b1f4ee3530d45dd9f612707cbeb22cf&includeNutrition=false




const MealSearch = () => {

    const history = useHistory(); 
    const [cal, setCal]  = useState(null);
    const [result, setResult] = useState([]);
    const [image, setImage] = useState([]);


    function handleChange(e){
        let val = e.target.value;
        setCal(val);
    }

    function handleFind(){
        let getCalories = cal;

        fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=7b1f4ee3530d45dd9f612707cbeb22cf&timeFrame=day&targetCalories=${getCalories}&diet=vegetarian`)
        .then(response => response.json())
        .then((data)=>{
          // console.log(data)
        //  history.push({
        //         pathname: '/meal',
        //         state: {details: data}
        // });
           setResult(data);

        //   console.log(data.meals[0].id)
        for(var i=0;i<3;i++){
           fetch(`https://api.spoonacular.com/recipes/${data.meals[i].id}/information?apiKey=7b1f4ee3530d45dd9f612707cbeb22cf&includeNutrition=false`)
           .then(res => res.json())
           .then((data) => {
            //   console.log(data.image);
                setImage((pre) => {
                  return  [ ...pre,
                    data.image
                    ]
                }
                );
        })
    }
        })
        .catch((e)=> console.log(e))  
    }

    

     return <div className= 'top-recipe'>
              <div className="seven" >
                <h1 className="text-center" style={{marginTop: "6rem", paddingTop: "26px"}}>Daily Meal Planner</h1>
              </div> 
             <form className="d-flex meal-search">
        <input name="valData" onChange={handleChange} className="form-control me-2" type="search" placeholder="Enter Your Daily Calories Count" aria-label="Search" style={{  width: '33rem',borderRadius: '25px', height: '3rem'}} />
        <a type="submit" onClick={handleFind} style={{paddingLeft: '18px' ,fontSize: '26px'}}><BsSearch /></a>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        </form>
         { result.meals && 
         
            // console.log(data);
            
            <div className="container-fluid">
            <div className="row" >
                <div className="col-10 top-elements" >
                    <div className="row gy-4">
            {/* <Element key={result.meals[0].id} imgsrc={image[0]} recipe={data.sourceUrl} title={data.title} calories={400} fat={20} time = {data.readyInMinutes} /> */}
            <h3 style={{textAlign: 'center'}}>Total Calories: {result.nutrients.calories}</h3>
            <MealPlaner key={result.meals[0].id} imgsrc={image[0]} recipe={result.meals[0].sourceUrl} title={result.meals[0].title} time = {result.meals[0].readyInMinutes} for='Meal for Breakfast'/>
            <MealPlaner key={result.meals[1].id} imgsrc={image[1]} recipe={result.meals[1].sourceUrl} title={result.meals[1].title} time = {result.meals[1].readyInMinutes} for='Meal for Lunch' />
            <MealPlaner key={result.meals[2].id} imgsrc={image[2]} recipe={result.meals[2].sourceUrl} title={result.meals[2].title} time = {result.meals[2].readyInMinutes} for='Meal for Dinner' />
            </div>
            </div>
            </div>
            </div>
            
         
        }
        </div>
     
    
}

export default MealSearch;