import React from "react";

function PlaceDetails({place}){
    return(
        <h1 className="font-bold">{place.name}</h1>
    );
}

export default PlaceDetails