import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Category = () => {
    const { catid } = useParams();
    const [images, setImages] = useState();
    const history = useHistory();
    useEffect(() => {
        fetch(`https://safe-sea-78341.herokuapp.com/category/${catid}`)
            .then(res => res.json())
            .then(data => setImages(data))
    }, [catid])
    const handleClick = id => {
        history.push(`/image/${id}`)
    }
    return (
        <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {/* image component here */}
                        {
                            images ? images.map(image => <div key={image._id} onClick={()=> handleClick(image._id)} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
                                <div className="block relative h-48 rounded overflow-hidden img-class">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image.imgurl} />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{image.category}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{image.title}</h2>
                                    <p className="mt-1">${image.price}</p>
                                </div>
                            </div>) : <p className="text-center my-20 text-red-600 text-xl font-semibold">No images found in this category / something went wrong!</p>
                        }
                        {/* image component here */}

                    </div>
                </div>
            </section>
    );
};

export default Category;