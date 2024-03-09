import React from "react";

function Header(){
    return(
        <header className="bg-gray-800 flex justify-between p-4">
                <div className="flex items-center">
                    <h1 className="text-xl font-bold text-white">Travel Advisor</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">Home</a>
                    <a href="#" className="text-white hover:text-gray-300">Places</a>
                    <a href="#" className="text-white hover:text-gray-300">Bookings</a>
                    <a href="#" className="text-white hover:text-gray-300">Offers</a>
                    <div className="relative">
                    <input type="text" className="rounded-md pl-8 py-2 focus:outline-none focus:ring focus:ring-white focus:ring-opacity-50 bg-gray-700 text-white w-60" placeholder="Search" />
                    <button type="button" className="absolute top-0 right-0 rounded-md px-2 py-2 bg-gray-700 hover:bg-gray-600 text-white">
                    </button>
                    </div>  
                </div>
            </header>
    )
}

export default Header