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
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
                        </svg>
                    </button>
                    </div>  
                </div>
            </header>
    )
}

export default Header