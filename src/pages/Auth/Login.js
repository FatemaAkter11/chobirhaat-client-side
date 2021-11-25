import { Player } from "@lottiefiles/react-lottie-player";
import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
import { useAlert } from 'react-alert';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { ClientContext } from "../../App";
import firebaseConfig from './firebase.config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [client, setClient] = useContext(ClientContext);
  const [newUser, setNewUser] = useState(false)
  const { register, handleSubmit } = useForm();
  const [profileimg, setProfileimg] = useState(false)
  const [profileimgurl, setProfileimgurl] = useState()
  const [error, setError] = useState();
  const alert = useAlert();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  // handle login funciton
  const handleLogin = (data) => {
    if (newUser) {
      // sign up with email and pass 
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        userNameUpdate(data.username)
        setClient({
          email: user.email,
          displayName: data.username,
          role: data.role,
          photoURL: profileimgurl
        })
        uploadUser({email: user.email, role: data.role, uid: user.uid, username: data.username})
        alert.success('Account creation successful!')
        localStorage.setItem('uid', user.uid)
        localStorage.setItem('email', user.email)
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError({
          errorCode,
          errorMessage
        })
      });
    } else {
      // sign in with email and pass
      firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          setError()
          localStorage.setItem('uid', user.uid)
          localStorage.setItem('email', user.email)
          setClient({
            ...client,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
          })
          alert.success('Account login successful!')
          history.replace(from)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError({
            errorCode,
            errorMessage
          })
        });
    }

    //updating display name
    const userNameUpdate = (username) => {
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: username,
        photoURL: profileimgurl
      }).then(function () {
        // Update successful.
      }).catch(function (error) {
        // An error happened.
      });
    }

    // uploading user data to database
    const uploadUser = data => {
      const uploadData = {
        ...data, photoURL: profileimgurl
      }
      fetch(`https://safe-sea-78341.herokuapp.com/createuser`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(uploadData)
    })
        .then(res => res.json())
        .then(data => alert.success('Account created successfully!'))
    }
  }
  
  //handle profile pic
  const handleProfilepic = e => {
    setProfileimg(false);
    const imgData = new FormData();
        imgData.set('key', 'ab15cb9c3a7fddeb3e1a9653c74d0534')
        imgData.append('image', e.target.files[0]);

        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: imgData
        })
            .then(res => res.json())
            .then(data => {
                setProfileimgurl(data.data.url)
                alert.success('Profile picture set !')
                setProfileimg(true)
            }) // geting response from image server
  }
  return (
    <div className="bg-gray-100 container mx-auto flex px-5 md:flex-row flex-col items-center">
      <div className="w-full md:w-3/4 lg:w-1/2 px-10">
        <Player
          autoplay
          loop
          src="https://assets8.lottiefiles.com/packages/lf20_q5pk6p1k.json"
        >
        </Player>
      </div>
      <div className="min-h-screen w-full md:w-3/4 lg:w-1/2 sm:py-12 mt-5">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-r from-green-300 to-purple-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto text-center">
            <div>
              <h1 className="text-2xl font-semibold">Login Form with <span className="text-gray-300" style={{ textShadow: '1px 2px red' }}>Chobirhaat</span></h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit(handleLogin)} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {
                  newUser && <div className="relative">
                    <input {...register("username")} autoComplete="on" id="username" name="username" type="text" required className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="User name" />
                    <label htmlFor="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">User name</label>
                  </div>
                }
                <div className="relative">
                  <input {...register("email")} autoComplete="on" id="email" name="email" type="email" required className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                </div>
                <div className="relative">
                  <input {...register("password")} autoComplete="on" id="password" name="password" type="password" required className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                  <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                </div>
                {
                  newUser ? <div className="relative">
                    <label htmlFor="profilepic" className="text-sm text-gray-600">Upload image</label>
                    <input onChange={handleProfilepic} type="file" id="profilepic" name="profilepic" placeholder="Select your profile picture" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 p-1 transition-colors duration-200 ease-in-out" required />
                    <h1 className="text-green-600 font-semibold">Select your account type: </h1>
                    <input {...register("role")} type="radio" name="role" id="seller" value="seller" required />
                    <label htmlFor="seller">Seller</label> <br />
                    <input {...register("role")} type="radio" name="role" id="buyer" value="buyer" required />
                    <label htmlFor="buyer">Buyer</label>
                  </div> : ''
                }
                {
                  error ? <div className="text-red-600 font-semibold"> {error.errorCode} : {error.errorMessage} </div> : ''
                }
                <div className="relative">
                  <input type="checkbox" name="old" id="old" />
                  <label htmlFor="old" onClick={() => setNewUser(!newUser)} className="text-purple-500 font-medium cursor-pointer"> I am new here</label>
                </div>
                <div className="relative">
                  {
                    newUser ? (profileimg ? <button className="bg-purple-500 text-white rounded-md px-2 py-1">Sign Up</button>  : <button disabled="disabled" className="bg-gray-500 text-white rounded-md px-2 py-1 cursor-not-allowed">Sign Up</button>) : <button className="bg-purple-500 text-white rounded-md px-2 py-1">Sign In</button>
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;