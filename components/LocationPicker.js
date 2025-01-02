import { View, Text, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import SecondaryButton from './SecondaryButton'
import * as Location from 'expo-location';


import { Colors } from '../constants/Globalcolors'


const LocationPicker = () => {
        const [locationPermissionInformation, requestPermission] = Location.useForegroundPermissions();
        const [isFetchingLocation, setIsFetchingLocation] = useState(false);

    async function verifyLocationPermission(){
          if(locationPermissionInformation.status === Location.PermissionStatus.UNDETERMINED){
              const isPermission =  await requestPermission();
              return isPermission.granted
          }

          if(locationPermissionInformation.status === Location.PermissionStatus.DENIED){
              Alert.alert("Denied location Permission", "You need to accept location permission to continue")
              return false;
          }

          return true;
      }

  async function handleGetLocation(){
      console.log("location button clicked")
      const hasPermission = await verifyLocationPermission();
      console.log(hasPermission);

      if(!hasPermission){
        return;
      }
      setIsFetchingLocation(true)
      const {coords} = await Location.getCurrentPositionAsync();
      setIsFetchingLocation(false)
      console.log(coords);

    //   if(locationObj){
    //     console.log("Coords got", coords)
    //   }else{
    //     console.log("Location not picked")
    //   }

  }

  function handleGetMap(){

  }

   React.useEffect(() => {
          console.log("Fetching locaation Status:", isFetchingLocation);
      }, [isFetchingLocation]);

  return (
    <View>
      <View style={styles.locationContainer}></View>
      <View style={styles.buttonHolder}>
         <View style={styles.buttoncontainer}>
         <SecondaryButton icon="location" onPress={handleGetLocation}>Locate User</SecondaryButton>
         </View>
         <View style={styles.buttoncontainer}>
         <SecondaryButton icon="map" onPress={handleGetMap}>Pick A Location</SecondaryButton>
         </View>
      </View>
    </View>
  )
}

export default LocationPicker

const styles = StyleSheet.create({
    locationContainer: {
      width: "100%",
      height: 200,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor: Colors.primary100,
      marginTop: 18,

    },

    buttoncontainer: {
        flex: 1,
    },

    buttonHolder: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        columnGap: 8,
    }

})