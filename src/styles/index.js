import {StyleSheet} from "react-native";

const DARK = "#222831";
const GRAY = "#393E46";
const BLUE = "#00ADB5";
const WHITE = "#EEEEEE";


const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    height: 'auto',
    bottom: 0,
    backgroundColor: DARK,
    borderRadius: 10,
  },
  form: {
    width: "100%",
    height: "auto",
    marginTop: 25,
    padding: 10,
  },
  formText: {
    fontSize: 24,
    color: BLUE,
    margin: 5,
    padding: 5,
  },
  formSelect: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: WHITE,
    color: BLUE,
    margin: 5,
    padding: 5,
  },
  formInput: {
    height: 40,
    backgroundColor: WHITE,
    color: DARK
  },
  formInputBig: {
    height: 100,
    backgroundColor: WHITE,
    color: DARK
  },
  formButton: {
    margin: 10,
    backgroundColor: BLUE,
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
  },
  formButtonText: {
    fontSize: 20,
    color: WHITE,
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  cameraButtonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center"
  },
  cameraButtonTake: {
    position: "absolute",
    bottom: 50,
    right: 175,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BLUE,
    margin: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  photoContainer: {
    flex: 1,
    margin: 10,
  },
  photoButtonContainer: {
    flex: 1,
    flexDirection: "row"
  },
  photoButtonRep: {
    position: "absolute",
    right: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BLUE,
    margin: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  photoButtonOk: {
    position: "absolute",
    right: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BLUE,
    margin: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  photo: {
    width: "100%",
    height: "80%",
  },
  thanksView: {
    width: '100%',
    height: '100%',
    backgroundColor: GRAY,
    alignItems: "center"
  },
  thanksText: {
    fontSize: 50,
    color: BLUE,
    margin: 5,
    padding: 5,
  }
});

export default styles;