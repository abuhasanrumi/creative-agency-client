import React from 'react';
import BrandArea from '../BrandArea/BrandArea';
import Contact from '../Contact/Contact';
import Hero from '../Header/Hero/Hero';
import Navbar from '../Header/Navbar/Navbar';
import ReviewArea from '../ReviewArea/ReviewArea';
import ServiceArea from '../ServiceArea/ServiceArea';
import SliderArea from '../SliderArea/SliderArea';
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="header-bg">
                <div className="container">
                    <Navbar></Navbar>
                    <Hero></Hero>
                </div>
            </div>
            <div className="container">
                <BrandArea></BrandArea>
                <ServiceArea></ServiceArea>
            </div>
            <div className="" style={{backgroundColor: '#111430'}}>
                <SliderArea></SliderArea>
            </div>
            <div className="container">
                <ReviewArea></ReviewArea>
            </div>
            <div className="" style={{backgroundColor: '#FBD062'}}>
                <Contact></Contact>
            </div>
        </>
    );
};

export default Home;