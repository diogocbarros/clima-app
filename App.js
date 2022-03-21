import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import DataClima from './components/DataClima';


const backgroundImg = require('./assets/image-background.png')

export default function App() {

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.background}>
        <DataClima />
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
