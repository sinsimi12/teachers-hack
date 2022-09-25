import React, { useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker } from 'react-leaflet'
import "./Map.styles.scss"
import { schools } from "./Schools"

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

    const markers = schools.map((school) =>
        <CircleMarker
            key={school.key}
            center={school.center}
            radius={school.radius}
            pathOptions={{ color: school.color }}
        />
    )

    const legendBlock = schools.map((school) =>
        <div className="legend-block" style={{ backgroundColor: school.color }}></div>
    )

    return (
        <div class="map">
            <MapContainer center={[14.593819, 120.992302]} zoom={6}>
                <TileLayer
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers}
            </MapContainer>
            <div className="legend">
                <div className="legend-scale">
                    {legendBlock}
                </div>
                <div className="legend-label">
                    <div className="legend-max">More overworked</div>
                    <div className="legend-min">Less overworked</div>
                </div>
            </div>
        </div>
    );
};

export default Map;
