import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostScreen from "./Screens/main/PostScreen";
import CreatePostsScreen from "./Screens/main/CreatePostsScreen";
import ProfileScreen from "./Screens/ProfileScreen";

const AuthStack = createNativeStackNavigator();
const MainTabs = createBottomTabNavigator();

// const backGround = require("./assets/images/background.jpg");

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  } else {
    return (
      <MainTabs.Navigator>
        <MainTabs.Screen
          name="Публикации"
          component={PostScreen}
        ></MainTabs.Screen>
        <MainTabs.Screen
          name="CratePost"
          component={CreatePostsScreen}
        ></MainTabs.Screen>
        <MainTabs.Screen
          name="Profile"
          component={ProfileScreen}
        ></MainTabs.Screen>
      </MainTabs.Navigator>
    );
  }
};

export default function App() {
  const [isActiveKeyboard, setIsActiveKeyboard] = useState(false);

  const routing = useRoute(true);

  const handlerCloseKeyboard = () => {
    setIsActiveKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <NavigationContainer>
      {routing}
      {/* <TouchableWithoutFeedback onPress={handlerCloseKeyboard}>
        <View style={styles.container} onPress={() => handlerCloseKeyboard()}>
          <ImageBackground
            style={styles.background}
            source={require("./assets/images/background.jpg")}
          ></ImageBackground>
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback> */}
    </NavigationContainer>
  );
}
// auth

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
