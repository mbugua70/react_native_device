import { View, Text, ScrollView, StyleSheet, TextInput} from 'react-native'
import React, {useState} from 'react'
import { Colors } from '../../constants/Globalcolors'
import PickerImage from '../PickerImage'

const PlaceForm = () => {
    const [enteredText, setEnteredText] = useState()

    function handleEnteredText(enteredText){
        setEnteredText(enteredText)
    }
  return (
    <ScrollView style={styles.screen}>
        <View>
            <Text style={styles.title}>Title</Text>
            <TextInput style={styles.fontinput} value={enteredText} onChange={handleEnteredText}/>
        </View>
       <PickerImage/>
    </ScrollView>
  )
}

export default PlaceForm

const styles = StyleSheet.create({
    screen: {
      padding: 24,
      flex: 1,
    },
    fontinput: {
        backgroundColor: Colors.primary500,
         borderRadius: 8,
         elevation: 8,
         shadowColor: "black",
         shadowOffset: {width: 2, height: 2},
         shadowOpacity: 0.75,
         shadowRadius: 8,
         paddingHorizontal: 4,
         paddingVertical: 10,
         fontSize: 16,
    },
    title: {
        marginVertical: 4,

        color: Colors.primary500,
    }
})