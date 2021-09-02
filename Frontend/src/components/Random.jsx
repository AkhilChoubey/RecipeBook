import React ,{useState, useEffect} from 'react';
import Element from './Element';
import axios from 'axios';

const Random = async () =>{


    const [link, setPosts] = useState([]);
    
    //componentDidMount

     
        
           
            useEffect( () =>{
            const tryLink = async () =>{
            const res =  await axios.get('https://api.spoonacular.com/recipes/random?apiKey=7b1f4ee3530d45dd9f612707cbeb22cf&number=5')
                .then(response => {
                  //  response.json();
                    console.log(response.data.recipes);
                    setPosts(response.data.recipes);
                })
           
            }
            tryLink();
            },[]);
        // const res =  await axios.get('https://api.spoonacular.com/recipes/random?apiKey=7b1f4ee3530d45dd9f612707cbeb22cf&number=5')
        // const link = res.data.recipes;

   // const value = await axios.get('https://api.spoonacular.com/recipes/random?apiKey=7b1f4ee3530d45dd9f612707cbeb22cf&number=5');
    
   console.log(link[0].image);
    return <div>
        <div className="my-5">
            <h1 className="text-center">Random Recipes</h1>
        </div>    
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">

                        
                        <Element key={link[0].index} imgsrc={link[0].image} title={link[0].title} recipe={link[0].sourceUrl} time={link[0].readyInMinutes} />
                        <Element key={link[1].index} imgsrc={link[1].image} title={link[5].title} recipe={link[1].sourceUrl} time={link[1].readyInMinutes} />
                        <Element key={link[2].index} imgsrc={link[2].image} title={link[6].title} recipe={link[2].sourceUrl} time={link[2].readyInMinutes} />
                        <Element key={link[3].index} imgsrc={link[3].image} title={link[7].title} recipe={link[3].sourceUrl} time={link[3].readyInMinutes} />
                        <Element key={link[4].index} imgsrc={link[4].image} title={link[8].title} recipe={link[4].sourceUrl} time={link[4].readyInMinutes} />


                        {/* <Element key={link.recipes[1].index} imgsrc={link.recipes[1].image} title={link.recipes[1].title} recipe={link.recipes[1].sourceUrl} time={link.recipes[1].readyInMinutes} />
                        <Element key={link.recipes[2].index} imgsrc={link.recipes[2].image} title={link.recipes[2].title} recipe={link.recipes[2].sourceUrl} time={link.recipes[2].readyInMinutes} />
                        <Element key={link.recipes[3].index} imgsrc={link.recipes[3].image} title={link.recipes[3].title} recipe={link.recipes[3].sourceUrl} time={link.recipes[3].readyInMinutes} />
                        <Element key={link.recipes[4].index} imgsrc={link.recipes[4].image} title={link.recipes[4].title} recipe={link.recipes[4].sourceUrl} time={link.recipes[4].readyInMinutes} />
                        */}
                  
                        {/* <Card /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>



}

export default Random;