import React from 'react';
import heroImg from '../../../../images/logos/Frame.png'

const Hero = () => {
    return (
        <div className="row py-5 d-flex align-items-center">
            <div className="col-lg-4 py-5">
                <h1 className="brand-text pb-4" style={{fontWeight: 700, lineHeight: '60px', letterSpacing: "1%"}}>Let’s Grow Your <br/> Brand To The <br/>Next Level</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                <button className="btn brand-btn">Hire us</button>
            </div>
            <div className="col-lg-6 offset-md-1 py-5">
                <img className="img-fluid" src={heroImg} alt=""/>
            </div>
        </div>
    );
};

export default Hero;