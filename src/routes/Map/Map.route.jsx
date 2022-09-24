import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, CircleMarker } from 'react-leaflet'
import "./Map.styles.scss"

const Map = () => {

    useEffect(() => {
        // adding leaflet's css file to the head of our document
        const head = document.head
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = "https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        link.integrity = "sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        link.crossOrigin = ""
        head.appendChild(link)
    })

    return (
        <div class="map">
            <MapContainer center={[14.593819, 120.992302]} zoom={6}>
                <TileLayer
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <CircleMarker
                    center={[7.072316, 125.612838]}
                    radius={50}
                    pathOptions={{ color: '#08228d' }}
                />
                <CircleMarker
                    center={[14.5636328, 120.9946436]}
                    radius={50}
                    pathOptions={{ color: '#467537' }}
                />

            </MapContainer>
        </div>
    );
};

export default Map;
