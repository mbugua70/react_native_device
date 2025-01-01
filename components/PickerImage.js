import { View, Text, Alert, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from "expo-image-picker";
import SecondaryButton from './SecondaryButton';
import { Colors } from '../constants/Globalcolors';

const PickerImage = () => {
    const [cameraPermissionInformation, requestPermission] = ImagePicker.useCameraPermissions();
    const [isFetchingImage, setIsFetchingImage] = useState(false)
    const [pickedImage, setPickedImaage] = useState();

    async function verifyCameraPermission(){
        if(cameraPermissionInformation.status === ImagePicker.PermissionStatus.UNDETERMINED){
            const iosPermission =  await requestPermission();
            return iosPermission.granted
        }

        if(cameraPermissionInformation.status === ImagePicker.PermissionStatus.DENIED){
            Alert.alert("Denied Camera Permission", "You need to accept camera permission to continue")
            return false;
        }

        return true;
    }

    async function handleImage(){

       const isPermission =  await verifyCameraPermission()
       console.log("Permission granted", isPermission)

       if(!isPermission){
        console.log("showing the image instead one")

        return;
       }
       console.log("picking the image")
       setIsFetchingImage(true)
       const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16,9],
        quality: 0.5,
       });

       setIsFetchingImage(false)

       if(!image.canceled){
        console.log("image picked", image.assets[0].uri)
        const uri = image.assets[0].uri;
        setPickedImaage(uri);
       }else{
        console.log("image not picked")
       }
    }

    React.useEffect(() => {
        console.log("Fetching Image Status:", isFetchingImage);
    }, [isFetchingImage]);


    let imageContent  =  <Text style={styles.textfallback}>No image picked yet</Text>;

    if(pickedImage && !isFetchingImage){
        imageContent = <Image style={styles.image} source={{uri: pickedImage}}/>
    }

    return (
    <View>
      <View style={styles.imageContainer}>
       {imageContent}
      </View>
       <SecondaryButton icon="camera" onPress={handleImage}>Take a Picture</SecondaryButton>
    </View>
  )
}

export default PickerImage

const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        height: 200,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: Colors.primary100,
        marginVertical: 18,
    },

    textfallback: {
      textAlign: "center"
    },

    image: {
        width: "100%",
        height: "100%"
    }
})