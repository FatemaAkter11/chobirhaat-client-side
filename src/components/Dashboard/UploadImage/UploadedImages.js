import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { Link, useHistory } from 'react-router-dom';

const UploadedImages = () => {
    const [uploaded, setUploaded] = useState();
    const history = useHistory();
    const alert = useAlert();
    const email = localStorage.getItem('email');
    useEffect(() => {
        fetch(`https://safe-sea-78341.herokuapp.com/uploadedimages/${email}`)
            .then(res => res.json())
            .then(data => setUploaded(data))
    }, [email])
    const handleClick = id => {
        history.push(`/image/${id}`)
    }
    
    const handleDelete = id => {
        fetch(`https://safe-sea-78341.herokuapp.com/image/${id}`,{
            method: 'DELETE'
        })
        alert.success('Deletion successful');
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }

    return (
        <div className="w-4/5 mx-auto">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {/* image component here */}
                        {
                            (uploaded && uploaded.length !== 0) ? uploaded.map(image => <div key={image._id} className="lg:w-1/4 md:w-1/2 p-2 w-full bg-gray-100 mx-2 py-4 rounded-lg">
                                <div className="block relative h-48 rounded overflow-hidden img-class">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image.imgurl} />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{image.category}</h3>
                                    <h2 onClick={()=> handleClick(image._id)} className="text-gray-900 title-font text-lg font-medium cursor-pointer">{image.title}</h2>
                                    <p style={{height: '50px', overflow: 'hidden', margin: '10px 0px'}}>{image.description.slice(0,200)}...</p>
                                    <div className="mt-2 flex justify-between mx-4">
                                        <div className="text-green-800 font-bold border-2 px-3 py-1 border-green-500 rounded-lg bg-green-200">${image.price}</div>
                                        <button className="bg-red-600 text-white font-semibold px-3 py-1 rounded-lg" onClick={()=> handleDelete(image._id)}>Delete</button>
                                    </div>
                                </div>
                            </div>) : <p className="text-center my-20">You didn't uploaded any images. <Link className="text-indigo-800 font-semibold border-2 p-1 bg-red-300" to="/upload" >Upload now</Link></p>
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UploadedImages;