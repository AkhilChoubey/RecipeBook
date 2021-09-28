import React , { useState} from 'react';
import {BsSearch} from 'react-icons/bs';
import MealPlaner from './MealPlaner';




const MealSearch = () => {

    const [cal, setCal]  = useState(null);
    const [result, setResult] = useState([]);
    const [image, setImage] = useState([]);


    function handleChange(e){
        let val = e.target.value;
        setCal(val);
    }

    function handleFind(){
        let getCalories = cal;

        const apiKEY = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_KEY : process.env.REACT_APP_API_KEY;

        fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=${apiKEY}&timeFrame=day&targetCalories=${getCalories}&diet=vegetarian`)
        .then(response => response.json())
        .then((data)=>{

           setResult(data);

        for(var i=0;i<3;i++){
           fetch(`https://api.spoonacular.com/recipes/${data.meals[i].id}/information?apiKey=${apiKEY}&includeNutrition=false`)
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
             <form className="d-flex meal-search" onSubmit={handleFind} data-aos='fade-up'>
        <input name="valData" onChange={handleChange} className="form-control me-2" type="search" placeholder="Enter Your Daily Calories Count" aria-label="Search" style={{  width: '33rem',borderRadius: '25px', height: '3rem',background: 'white'}} />
        <div className='meal-submit' type="submit" onClick={handleFind} ><BsSearch /></div>
        
        </form>
         { result.meals && 
         
            <div className="container-fluid">
            <div className="row" >
                <div className="col-10 top-elements" >
                    <div className="row gy-4">
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