import {useEffect, useRef, useState} from "react";
import {Image, Modal, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {Camera} from "expo-camera";
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import styles from "../../styles";

export default function ACamera(props) {
  const [hasPermissionCamera, setHasPermissionCamera] = useState(null);
  const [capture, setCapture] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const [location, setLocation] = useState(null);
  const [isThanksOpen, setIsThanksOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasPermissionCamera(status === 'granted');

      const {mediaStatus} = await MediaLibrary.requestPermissionsAsync();
      const {locationStatus} = await Location.requestForegroundPermissionsAsync();
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);


  if (hasPermissionCamera === null) {
    return <View/>;
  }

  if (hasPermissionCamera === false) {
    return <Text> Autorize o uso da câmera</Text>;
  }

  async function takePhoto() {
    if (ref) {
      const options = {
        quality: 0.7,
        base64: true,
        flexOrientation: true,
        forceUpOrientation: true
      }
      const photo = await ref.current.takePictureAsync(options);
      setCapture(photo.uri);
      setIsOpen(true);
      console.log(`${props.cidade} ${props.bairro} ${props.rua} ${props.descricao} ${location.longitude} ${location.latitude}`);
      console.log('Lucas Leal - 201910805');
      await MediaLibrary.saveToLibraryAsync(photo.uri);
    }
  }

  return (
    <SafeAreaView style={styles.cameraContainer}>
      <Camera
        style={styles.camera}
        ref={ref}
        type={Camera.Constants.Type.back}
      >
        <View style={styles.cameraButtonContainer}>
          <TouchableOpacity
            style={styles.cameraButtonTake}
            onPress={takePhoto}
          >
            <Text>Take</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <Modal
        transparent={true}
        visible={isOpen}
      >
        <View style={styles.photoContainer}>
          <View style={styles.photoButtonContainer}>
            <TouchableOpacity
              style={styles.photoButtonRep}
              onPress={() => {
                setIsOpen(false);
                props.repetition();
              }}
            >
              <Text>Rep</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.photoButtonOk}
              onPress={() => {
                setIsOpen(false);
                setIsThanksOpen(true)
              }}
            >
              <Text>Ok</Text>
            </TouchableOpacity>
          </View>
          <Image
            style={styles.photo}
            source={{uri: capture}}
          />
        </View>
      </Modal>
      <Modal
        transparent={true}
        visible={isThanksOpen}
      >
        <View style={styles.thanksView}>
          <Text style={styles.thanksText}> TMJ FML!</Text>
        </View>
      </Modal>
    </SafeAreaView>
  )
}