import React from "react";
import Header from "./components/Header/Header";
import Maps from "./components/Maps/Maps";
import List from "./components/List/List";


function App() {
    return(
    <>
        <Header/>
        
        <div className="grid grid-cols-3 grid-rows-1 gap-1">
            <div className="bg-gray-300 col-span-1 h-[100vh]">
                <List/>
            </div>
            <div className="bg-gray-400 col-span-2">
                <Maps/>
            </div>
            
        </div>
    
    </>
    );
}

export default App