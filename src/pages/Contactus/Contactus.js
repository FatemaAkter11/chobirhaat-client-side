import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { useAlert } from 'react-alert';

const Contactus = () => {
  const alert = useAlert();
    const handlecontact = e => {
        e.preventDefault();
        const date = new Date().toISOString();
        fetch('https://safe-sea-78341.herokuapp.com/contactus', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                date,
                message: e.target.message.value
            })
        })
        .then(res => res.json())
        .then(data => {
        });
            alert.success('Message sent!');
            console.log('Done');
    }
  return (
    <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
      <form onSubmit={handlecontact} className="w-full md:w-3/4 lg:w-1/2 px-10">
        <h1 className="font-bold text-3xl text-center p-2">Contact with us</h1>
        <div className="p-3">
          <input
            className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300  bg-gray-100"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="p-3">
          <input
            className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 bg-gray-100"
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
        </div>
        <div className="p-3">
          <input
            className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 bg-gray-100"
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            required
          />
        </div>
        <div className="p-3">
          <textarea
            className="resize-none rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-40 bg-gray-100"
            placeholder="Message"
            name="message"
            required
          ></textarea>
        </div>
        <div className="p-3 pt-6">
          <button className="w-full bg-purple-700 hover:bg-purple-900 text-white font-bold py-3 px-4 rounded text-xl">
            Send
          </button>
        </div>
      </form>
      <div className="w-full md:w-3/4 lg:w-1/2 px-10">
        <Player
          autoplay
          loop
          src="https://assets8.lottiefiles.com/packages/lf20_bp1bwvhv.json"
        >
        </Player>
      </div>
    </div>
  );
};

export default Contactus;
