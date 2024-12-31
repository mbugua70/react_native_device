import { View, Text, FlatList } from 'react-native'
import React from 'react'
import PlacesItem from './PlacesItem'

const Placeslist = ({places}) => {

  return (
   <FlatList data={places} keyExtractor={({item}) => item.id} renderItem={({item}) => <PlacesItem place={item}/>}/>
  )
}

export default Placeslist