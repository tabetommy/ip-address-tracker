import React, {useState,useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from "leaflet"
import location from './location.svg'
import './Map.css'


function Map({usercoordinates,dataPoints}){
   const [coor,setCoor]=useState([])
   const[loaded,setLoaded]=useState(false)
    
    useEffect(()=>{
      if(Object.keys(dataPoints).length === 0)return
        setCoor([dataPoints.latitude,dataPoints.longitude]);
        setLoaded(true)              
    },[dataPoints])

    const markerIcon= new L.Icon({
        iconUrl:location
    })
    
    return(
            <MapContainer
            key={JSON.stringify(coor)}
                center={!loaded?[usercoordinates.latitude,usercoordinates.longitude]:coor}
                 zoom={15} scrollWheelZoom={true} >
                <TileLayer
                    url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'  
                />
                <Marker 
                position={!loaded?[usercoordinates.latitude,usercoordinates.longitude]:coor}
                icon={markerIcon}
                >
                    <Popup>
                        {dataPoints.region}
                    </Popup>
                </Marker>
            </MapContainer>  
  )}

export default Map