import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Placeslist from '../components/places/placeslist'
import AddPlaceButton from '../components/AddPlaceButton'

const AllPlaces = () => {
  return (
    <View style={styles.screen}>
         <Placeslist />
         <AddPlaceButton/>
    </View>
  )
}

export default AllPlaces

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
})