import React from "react";
import Carousel from "react-material-ui-carousel";
// import Carousel from "react-elastic-carousel";
import { Paper } from "@material-ui/core";

const Slider = () => {
  return (
    <div style={{ background: "white" }}>
      {" "}
      <Carousel navButtonsAlwaysVisible="true" interval="5000">
        <Paper>
          <div className="slider-div">
            <h2 className="slider-quote">
              "A RECIPE IS A STORY WHICH ENDS WITH A GOOD MEAL"
            </h2>
            <p>-Pat Conroy</p>
          </div>
        </Paper>
        <Paper>
          <div className="slider-div">
            <h2 className="slider-quote">
              "A RECIPE HAS NO SOUL. YOU, AS THE COOK, MUST BRING SOUL TO THE
              RECIPE"
            </h2>
            <p>-Thomas Keeler</p>
          </div>
        </Paper>
        <Paper>
          <div className="slider-div">
            <h2 className="slider-quote">
              "PUT UP A CHAIR. TAKE A TASTE. COME JOIN US. LIFE IS SO ENDLESSLY
              DELICIOUS."
            </h2>
            <p>-Ruth Reichl</p>
          </div>
        </Paper>
      </Carousel>
    </div>
  );
};

export default Slider;
