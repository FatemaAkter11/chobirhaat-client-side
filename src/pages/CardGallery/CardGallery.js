import React from 'react';

const CardGallery = () => {
    return (
        <div className="card">
            <section className="md:h-full flex items-center text-gray-600">
                <div className="container px-5 py-24 mx-auto card-body">
                    <div className="text-center mb-12">
                        <h1 className="text-2xl md:text-3xl  text-indigo-700  font-semibold">See Our Recent Photos</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 sm:w-1/2 lg:w-1/3 hover:bg-blue-900 transition ease-in duration-700 flex items-center">
                            <img className="lg:h-72 md:h-48 w-full object-cover object-center "
                                src="https://picsum.photos/id/188/720/400" alt="blog" />
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 hover:bg-blue-900 transition ease-in duration-700 flex items-center">
                            <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                src="https://picsum.photos/id/1016/720/400" alt="blog" />
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 hover:bg-blue-900 transition ease-in duration-700 flex items-center">
                            <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                src="https://picsum.photos/id/1023/367/267" alt="blog" />
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 hover:bg-blue-900 transition ease-in duration-700 flex items-center ">
                            <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                src="https://picsum.photos/200" alt="blog" />
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 hover:bg-blue-900 transition ease-in duration-700 flex items-center ">
                            <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                src="https://picsum.photos/200/300" alt="blog" />
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 hover:bg-blue-900 transition ease-in duration-700 flex items-center ">
                            <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                src="https://picsum.photos/id/1013/4256/2832" alt="blog" />
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 hover:bg-blue-900 transition ease-in duration-700 flex items-center ">
                            <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                src="https://picsum.photos/id/102/367/267" alt="blog" />
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 hover:bg-blue-900 transition ease-in duration-700 flex items-center ">
                            <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                src="https://picsum.photos/id/1011/367/267" alt="blog" />
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 hover:bg-blue-900 transition ease-in duration-700 flex items-center ">
                            <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                src="https://picsum.photos/id/1004/367/267" alt="blog" />
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 hover:bg-blue-900 transition ease-in duration-700 flex items-center ">
                            <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                src="https://picsum.photos/id/1003/367/267" alt="blog" />
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 hover:bg-blue-900 transition ease-in duration-700 flex items-center ">
                            <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                src="https://picsum.photos/id/0/367/267" alt="blog" />
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 hover:bg-blue-900 transition ease-in duration-700 flex items-center ">
                            <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                src="https://picsum.photos/id/1010/367/267" alt="blog" />
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 hover:bg-blue-900 transition ease-in duration-700 flex items-center ">
                            <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                src="https://picsum.photos/id/1015/6000/4000" alt="blog" />
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 hover:bg-blue-900 transition ease-in duration-700 flex items-center ">
                            <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                src="https://picsum.photos/id/1023/3955/2094" alt="blog" />
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 hover:bg-blue-900 transition ease-in duration-700 flex items-center ">
                            <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                src="https://picsum.photos/id/1024/1920/1280" alt="blog" />
                        </div>
                    </div>
                </div>
            </section >
        </div>
    );
};

export default CardGallery;