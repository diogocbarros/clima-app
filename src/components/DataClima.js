import moment from 'moment-timezone';
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

const DataClima = ({ current, lat, lon, timezone }) => {

  const [horaCorrente, setHoraCorrente] = useState(moment().format('H:MM a'));
  const dataCorrente = moment().format('dddd[,] DD MMMM');

  useEffect(() => {
    console.log(current, lat, lon, timezone);
    setHoraCorrente(moment().format('H:MM a'))
    return () => {
    }
  }, [])

  return (
    <>
      <View style={styles.container}>
        <View >
          <Text style={styles.heading}>{horaCorrente} </Text>
          <Text style={styles.sub_heading}>{dataCorrente}</Text>
          <View style={styles.latlong}>
            <Text>{timezone}</Text>
            <Text>{lat}N   {lon}W</Text>
          </View>
        </View>
      </View>
      <View style={styles.climaContainer}>
        <ClimaItens title='Humidade' value={current ? current.humidity : ""} unit='%' />
        <ClimaItens title='Pressao' value={current ? current.pressure : ""} unit='lb' />
        <ClimaItens title='Vento' value={current ? current.wind_speed : ""} unit='km' />
        <ClimaItens title='Sunrise' value={current ? moment.tz(current.sunrise * 1000, timezone).format("HH:mm") : ""} unit='am' />
        <ClimaItens title='Sunset' value={current ? moment.tz(current.sunset * 1000, timezone).format("HH:mm") : ""} unit='pm' />
      </View>
      <View style={styles.nda}></View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  heading: {
    flex: 1,
    fontSize: 60,
    color: "#F8F8FF",
    fontWeight: '600',
    paddingBottom: 10

  },
  sub_heading: {
    flex: 1,
    fontSize: 20,
    color: "#F8F8FF",
    fontWeight: '300',
    textAlign: 'center',
    paddingBottom: 10
  },

  climaContainer: {
    backgroundColor: '#18181b99',
    borderRadius: 10,
    padding: 10
  }
  ,
  climaItens: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  climaTextItens: {
    color: "#F8F8FF",
    opacity: 0.3
  },
  latlong: {
    flex: 1,
    textAlign: 'center',
    paddingBottom: 10
  },
  nda: {
    flex: 1
  }

})
//   return (
//     <View style={styles.container}>
//       <View>
//         <View >
//           <Text style={styles.heading}>{horaCorrente} </Text>
//         </View>
//         <View>
//           <Text style={styles.subHeading}>{dataCorrente}</Text>
//         </View>
//         <View style={styles.climaContainer}>
//           <ClimaItens title='Humidade' value='85' unit='%' />
//           <ClimaItens title='Pressao' value='10' unit='lb' />
//           <ClimaItens title='Vento' value='25' unit='km' />
//           <ClimaItens title='Sunrise' value='06:03' unit='am' />
//           <ClimaItens title='Sunset' value='18:15' unit='pm' />
//         </View>
//       </View>
//       <View style={styles.rAlign}>
//         <Text style={styles.timezone}>Cuiaba/Brasil</Text>
//         <Text style={styles.latlong}>4.22N 50.05E</Text>
//       </View>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginLeft: 10

//   },
//   heading: {
//     flex: 1,
//     flexDirection: 'column',
//     fontSize: 45,
//     color: "#F8F8FF",
//     fontWeight: '100'
//   },
//   subHeading: {
//     flex: 1,
//     flexDirection: 'row',
//     fontSize: 20,
//     color: "#F8F8FF",
//     fontWeight: '300'
//   },
//   latlong: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: "#F8F8FF"
//   },
//   timezone: {
//     fontSize: 20,
//     color: "#F8F8FF",
//   },
//   rAlign: {
//     flex: 1,
//     // textAlign: 'right',
//     marginTop: 20,
//     marginRight: 10

//   },
//   climaContainer: {
//     backgroundColor: '#18181b99',
//     borderRadius: 10,
//     padding: 10,
//     marginTop: 10

//   },
//   climaItens: {
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   },
//   climaTextItens: {
//     color: "#F8F8FF",
//     fontSize: 10,
//     fontWeight: '100',
//     opacity: 0.3
//   }
// });

export default DataClima