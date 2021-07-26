import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Button, NativeBaseProvider } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import * as cartAction from "../state/cart/action-creator";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartReducer.items);

  const addButtHandler = () => {
    cartItems.forEach((item) => {
      if (item.productId === props.id) {
        item.quantity++;
        dispatch(cartAction.addQuantity(props.price));
      }
    });
  };

  const removeButtHandler = () => {
    cartItems.forEach((item, index) => {
      console.log(item, "item");
      if (item.productId === props.id) {
        if (item.quantity > 1) {
          item.quantity--;
          dispatch(cartAction.subtractQuantity(props.price));
        } else {
          cartItems.splice(index, 1);
          dispatch(cartAction.remveFromCart(props.price));
        }
      }
    });
  };

  const onDeleteHandler = () => {
    cartItems.forEach((item, index) => {
      if (item.productId === props.id) {
        cartItems.splice(index, 1);
        dispatch(cartAction.remveFromCart(props.price * props.quantity));
      }
    });
  };

  const RightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0.7, 0],
    });
    return (
      <TouchableOpacity onPress={onDeleteHandler}>
        <View
          style={{
            backgroundColor: "red",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Animated.Text
            style={{
              color: "white",
              paddingHorizontal: 10,
              fontWeight: "600",
              transform: [{ scale }],
            }}
          >
            Delete
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={RightActions}>
      <View style={styles.con}>
        <View style={styles.container}>
          <View style={styles.imageCon}>
            <Image style={styles.imag} source={{ uri: props.image }} />
          </View>
          <View>
            <Text>{props.name}</Text>
            <Text>
              {props.totalAmount} * {props.quantity} $
            </Text>
          </View>
          <NativeBaseProvider>
            <View style={styles.buttCon}>
              <Button
                style={{ backgroundColor: "#DCDCDC" }}
                onPress={removeButtHandler}
              >
                <Ionicons name="remove" color="#1E90FF" size={20} />
              </Button>
              <View style={styles.quan}>
                <Text>{props.quantity}</Text>
              </View>
              <Button
                style={{ backgroundColor: "#DCDCDC" }}
                onPress={addButtHandler}
              >
                <Ionicons name="add" color="#1E90FF" size={20} />
              </Button>
            </View>
          </NativeBaseProvider>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  imag: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  imageCon: {
    width: "20%",
    height: "100%",
    paddingRight: 5,
  },
  container: {
    flexDirection: "row",
    padding: 10,
  },
  con: {
    flex: 1,
  },
  buttCon: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  quan: {
    backgroundColor: "#DCDCDC",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default CartItem;
