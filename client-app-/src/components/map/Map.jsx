import React from 'react'

import { MapContainer, TileLayer } from 'react-leaflet'
import Pin from '../pin/Pin';
import "leaflet/dist/leaflet.css";
import './map.scss'

function Map({places}) {

  return (
    <MapContainer center={[52.4797, -1.90269]} zoom={7} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {places.map(item=>(
      <Pin item={item} key={item.id}/>
    ))}
  </MapContainer>
  )
}


export default Map;