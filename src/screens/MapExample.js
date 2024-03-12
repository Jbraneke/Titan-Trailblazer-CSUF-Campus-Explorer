import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default function MapExample() {
  const [region, setRegion] = React.useState({
    latitude: 33.8813823,
    longitude: -117.8876867,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
    mapType: 'standard',
  });
  const [markerList, setMarkerList] = React.useState([
    {
      title: 'Current Location',
      latitude: 33.88211269476457, longitude: -117.88153370014227,
      description: 'East Parking Lot'
      
    },
    {
      title: 'Class Location',
      latitude: 33.87972440869617, longitude: -117.88404703665272,
      description: 'Classroom Building 1'
    },
  ]);
  
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{ width: 400, height: 400 }}
      initialRegion={{
        latitude: region.latitude,
        longitude: region.longitude,
        latitudeDelta: region.latitudeDelta,
        longitudeDelta: region.longitudeDelta,
      }}
    >
    {markerList.map((marker, index) => (
      <Marker
        key={index}
        coordinate={{
          latitude: marker.latitude,
          longitude: marker.longitude,
        }}
        title={marker.title}
        description={marker.description}
      />
    ))}
    
    </MapView>
  );
}
