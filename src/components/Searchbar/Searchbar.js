import React from 'react';

const Searchbar = ({handleSearch}) => {
    return (
        <div className="searchbar_custom">
            <form onSubmit={handleSearch} className="absolute right-0 md:w-1/3 sm:w-screen">
            <input type="text" className="p-2 my-4 rounded-md focus:outline-none bg-gray-300 w-2/3" name="search" id="search" placeholder="Search anything" />
            <button className="inline-flex text-white bg-green-500 border-0 mx-3 py-1 px-6 focus:outline-none hover:bg-green-600 rounded text-lg my-5">Search</button>
        </form>
        </div>
    );
};

export default Searchbar;