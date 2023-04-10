import { useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const initialState = { login: "", email: "", password: "" };
const addBtn = require("../assets/images/add.jpg");

export default function RegistrationScreen({
  isActiveKeyboard,
  setIsActiveKeyboard,
  handlerCloseKeyboard,
}) {
  const [state, setState] = useState(initialState);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const onSubmitt = () => {
    console.log(state);
    handlerCloseKeyboard();
    setState(initialState);
  };

  return (
    // <KeyboardAvoidingView
    // behavior={Platform.OS === "ios" ? "padding" : "height"}
    // style={styles.keyboardViev}
    // >

    <View
      style={{
        ...styles.formAuth,
        marginTop: isActiveKeyboard ? 120 : "auto",
      }}
    >
      <View style={styles.avatarWrapper}>
        <View style={styles.avatar}>
          <Image source={addBtn} style={styles.addBtn} alt="addBtn" />
        </View>
      </View>
      <View style={styles.avatarWrapper}></View>

      <View style={styles.titleWrapper}>
        <Text style={styles.formTitle}>Регистрация</Text>
      </View>
      <TextInput
        style={styles.formInput}
        placeholder="Логин"
        onFocus={() => setIsActiveKeyboard(true)}
        onSubmitEditing={() => emailInput.current?.focus()}
        value={state.login}
        onChangeText={(value) =>
          setState((prev) => ({ ...prev, login: value }))
        }
      ></TextInput>
      <TextInput
        style={styles.formInput}
        placeholder="Адрес электронной почты"
        onFocus={() => setIsActiveKeyboard(true)}
        value={state.email}
        onChangeText={(value) =>
          setState((prev) => ({ ...prev, email: value }))
        }
        ref={emailInput}
        onSubmitEditing={() => passwordInput.current?.focus()}
      ></TextInput>
      <TextInput
        style={styles.formInput}
        placeholder="Пароль"
        onFocus={() => setIsActiveKeyboard(true)}
        value={state.password}
        onChangeText={(value) =>
          setState((prev) => ({ ...prev, password: value }))
        }
        ref={passwordInput}
        onSubmitEditing={onSubmitt}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={onSubmitt}>
        <Text style={styles.buttonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
      <View style={styles.linkLogin}>
        <Text style={styles.linkText}>Уже есть аккаунт? Войти</Text>
      </View>
    </View>
    // </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  keyboardViev: {
    // flex: 1,
    // marginTop: "auto",
  },
  formAuth: {
    position: "relative",
    // marginTop: 120,
    marginTop: "auto",
    marginBottom: 0,
    // flex: 1,
    // justifyContent: "center",

    // flex: 1,
    // width: 100,
    // justifyContent: "flex-end",
    // alignContent: "flex-end",
    // alignItems: "flex-end",
    // alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    // paddingVertical: 60,
    // marginHorizontal: 16,
  },
  avatarWrapper: {
    alignItems: "center",
  },
  avatar: {
    position: "absolute",
    height: 120,
    width: 120,
    top: -60,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addBtn: {
    position: "absolute",
    width: 25,
    height: 25,
    right: -12,
    bottom: 14,
    // color: "red",
  },
  titleWrapper: {
    alignItems: "center",
    marginTop: 92,
    marginBottom: 35,
  },
  formTitle: {
    fontSize: 30,
  },
  formInput: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    marginBottom: 16,
    color: "#212121",
  },
  button: {
    marginTop: 27,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    padding: 16,
    borderWidth: 1,
    borderColor: "red",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
  linkLogin: {
    alignItems: "center",
    marginBottom: 78,
  },
  linkText: {
    color: "#1B4371",
    fontSize: 16,
  },
});
