import React, { useState } from "react";
import PlaceDetails from '../PlaceDetails/PlaceDetails'
function List() {
    const [type, setType] = useState('restaurants');
    const [rate, setRate] = useState(0);
    const places = [{name :'Leaft village'},{name :'Leaft village'},{name :'Leaft village'},{name :'Leaft village'}];

    return (
        <div >
            <div className="flex">
                <form>
                    <label>Type</label>
                    <select value={type} onChange={(e) => {setType(e.target.value)}}>
                        <option value='restaurants'>Restaurants</option>
                        <option value='hotels'>Hotels</option>
                        <option value='attractions'>Attractions</option>
                    </select>
                </form>
                <form>
                    <label>Rating</label>
                    <select value={rate} onChange={(e) => {setRate(e.target.value)}}>
                        <option value={0}>All</option>
                        <option value={3}>Above 3.0</option>
                        <option value={4}>Above 4.0</option>
                        <option value={4.5}>Above 4.5</option>
                    </select>
                </form>
            </div>
            <div>
                {places?.map((place,i) => (
                    <div key = {i}>
                        <PlaceDetails place={place}/>
                    </div>
                ))}
            </div>
        </div>
        

        
    );
}

export default List;
