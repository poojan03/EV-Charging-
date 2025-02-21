import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { Marker } from 'react-native-maps'
import { SelectMarkerContext } from '../../Context/SelectMarkerContext'

export default function Markers({ index, place}) {

  const {selectedMarker,setSelectedMarker}=useContext(SelectMarkerContext)
  return place&& (
    <Marker coordinate={{latitude:place.location?.latitude,longitude:place.location?.longitude}} onPress={()=>setSelectedMarker(index)}  ></Marker>
  )
}