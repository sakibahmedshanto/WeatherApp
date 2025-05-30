import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import LocationSearch from './components/LocationSearch';
import getWeatherImage from './utils/getImageForWeather';
import { fetchRealWeather } from './utils/api';

export default function App() {
  const [location, setLocation] = useState('Gazipur');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    try {
      setError(null);
      const data = await fetchRealWeather(city);
      setWeatherData(data);
    } catch (error) {
      setError('Pleease enter a valid location');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeather(location);
  }, []);

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    fetchWeather(newLocation);
  };

  const weatherStatus = weatherData?.weather || 'Clear';
  const backgroundImage = getWeatherImage(weatherStatus);

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <SafeAreaView style={styles.container}>
        {error ? (
          <Text style={styles.error}>{error}</Text>
        ) : (
          <>
            <Text style={styles.location}>{weatherData?.location}</Text>
            <Text style={styles.status}>{weatherData?.weather}</Text>
            <Text style={styles.temp}>{weatherData?.temperature}°C</Text>
          </>
        )}
        <LocationSearch onLocationChange={handleLocationChange} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)', 
    padding: 30,
  },
  location: {
    fontSize: 40,
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
  error: {
    color: 'red',
    fontSize: 28,
    textAlign: 'center',
    margin: 20,
  },
});
