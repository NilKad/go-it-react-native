import { useRef, useState } from "react";
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const initialState = { login: "", email: "", password: "" };
const addBtn = require("../assets/images/add.jpg");

export default function RegistrationScreen() {
  const [state, setState] = useState(initialState);
  const [isActiveKeyboard, setIsActiveKeyboard] = useState(false);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const onSubmit = () => {
    setIsActiveKeyboard(false);
    Keyboard.dismiss();
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

      <Text style={styles.formTitle}>Регистрация</Text>
      <TextInput
        style={styles.formInput}
        placeholder="Логин"
        onFocus={() => setIsActiveKeyboard(true)}
        value={state.login}
        blurOnSubmit={false}
        onChangeText={(value) =>
          setState((prev) => ({ ...prev, login: value }))
        }
        onSubmitEditing={() => emailInput.current?.focus()}
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
        blurOnSubmit={false}
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
        blurOnSubmit={false}
        onSubmitEditing={onSubmit}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
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
  formAuth: {
    // position: "relative",
    // marginTop: 120,
    // marginTop: "auto",
    marginBottom: 0,
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
  formTitle: {
    marginTop: 92,
    marginBottom: 35,
    fontSize: 30,
    textAlign: "center",
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
