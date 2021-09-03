import React ,{useState, useEffect} from 'react';
import Element from './Element';
import blob from './blob.svg';
import wave from './wave.svg';
const Top = () =>{


   // const [link, setPosts] = useState(null);
    
    //componentDidMount

     
        
    // 000ac1e28d8a4064a342f4bca67180a6
          //  useEffect( () =>{
        // let link;
        // //     const tryLink = () =>
        // //   {
        //      fetch('https://api.spoonacular.com/recipes/random?apiKey=000ac1e28d8a4064a342f4bca67180a6&number=6')
        //         .then(response => 
        //             response.json()   
        //         ).then((data)=>{
        //            // setPosts(data);
        //            link = data;
        //             console.log(data)
        //         })
        //         .catch((e)=> console.log(e))         
           
            //}
            
        //    },[]);
        // const res =  await axios.get('https://api.spoonacular.com/recipes/random?apiKey=7b1f4ee3530d45dd9f612707cbeb22cf&number=5')
        // const link = res.data.recipes;

   // const value = await axios.get('https://api.spoonacular.com/recipes/random?apiKey=7b1f4ee3530d45dd9f612707cbeb22cf&number=6');
    
  // console.log(link); //.recipes[0].image
    return <div className="top-recipe" >
        <div style={{margin: "0",backgroundImage: {blob}}}>
            <h1 className="text-center" style={{marginTop: "6rem", paddingTop: "26px"}}>Top Recipes</h1>
           
        </div>    
        <div className="container-fluid">
            <div className="row" >
                <div className="col-10 mx-auto top-elements" >
                    <div className="row gy-4">

                        
                        {/* <Element key={link[0].index} imgsrc={link[0].image} title={link[0].title} recipe={link[0].sourceUrl} time={link[0].readyInMinutes} />
                        <Element key={link[1].index} imgsrc={link[1].image} title={link[5].title} recipe={link[1].sourceUrl} time={link[1].readyInMinutes} />
                        <Element key={link[2].index} imgsrc={link[2].image} title={link[6].title} recipe={link[2].sourceUrl} time={link[2].readyInMinutes} />
                        <Element key={link[3].index} imgsrc={link[3].image} title={link[7].title} recipe={link[3].sourceUrl} time={link[3].readyInMinutes} />
                        <Element key={link[4].index} imgsrc={link[4].image} title={link[8].title} recipe={link[4].sourceUrl} time={link[4].readyInMinutes} /> */}

                        <Element key={665170} imgsrc={ "https://spoonacular.com/recipeImages/665170-556x370.jpg"} title={"White Chocolate Cherry Hand Pies"} recipe={ "https://www.foodista.com/recipe/T22BGDFV/white-chocolate-cherry-hand-pies"} time={45} />
                        <Element key={634854} imgsrc={"https://spoonacular.com/recipeImages/634854-556x370.jpg"} title={ "Berry Fruit Crumble"} recipe={ "https://www.foodista.com/recipe/67KX7C62/berry-fruit-crumble"} time={45} />
                        <Element key={659180} imgsrc= {"https://spoonacular.com/recipeImages/635552-556x370.jpg"} title={"Blueberry Vanilla Pie"} recipe={ "http://www.foodista.com/recipe/QQC5Y6J8/blueberry-vanilla-pie"} time={55} />
                        <Element key={652750} imgsrc={"https://spoonacular.com/recipeImages/652750-556x370.jpg"} title={"Mussels & Clams in White Wine {Cozze e Vongole}"} recipe={"http://www.foodista.com/recipe/TXM3X2KZ/mussels-clams-in-white-wine-cozze-e-vongole"} time={60} />
                        <Element key={664273} imgsrc={"https://spoonacular.com/recipeImages/664273-556x370.jpg"} title={"Valentine's Day Potted Plant Ice-Cream Desserts"} recipe={"https://www.foodista.com/recipe/2GZ5DQ3F/valentine-s-day-potted-plant-ice-cream-desserts"} time={50} />
                        <Element key={652332} imgsrc={"https://spoonacular.com/recipeImages/652332-556x370.jpg"} title={"Monastery soup"} recipe={"https://www.foodista.com/recipe/Y67R5WMP/monastery-soup"} time={45} />

                        <img src={wave} style={{padding: "0", width: "100%"}}/>
                        {/* <Card /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>



}

export default Top;