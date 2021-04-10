import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import data from '../assets/mapData';

const Map = () => {
    const position = [51.5130972 ,-0.1292559]
    console.log(data)
    // set central london as a the center position
    return(
      <div>
      <MapContainer center={position} zoom={14} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        {
        data.map((dat) => {
            console.log(dat.lat ,dat.lng)
        return (
            <Marker position={[dat.lat ,dat.lng]}>
            <Popup>
               lat: {dat.lat} <br /> lng: {dat.lng}
            </Popup>
            </Marker> 
        )
        })
        }
      </MapContainer>
      </div>
    )
}

export default Map
