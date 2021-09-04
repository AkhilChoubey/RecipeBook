import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Wave from 'react-wavify';

const About = () => {
    return <>
    <div style = {{transform: "rotate(180deg)"}}>
    <Wave fill='#f79902'
    paused={false}
    options={{
        height: 20,
        amplitude: 30,
        speed: 0.2,
        points: 4
    }} />
    </div>
    </>
}

export default About;