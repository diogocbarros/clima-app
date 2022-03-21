import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const ClimaItens = ({ title, value, unit }) => {
  return (
    <View style={styles.climaItens}>
      <Text style={styles.climaTextItens}>{title}</Text>
      <Text style={styles.climaTextItens}>{value}{unit}</Text>
    </View>
  )
}

const DataClima = () => {

  const [horaCorrente, setHoraCorrente] = useState(moment().format('H:MM a'));
  const dataCorrente = moment().format('dddd[,] DD MMMM');

  // useEffect(() => {
  //   setInterval(() => {
  //     setHoraCorrente(moment().format('H:MM a'))
  //   }, 60000);
  // }, []);

  useEffect(() => {
    setHoraCorrente(moment().format('H:MM a'))
    return () => {
    }
  }, [])


  return (
    <View style={styles.container}>
      <View>
        <View >
          <Text style={styles.heading}>{horaCorrente} </Text>
        </View>
        <View>
          <Text style={styles.subHeading}>{dataCorrente}</Text>
        </View>
        <View style={styles.climaContainer}>
          <ClimaItens title='Humidade' value='85' unit='%' />
          <ClimaItens title='Pressao' value='10' unit='lb' />
          <ClimaItens title='Vento' value='25' unit='km' />
          <ClimaItens title='Sunrise' value='06:03' unit='am' />
          <ClimaItens title='Sunset' value='18:15' unit='pm' />
        </View>
      </View>
      <View style={styles.rAlign}>
        <Text style={styles.timezone}>Cuiaba/Brasil</Text>
        <Text style={styles.latlong}>4.22N 50.05E</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10

  },
  heading: {
    fontSize: 45,
    color: "#F8F8FF",
    fontWeight: '100'
  },
  subHeading: {
    fontSize: 20,
    color: "#F8F8FF",
    fontWeight: '300'
  },
  latlong: {
    fontSize: 16,
    fontWeight: '700',
    color: "#F8F8FF"
  },
  timezone: {
    fontSize: 20,
    color: "#F8F8FF",
  },
  rAlign: {
    textAlign: 'right',
    marginTop: 20,
    marginRight: 10

  },
  climaContainer: {
    backgroundColor: '#18181b99',
    borderRadius: 10,
    padding: 10,
    marginTop: 10

  },
  climaItens: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  climaTextItens: {
    color: "#F8F8FF",
    fontSize: 10,
    fontWeight: '100',
    opacity: 0.3
  }
});

export default DataClima