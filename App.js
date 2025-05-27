import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import LocationSearch from './components/LocationSearch';
import getWeatherImage from './utils/getImageForWeather';

export default function App() {
  const [location, setLocation] = useState('Gazipur');

  const weatherStatus = 'Clear';

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  const backgroundImage = getWeatherImage(weatherStatus);

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.status}>{weatherStatus}</Text>
        <Text style={styles.temp}>30°C</Text>
        <LocationSearch onLocationChange={handleLocationChange} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)', 
    padding: 16,
  },
  location: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  status: {
    fontSize: 20,
    color: '#333',
    marginBottom: 8,
  },
  temp: {
    fontSize: 24,
    color: '#000',
    marginBottom: 20,
  },
});
