import React from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import IconMap from '../iconMap/IconMap'
import './Maps.css'
import 'leaflet/dist/leaflet.css'


const Maps = ({ station }) => {
    const latitude = station.Latitud.replace(',', '.')
    const longitude = station.Longitud_WGS84.replace(',', '.')
    const urlPartOne = 'https://maps.google.com/?q='

    const google = `${urlPartOne}${latitude},${longitude}`

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <MapContainer id="map" center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[latitude, longitude]} icon={IconMap} />
                </MapContainer>
            </div>
            <a className='btn btn-success my-3 col-12' href={google} target="_blank" rel="noreferrer">
                <i className="bi bi-geo-fill"></i> Como llegar
            </a>
        </div>
    )
}

export default Maps;