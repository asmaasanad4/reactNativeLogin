import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";

import LoginFormScreen from "../screens/login-form-screen";
import HomePageScreen from "../screens/home-page-screen";
import SignupScreen from "../screens/signup-screen";
import ProductDetailsScreen from "../screens/product-details-screen";
import CheckoutScreen from "../screens/checkout-screen";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? "#1E90FF" : "",
  },

  headerTintColor: Platform.OS === "android" ? "white" : "#1E90FF",
};

const navigator = createStackNavigator(
  {
    LoginForm: LoginFormScreen,
    HomePage: HomePageScreen,
    Signup: SignupScreen,
    ProductDetails: ProductDetailsScreen,
    Checkout: CheckoutScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

export default createAppContainer(navigator);
