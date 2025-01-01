import { View, Text, Pressable, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

import { Colors } from '../constants/Globalcolors';


const SecondaryButton = ({onPress,children, icon}) => {
  return (
       <Pressable style={styles.buttons} onPress={onPress}>
          <Ionicons style={styles.icon} name={icon} size={18} color={Colors.primary500} />
          <Text style={styles.buttonText}>{children}</Text>
       </Pressable>
  )
}

export default SecondaryButton

const styles = StyleSheet.create({
  buttons:{
    borderColor: Colors.primary500,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 4,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },

  icon: {
    marginHorizontal: 5,
  },

  buttonText: {
    color: Colors.primary500,
  }
})