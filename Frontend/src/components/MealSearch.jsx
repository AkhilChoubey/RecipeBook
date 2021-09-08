import React , {useEffect , useState} from 'react';
import {BsSearch} from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Element from './Element';
import { useHistory } from 'react-router';
//for meals
// https://api.spoonacular.com/mealplanner/generate?apiKey=7b1f4ee3530d45dd9f612707cbeb22cf&timeFrame=day&targetCalories=2500&diet=vegetarian

//for image
// https://api.spoonacular.com/recipes/1531955/information?apiKey=7b1f4ee3530d45dd9f612707cbeb22cf&includeNutrition=false




const MealSearch = () => {

    const history = useHistory(); 
    const [cal, setCal]  = useState(null);
    
   


    function handleChange(e){
        let val = e.target.value;
        setCal(val);
    }

    function handleFind(){
        let getCalories = cal;
        fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=7b1f4ee3530d45dd9f612707cbeb22cf&timeFrame=day&targetCalories=${getCalories}&diet=vegetarian`)
        .then(response => response.json())
        .then((data)=>{
           console.log(data)
        //  history.push({
        //         pathname: '/meal',
        //         state: {details: data}
        // });

        })
        .catch((e)=> console.log(e))  
    }


     return <div className= 'top-recipe'>
              <div className="seven" >
                <h1 className="text-center" style={{marginTop: "6rem", paddingTop: "26px"}}>Daily Meal Planner</h1>
              </div> 
             <form className="d-flex meal-search">
        <input name="valData" onChange={handleChange} className="form-control me-2" type="search" placeholder="Search recipes" aria-label="Search" style={{  width: '33rem',borderRadius: '25px', height: '3rem'}} />
        <a type="submit" onClick={handleFind} style={{paddingLeft: '18px' ,fontSize: '26px'}}><BsSearch /></a>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        </form>
        </div>
     
    
}

export default MealSearch;