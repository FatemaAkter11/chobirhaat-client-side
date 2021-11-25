import saveAs from 'file-saver';
import firebase from 'firebase/app';
import React, { useContext, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { ClientContext } from '../../App';
import Spinner from '../../components/Spinner/Spinner';

const SingleImgPage = () => {
    const [client] = useContext(ClientContext);
    const { imgid } = useParams();
    const [reload, setReload] = useState(false)
    const alert = useAlert();
    const [user, setUser] = useState()
    const [image, setImage] = useState('loading');
    const [trxid, setTrxid] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
         setUser(user.displayName)
          // ...
        } else {
          setUser()
        }
      });

    useEffect(() => {
        fetch(`https://safe-sea-78341.herokuapp.com/image/${imgid}`)
            .then(res => res.json())
            .then(data => {setImage(data)})
    }, [imgid])

    const handlePayment = data => {
        const paymentInfo = {
            ...data, status: 'pending', buyer: client.displayName, buyeremail: client.email
        }
        fetch(`https://safe-sea-78341.herokuapp.com/image/${imgid}`, {
            method: 'PATCH',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(paymentInfo)
        })
        .then(res => res.json())
        .then(data => {})
        alert.success('Your request in process. Please wait.');
    }

    const addComment = e => {
        e.preventDefault();
        const comment = {
            comment: e.target.comment.value, name: user
        }
        image.comments.push(comment);
        setReload(!reload)
        fetch(`https://safe-sea-78341.herokuapp.com/comment/${imgid}`, {
            method: 'PATCH',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(image.comments)
        })
        .then(res => res.json())
        alert.success('Comment added');
    }

    const handleDownload = () => {
        saveAs(image.imgurl, `${image.title}.jpg`);
        alert.success('Saving image.');
    }
    return (
        <section className="text-gray-600 body-font">
            {
                image === 'loading' ? <div className="text-center"><Spinner /></div> :
                client ? <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center lg:w-5/6 sm:w-screen">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0 img-class">
                        <img className="object-cover object-center rounded" alt="hero" src={image.imgurl} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-2 py-2 font-medium text-gray-900 border-b-2 border-dotted border-gray-300 w-full">{image.title}</h1>
                        <h5>Published on : {image.published.date} {image.published.month} {image.published.year}</h5>
                        <h3>Category: <span className="text-gray-700 font-semibold">{image.category}</span></h3>
                        <h4>By <span className="font-semibold text-gray-500 italic">{image.seller}</span></h4>
                        <p className="font-semibold text-green-600 text-xl">${image.price}</p>
                        <p className="my-3">
                            Status:
                            {image.status === 'available' && <span className="font-semibold text-green-700 ml-2">Available</span>}
                            {image.status === 'pending' && <span className="font-semibold text-yellow-700 ml-2">In process</span>}
                            {image.status === 'sold' && <span><span className="font-bold text-red-700 border-2 border-dashed border-yellow-600 px-3 py-1 ml-2">Sold</span> by <span className="italic text-green-600 font-semibold">{image.buyer}</span></span>}
                        </p>
                        <p className="mb-8 leading-relaxed">{image.description}</p>
                        {
                            image.status === 'available' && <button onClick={() => setTrxid(!trxid)} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Buy now</button>
                        }
                        {
                            image.status === 'pending' && <button disabled="disabled" className="inline-flex text-white bg-yellow-700 border-0 py-2 px-6 focus:outline-none rounded text-lg cursor-wait">Pending request</button>
                        }
                        {
                            image.status === 'sold' && image.buyeremail !== client.email && <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">SOLD</button>
                        }
                        {
                            image.status === 'sold' && image.buyeremail === client.email && <button onClick={handleDownload} className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Download</button>
                        }
                        {
                            trxid && <div className="w-full">
                                <form onSubmit={handleSubmit(handlePayment)} className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Enter bkash transaction id</label>
                                    <input {...register("trxid", { required: true, minLength: 11 })} type="text" id="trxid" name="trxid" placeholder="Enter a trxid" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                    {errors.trxid && <div className="text-red-600 font-semibold">*Trxid must me 11 digit or more</div>}
                                    { errors.trxid ? <button disabled="disabled" className="inline-flex text-white  bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg my-5 cursor-not-allowed">Submit</button> : <button className="inline-flex text-white  bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg my-5">Submit</button> }
                                </form>
                            </div>
                        }
                    </div>
                </div> : ''
            }
            <div className="w-1/2 mx-auto">
                {
                    image && client && image.comments ? image.comments.map(comment =>
                        <div key={comment.comment + Math.random().toFixed(2)} className="bg-purple-100 p-3 rounded-lg my-5">
                            <h1 className="text-purple-700 text-lg font-medium">{comment.name}</h1>
                            <p>{comment.comment}</p>
                        </div>) : ''
                }
                {
                    image && client && <>
                    <h1 className="font-semibold text-xl">Comments</h1>
                    <form onSubmit={addComment} className="relative">
                    <label htmlFor="comment" className="leading-7 text-sm text-gray-600">Add a comment</label>
                    <input required type="text" id="comment" name="comment" placeholder="Write a comment..." className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <button type="submit" className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg my-5">Comment</button>
                </form>
                    </>
                }
            </div>
        </section>
    );
};

export default SingleImgPage;