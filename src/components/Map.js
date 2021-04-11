import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import data from '../assets/mapData';

const Map = () => {
    const position = [51.5130972 ,-0.1292559]
    console.log(data)
    return(
      <div>
        <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            data.map((dat) => {
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
