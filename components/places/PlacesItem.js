import { View, Text, Pressable, Image} from 'react-native'
import React from 'react'

const PlacesItem = ({place}) => {
  return (
    <Pressable>
      <Image source={{uri: place.imageUri}}/>
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  )
}

export default PlacesItem