import { View, Text } from 'react-native'
import React from 'react'
import SecondaryButton from './SecondaryButton'

const LocationPicker = () => {
  return (
    <View>
      <Text>LocationPicker</Text>
      <View></View>
      <View>
         <SecondaryButton icon="location">Locate User</SecondaryButton>
         <SecondaryButton icon="map">Pick A Location</SecondaryButton>
      </View>
    </View>
  )
}

export default LocationPicker