import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const coordinates = [19.0760, 72.8777];

function MyComponent() {
    const map = useMap();

    useEffect(() => {
        const onMoveEnd = () => {
            const bounds = map.getBounds();
            console.log(bounds);
        };

        if (map) {
            map.on('moveend', onMoveEnd);
        }

        return () => {
            if (map) {
                map.off('moveend', onMoveEnd);
            }
        };
    }, [map]);

    return null;
}

function Maps() {
    return (
        <MapContainer center={coordinates} zoom={13} style={{ height: '100%', width: '100%' }}>
            <MyComponent />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={coordinates}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Maps;
