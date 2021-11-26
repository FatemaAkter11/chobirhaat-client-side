import firebase from 'firebase/app';
import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const UploadImage = () => {
    const [imgurl, setImgurl] = useState('');
    const { register, handleSubmit } = useForm();
    const alert = useAlert();
    const history = useHistory()

    const time = new Date();
    const date = time.getDate()
    const month = time.toLocaleString('default', { month: 'long' })
    const year = time.getFullYear()

    const [user, setUser] = useState()

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setUser(user)
            // ...
        } else {
            setUser()
        }
    });

    const handleFileupload = e => {
        const imgData = new FormData();
        imgData.set('key', 'ab15cb9c3a7fddeb3e1a9653c74d0534')
        imgData.append('image', e.target.files[0]);

        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: imgData
        })
            .then(res => res.json())
            .then(data => {
                setImgurl(data.data.url)
                alert.success('Image upload to server !')
            }) // geting response from image server
    }
    const handleUpload = (data) => {
        if (imgurl === '') {
            setImgurl(data.imgurl)
        }
        const imageData = {
            ...data,
            views: 0,
            comments: [],
            published: { date, month, year },
            shared: 0,
            imgurl,
            status: 'available',
            seller: user.displayName,
            selleremail: user.email,
            buyer: '',
            buyeremail: '',
            trxid: ''
        }

        fetch(`https://safe-sea-78341.herokuapp.com/uploadimg`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(imageData)
        })
            .then(res => res.json())
            .then(data => {})
            alert.success('Image added to gallery !')
            history.push('/gallery')
    }
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container p-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Upload your image to sell</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Sell to earn money</p>
                </div>
                <form onSubmit={handleSubmit(handleUpload)} className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Image title</label>
                                <input {...register("title")} type="text" id="title" name="title" placeholder="Enter a title for your image" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                            </div>
                        </div>
                        <div className="p-2 w-1/2 flex items-center">
                            <span className="mr-3">Select category</span>
                            <div className="relative">
                                <select {...register("category")} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                    <option>Natural</option>
                                    <option>Flower</option>
                                    <option>Child</option>
                                    <option>Historical-place</option>
                                    <option>Landscape</option>
                                    <option>River-Sea</option>
                                </select>
                                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="imgurl" className="leading-7 text-sm text-gray-600">Upload image</label>
                                <input onChange={handleFileupload} type="file" id="imgurl" name="imgurl" placeholder="Enter category of your image" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                            </div>
                        </div>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="price" className="leading-7 text-sm text-gray-600">Price</label>
                                <input {...register("price")} type="number" id="price" name="price" placeholder="Enter a price for your picture" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                            </div>
                        </div>

                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="description" className="leading-7 text-sm text-gray-600">Description</label>
                                <textarea {...register("description")} id="description" name="description" placeholder="Describe about your image so that people can interested on your image" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required />
                            </div>
                        </div>
                        {
                            imgurl ? <div className="p-2 w-full">
                                <button className="flex justify-center mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Upload</button>
                            </div> :
                                <div className="p-2 w-full">
                                    <p className="flex justify-center mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Waiting for image hosting server response . . .</p>
                                </div>
                        }
                    </div>
                </form>
            </div>
        </section>
    );
};

export default UploadImage;