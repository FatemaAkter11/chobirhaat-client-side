import React from 'react';
import { Link } from 'react-router-dom';
import cb from '../../images/contribute.jfif';
import dl from '../../images/download.jfif';
import blog1 from '../../images/blog/blog1.jpg';
import blog2 from '../../images/blog/blog2.jpg';
import blog3 from '../../images/blog/blog3.jpg';
import blog4 from '../../images/blog/blog4.jpg';
import blog5 from '../../images/blog/blog5.jpg';
import Banner from '../Banner/Banner';
import Testimonial from '../Testimonial/Testimonial';
import CardGallery from '../CardGallery/CardGallery';

const Home = () => {
    return (
        <div className="text-center home">
            <Banner></Banner>
            <h1 className="md:text-4xl font-bold text-center m-8 sm:text-2xl text-indigo-700">What do you really want to do?</h1>
            <div className="flex flex-wrap justify-center my-10">
                <div className="border border-dashed w-1/3 rounded-lg p-2 mx-4">
                    <img className="rounded-lg" src={dl} alt="download" />
                    <h4 className="lg:text-xl text-center m-5 text-gray-600 w-4/6 mx-auto">I am here to download free photos and videos.</h4>
                    <Link to="/gallery"><button className="about-btn text-white text-center p-2 mx-auto rounded-full text-3xl hover:bg-blue-900 transition duration-300 ease-in-out flex items-center animate-bounce">I want to download</button></Link>
                </div>
                <div className="border border-dashed w-1/3 rounded-lg p-2">
                    <img className="rounded-lg" src={cb} alt="contribute" />
                    <h4 className="lg:text-xl text-center m-5 text-gray-600 w-4/6 mx-auto">I am here to share my photos and videos with the world.</h4>
                    <Link to="/upload"><button className="about-btn text-white text-center p-2 mx-auto rounded-full text-3xl hover:bg-blue-900 transition duration-300 ease-in-out flex items-center animate-bounce">I want to contribute</button></Link>
                </div>
            </div>
            {/* CardGallery */}
            <CardGallery></CardGallery>

            {/* Testimonial part */}
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;