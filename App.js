import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import DataClima from './src/components/DataClima';


const backgroundImg = require('./assets/image-background.png')

export default function App() {

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    console.log('pegando lat e long');
    navigator.geolocation.getCurrentPosition((success) => {
      let { latitude, longitude } = success.coords;
      console.log('chamada api');
      getWeatherData(latitude, longitude)
    }, (err) => {
      console.log(err);
      getWeatherData('40.71', '74.00') // New York Lat Long
    })

  }, [])

  const getWeatherData = async (lat, long) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=daily,hourly,minutely&appid=56bd52bd3cb9ec18bdfdb2d812415e97`)
        .then(res => res.json())
        .then(data => {
          setData(data)
          console.log(data);
        })

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
      console.log('finalizado');
    }
  }


  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.background}>
        {isLoading ? <ActivityIndicator size={'large'} color={'black'} />
          : <DataClima current={data.current} lat={data.lat} lon={data.lon} timezone={data.timezone} />}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
});
