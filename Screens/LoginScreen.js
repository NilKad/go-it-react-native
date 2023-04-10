import { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const initialState = { email: "", password: "" };

export default function LoginScreen({
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
    <View
      style={{
        ...styles.formAuth,
        marginTop: isActiveKeyboard ? 92 : "auto",
      }}
    >
      <View style={styles.titleWrapper}>
        <Text style={styles.formTitle}>Войти</Text>
      </View>

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
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
      <View style={styles.linkLogin}>
        <Text style={styles.linkText}>Нет аккаунта? Зарегистрироваться</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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

  titleWrapper: {
    alignItems: "center",
    marginTop: 32,
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
