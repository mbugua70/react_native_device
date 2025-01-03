import { View, Text, StyleSheet, Image} from 'react-native'
import React, { useState } from 'react'
import SecondaryButton from './SecondaryButton'
import * as Location from 'expo-location';


import { Colors } from '../constants/Globalcolors'
import { getGoogleMapPreview } from '../util/location';


const LocationPicker = () => {
        const [locationPermissionInformation, requestPermission] = Location.useForegroundPermissions();
        const [isFetchingLocation, setIsFetchingLocation] = useState(false);
        const [pickedLocation, setPickedLocation] = useState(null)

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
      const {coords} = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      setIsFetchingLocation(false)
      console.log(coords)
      setPickedLocation({
        lat: coords.latitude,
        long: coords.longitude
      })

      console.log(pickedLocation)

    //   if(locationObj){
    //     console.log("Coords got", coords)
    //   }else{
    //     console.log("Location not picked")
    //   }

  }

  function handleGetMap(){

  }

   React.useEffect(() => {

      }, [isFetchingLocation]);
      let content = <Text>You have no location picked yet</Text>

      if(pickedLocation){
        const locationUrl =  getGoogleMapPreview(pickedLocation.lat, pickedLocation.long);
        console.log(locationUrl);

        if(locationUrl){
          content =  <Image style={styles.image} source={{uri:locationUrl}}/>
        }else{
          content = <Text>Error showing the location</Text>
        }

      }

  return (
    <View>
      <View style={styles.locationContainer}>
        {content}
      </View>
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
    },
    image: {
      width: "100%",
      height: "100%",
    }

})