import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
// const backGround = require("./assets/images/background.jpg");

export default function App() {
  const [isActiveKeyboard, setIsActiveKeyboard] = useState(false);

  const handlerCloseKeyboard = () => {
    setIsActiveKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlerCloseKeyboard}>
      <View style={styles.container} onPress={() => handlerCloseKeyboard()}>
        <ImageBackground
          style={styles.background}
          source={require("./assets/images/background.jpg")}
        >
          <RegistrationScreen
          // isActiveKeyboard={isActiveKeyboard}
          // setIsActiveKeyboard={setIsActiveKeyboard}
          // handlerCloseKeyboard={handlerCloseKeyboard}
          />
          {/* <LoginScreen
            isActiveKeyboard={isActiveKeyboard}
            setIsActiveKeyboard={setIsActiveKeyboard}
            handlerCloseKeyboard={handlerCloseKeyboard}
          /> */}
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "flex-end",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",

    // position: "relative",
    color: "#ffffff",
  },
  keyboardViev: {
    // flex: 1,
    // marginTop: "auto",
  },
});
