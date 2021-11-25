import firebase from 'firebase/app';
import React, { useContext, useEffect } from 'react';
import Flip from 'react-reveal/Flip';
import { Link } from 'react-router-dom';
import { ClientContext } from '../../App';
import logo from '../../images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [client, setClient] = useContext(ClientContext);
  useEffect(() => {
    if (localStorage.getItem('uid')) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          fetch(`https://safe-sea-78341.herokuapp.com/user/${user.email}`)
            .then((res) => res.json())
            .then((data) => setClient({
              email: data.email,
              displayName: data.username,
              role: data.role,
              photoURL: data.photoURL
            }));
        }
      });
    }
  }, [setClient])
  return (
    <header className="text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-black">

        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
          <img src={logo} width="80px" alt="chobirhaat logo" />
          <span className="ml-3 text-4xl shadow-2xl text-white" style={{ textShadow: '2px 2px red' }}><Flip right cascade>
            Chobirhaat
          </Flip></span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-purple-800 font-semibold" to="/">Home</Link>
          <Link className="mr-5 hover:text-purple-800 font-semibold" to="/gallery">Gallery</Link>
          <Link className="mr-5 hover:text-purple-800 font-semibold" to="/aboutus">About us</Link>
          <Link className="mr-5 hover:text-purple-800 font-semibold" to="/faq">FAQ</Link>
          <Link className="mr-5 hover:text-purple-800 font-semibold" to="/upload">Upload</Link>
          <Link className="mr-5 hover:text-purple-800 font-semibold" to="/pricing">Pricing</Link>
          <Link className="mr-5 hover:text-purple-800 font-semibold" to="/contactus">Contact Us</Link>
        </nav>
        {
          client ? <Link to="/dashboard">
            <button className="inline-flex items-center hover:bg-purple-500 border-0 py-1 px-3 focus:outline-none bg-purple-700 hover:text-white rounded-lg text-base mt-4 md:mt-0">
              {client.photoURL && <img width="32px" className="rounded-full m-1" src={client.photoURL} alt="" />} {client.displayName}
            </button></Link> : <Link to="/login">
            <button className="inline-flex items-center hover:bg-purple-500 border-0 py-1 px-3 focus:outline-none bg-purple-700 hover:text-white rounded-lg text-base mt-4 md:mt-0">Login
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        }
      </div>
    </header>
  );
};

export default Navbar;