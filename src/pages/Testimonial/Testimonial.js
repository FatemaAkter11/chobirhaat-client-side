import React from 'react';
import user1 from '../../images/user-1.png';
import user2 from '../../images/user-2.png';
import user3 from '../../images/user-3.jpg';
import './Testimonial.css';

const Testimonial = () => {

    return (
        <section>
            <div className="container mx-auto p-10">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Happy <span className="text font-bold">Clients says</span></h1>
                    <span className="inline-flex h-1 w-40 rounded bg-indigo-500 mt-2"></span>
                </div>

                <div className="flex p-5">
                    <div className="h-full text-center p-5 bg-gray-300 hover:bg-green-500 rounded-2xl">
                        <img className="h-24 w-24 object-cover rounded-full inline-block border-2 border-gray-700 bg-opacity-10 items-center justify-center" src={user1} alt="user" />
                        <svg viewBox="0 -3 100 106" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block text-yellow-300 w-5 h-5">
                            <path d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"></path>
                        </svg>
                        <p className="leading-relaxed">We had a great experience at this photo dealership when purchasing our new minivan! The staff was knowledgeable and helpful.</p>
                        <span className="inline-flex h-1 w-14 rounded bg-indigo-500 mt-4 mb-2"></span>
                        <div className="text-center">
                            <i className="fas fa-star filled-star"></i>
                            <i className="fas fa-star filled-star"></i>
                            <i className="fas fa-star filled-star"></i>
                            <i className="fas fa-star filled-star"></i>
                            <i className="far fa-star empty-star"></i>
                        </div>
                        <h2 className="title-font font-medium text-sm tracking-wider">Henry Miles</h2>
                        <p className="text-gray-500">Senior Photographer</p>
                    </div>
                    <div className="h-full text-center ml-3 p-5 bg-gray-300 hover:bg-green-500 rounded-2xl">
                        <img className="h-24 w-24 object-cover rounded-full inline-block border-2 border-gray-700 bg-opacity-10 items-center justify-center" src={user2} alt="user" />
                        <svg viewBox="0 -3 100 106" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block text-yellow-300 w-5 h-5">
                            <path d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"></path>
                        </svg>
                        <p className="leading-relaxed">The service I receive on my photo here is the best! I feel like the mean well. Thank you so taking the time to inspect my photo.</p>
                        <span className="inline-flex h-1 w-14 rounded bg-indigo-500 mt-4 mb-2"></span>
                        <div className="text-center">
                            <i className="fas fa-star filled-star"></i>
                            <i className="fas fa-star filled-star"></i>
                            <i className="fas fa-star filled-star"></i>
                            <i className="fas fa-star filled-star"></i>
                            <i className="far fa-star empty-star"></i>
                        </div>
                        <h2 className="title-font font-medium text-sm tracking-wider">Regina Miles</h2>
                        <p className="text-gray-500">Photo Designer</p>
                    </div>
                    <div className="h-full text-center ml-3 p-5 bg-gray-300 hover:bg-green-500 rounded-2xl">
                        <img className="h-24 w-24 object-cover rounded-full inline-block border-2 border-gray-700 bg-opacity-10 items-center justify-center" src={user3} alt="user" />
                        <svg viewBox="0 -3 100 106" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block text-yellow-300 w-5 h-5">
                            <path d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"></path>
                        </svg>
                        <p className="leading-relaxed">I purchased the photo with your company. This photo is
                            absolutely wonderful. And the service timing was very great.</p>
                        <span className="inline-flex h-1 w-14 rounded bg-indigo-500 mt-4 mb-2"></span>

                        <div className="text-center">
                            <i className="fas fa-star filled-star"></i>
                            <i className="fas fa-star filled-star"></i>
                            <i className="fas fa-star filled-star"></i>
                            <i className="fas fa-star filled-star"></i>
                            <i className="far fa-star empty-star"></i>
                        </div>
                        <h2 className="title-font font-medium text-sm tracking-wider">Evelyn Miles</h2>
                        <p className="text-gray-500">Junior Photographer</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Testimonial;