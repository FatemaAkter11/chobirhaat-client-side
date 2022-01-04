import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="text-white body-font bg-black">
      <div className="container px-32 py-10 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10 text-center">
              <li className="my-5 hover:text-purple-600">
                Contact Us<br />+8801234567890
              </li>
              <li className="my-5 hover:text-purple-600">
                Email<br /> help@chobirhaat.com
              </li>
              <li className="my-5 hover:text-purple-600">
                Address<br />Dhaka, Bangladesh
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10 text-center">
              <li className="mb-10 mt-5 hover:text-green-600">
                Our Resources
              </li>
              <li className="hover:text-purple-600">
                Tools
              </li>
              <li className="hover:text-purple-600">
                Tuitorial
              </li>
              <li className="hover:text-purple-600">
                Help Desk
              </li>
              <li className="hover:text-purple-600">
                Opportunities
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10 text-center">
            <li className="mb-10 mt-5 hover:text-green-600">
                About us
              </li>
              <li className="hover:text-purple-600">
                How it work
              </li>
              <li className="hover:text-purple-600">
                Our objectives
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10 text-center">
              <li className="hover:text-purple-600 my-10">
                <p>We provide a common field for buyer and seller so that they can interact with each other easily. <br /> This benifites everyone</p>
              </li>
              <li className="hover:text-purple-800">
                <p>All rights researved to chobirhaat</p>
              </li>
              <li className="my-5">
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link to="/" className="text-gray-500 hover:text-white" href="/#">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </Link>
      <Link to="/" className="ml-3 text-gray-500 hover:text-white" href="/#">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </Link>
      <Link to="/" className="ml-3 text-gray-500 hover:text-white" href="/#">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </Link>
      <Link to="/" className="ml-3 text-gray-500 hover:text-white" href="/#">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="3" stroke="none"></circle>
        </svg>
      </Link>
    </span>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;
