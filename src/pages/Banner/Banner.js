import React from 'react';
import './Banner.css';
import banner from '../../images/banner.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row flex banner items-center justify-items-center">

                    <div className="col-md-5 p-4">
                        <h1 className="title ">
                            YOUR PHOTOGRAPHY PHOTOS, <br /> OUR FIRST PRIORITY
                        </h1>
                        <p className=" text-center mt-3">
                            Chobirhaat is a vital for photographer’s to share their photos and harness the power of social media for online marketing.
                        </p>
                        <Link to="/aboutus"><button className="mt-3 about-btn hover:bg-blue-900">About Us</button></Link>
                    </div>
                    <div className="col-md-7">
                        <div className="logo-img">
                            <img className="w-75" src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;