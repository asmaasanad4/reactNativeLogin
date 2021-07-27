import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Button as Butt, NativeBaseProvider } from "native-base";
import { useDispatch, useSelector } from "react-redux";

import * as action from "../state/auth/action-creator";

const LoginFormScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.authReducer.loggedIn);

  if (loggedIn) {
    props.navigation.navigate("HomePage");
  }

  const loginHandler = () => {
    dispatch(action.tryLogin(email, password));
    console.log(email, password, "email password");
    fetch(`http://6027dcd1b1f0.ngrok.io/users`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].email, data[0].password, "ddddddddd");
        if (email === data[0].email && password === data[0].password) {
          dispatch(action.loginSuccess());
        } else {
          dispatch(action.loginfaild());
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <NativeBaseProvider>
      <View style={styles.cc}>
        {/* <Text style={styles.logo}>LOGO</Text> */}
        <View style={styles.container}>
          <Text style={styles.txt}>Login to your account</Text>
          <View style={styles.con}>
            <TextInput
              style={styles.inp}
              textContentType="emailAddress"
              keyboardType="email-address"
              placeholder="Email"
              defaultValue={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.con}>
            <TextInput
              textContentType="password"
              placeholder="Password"
              style={styles.inp}
              defaultValue={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.conBut}>
            <Butt
              style={{ borderRadius: 10, backgroundColor: "#1E90FF" }}
              title="Login"
              onPress={loginHandler}
            >
              <Text style={{ color: "white" }}>Login</Text>
            </Butt>
          </View>
          <Text>Need an account? Sign Up</Text>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontWeight: "bold",
    color: "white",
    fontSize: 40,
  },
  cc: {
    flex: 1,
    backgroundColor: "#1E90FF",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    paddingBottom: 20,
  },
  con: {
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 10,
  },

  conBut: {
    width: "100%",
    borderRadius: 80,
    padding: 10,
  },
  inp: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    borderColor: "#1E90FF",
  },
  txt: {
    padding: 10,
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default LoginFormScreen;
