import react from "react";
import { StatusBar } from "expo-status-bar";
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

export default useRoute;
