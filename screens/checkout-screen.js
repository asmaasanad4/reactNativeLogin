import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, FlatList, StyleSheet } from "react-native";

import * as cartAction from "../state/cart/action-creator";
import CartItem from "../components/cart-item";

const CheckoutScreen = (props) => {
  const cartTotalAmount = useSelector((state) => state.cartReducer.totalAmount);
  const cartItems = useSelector((state) => state.cartReducer.items);
  const quantityAll = useSelector((state) => state.cartReducer.quantityAll);

  const renderItem = (itemData) => {
    return (
      <CartItem
        quantity={itemData.item.quantity}
        name={itemData.item.productName}
        price={itemData.item.productPrice}
        image={itemData.item.productImage}
        totalAmount={itemData.item.sum}
        id={itemData.item.productId}
      />
    );
  };

  console.log(cartItems, "cart");

  return (
    <View style={styles.con}>
      <View style={styles.cart}>
        <View>
          <Text>Items ({quantityAll})</Text>
        </View>
        <FlatList
          keyExtractor={(item) => item.productId}
          data={cartItems}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.total}>
        <Text style={styles.text}>Total </Text>
        <Text style={styles.text}>{cartTotalAmount} $</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  total: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  con: {
    flex: 1,
    alignContent: "flex-end",
  },
  cartCon: {
    flex: 3,
  },
  cart: {
    alignContent: "flex-start",
    padding: 10,
  },
  text: {
    fontWeight: "bold",
    color: "#1E90FF",
  },
});

export default CheckoutScreen;
