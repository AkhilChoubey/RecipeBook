import React from "react";
import  Carousel  from "react-material-ui-carousel";
// import Carousel from "react-elastic-carousel";
import { Paper, Button } from "@material-ui/core";



 const Slider = () => {
 

    return  <Carousel navButtonsAlwaysVisible="true" animation="slide" interval="5000" >
      {/* {
        items.map((items, i) => {
          <Item key={i} item={items} />
        })
      } */}
      
      <Paper>
      <div style={{height: "20rem" , background: "#4e4c4c" ,textAlign: "center", color: "white"}}>
      <h2>Akhil</h2>
      <p>"hello  this is akhil from rehla"</p>
      
      </div>
    </Paper>
    
    <Paper>
    <div style={{height: "20rem", background: "#4e4c4c",textAlign: "center", color: "white"}}>
      <h2>aaaaa</h2>
      <p>"hello  this is akhil from rehla"</p>
      
      </div>
    </Paper>
    <Paper>
    <div style={{height: "20rem", background: "#4e4c4c",textAlign: "center", color: "white"}}>
      <h2>cccc</h2>
      <p>"hello  this is akhil from rehla"</p>
      
      </div>
    </Paper>
    </Carousel>
 };

export default Slider;