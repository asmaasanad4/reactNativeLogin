import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Button, NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import * as cartAction from "../state/cart/action-creator";

const ProductItem = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [addButtton, setAddButtton] = useState(false);

  const availableItems = useSelector((state) => state.cartReducer.items);
  const addButttons = useSelector((state) => state.cartReducer.addButtton);

  const dispatch = useDispatch();

  let newItems;
  let newCartItem;

  const quantity = 1;
  let alreadyExist = false;

  if (availableItems) {
    newItems = availableItems.map((qu) => {
      return [qu.productId, qu.quantity];
    });
  }

  const onAddToCart = () => {
    if (!alreadyExist) {
      newCartItem = {
        productId: props.id,
        quantity: 1,
        productPrice: props.price,
        productName: props.name,
        productImage: props.image,
        sum: props.price,
        selected: true,
      };
      alreadyExist = true;
    }
    dispatch(cartAction.addToCart(newCartItem, props.price, quantity));
    setAddButtton(true);
  };

  const addButtHandler = () => {
    availableItems.forEach((item) => {
      if (item.productId === props.id) {
        item.quantity++;
        dispatch(cartAction.addQuantity(props.price));
      }
    });
  };
  const removeButtHandler = () => {
    availableItems.forEach((item, index) => {
      if (item.productId === props.id) {
        if (item.quantity > 1) {
          item.quantity--;
          dispatch(cartAction.subtractQuantity(props.price));
        } else {
          alreadyExist = false;
          setAddButtton(false);
          availableItems.splice(index, 1);
          dispatch(cartAction.remveFromCart(props.price));
        }
      }
    });
  };

  return (
    <View style={styles.con}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <ScrollView>
          <NativeBaseProvider>
            <View style={styles.itemm}>
              <View style={styles.imageCon}>
                <Image style={styles.image} source={{ uri: props.image }} />
              </View>
              <Text>{props.name}</Text>
              <Text>{props.price}</Text>
              <Text>{props.description}</Text>
              <Button
                style={{
                  borderRadius: 10,
                  backgroundColor: "#1E90FF",
                  marginTop: 10,
                }}
                title="Add"
              >
                <Text style={{ color: "white" }}>Add to Cart</Text>
              </Button>

              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Button
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#1E90FF",
                    marginTop: 10,
                  }}
                  title="Close"
                >
                  <Text style={{ color: "white" }}>Close</Text>
                </Button>
              </Pressable>
            </View>
          </NativeBaseProvider>
        </ScrollView>
      </Modal>

      <Pressable style={styles.item} onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <View style={styles.imageCon}>
            <Image style={styles.image} source={{ uri: props.image }} />
          </View>
          <Text>{props.name}</Text>
          <Text>{props.price} $</Text>
          <NativeBaseProvider>
            {addButtton ? (
              <View style={styles.buttCon}>
                <Button
                  style={{
                    backgroundColor: "#DCDCDC",
                    height: 50,
                    width: 50,
                  }}
                  onPress={removeButtHandler}
                >
                  <Ionicons name="remove" color="#1E90FF" size={20} />
                </Button>
                <View style={styles.quan}>
                  <Text>
                    {newItems.map((qu) => {
                      if (props.id === qu[0]) return qu[1];
                    })}
                  </Text>
                </View>
                <Button
                  style={{
                    backgroundColor: "#DCDCDC",
                    height: 50,
                    width: 50,
                  }}
                  onPress={addButtHandler}
                >
                  <Ionicons name="add" color="#1E90FF" size={20} />
                </Button>
              </View>
            ) : (
              <Button
                style={{
                  borderRadius: 10,
                  backgroundColor: "#1E90FF",
                  marginTop: 10,
                }}
                title="Add To Cart"
                onPress={onAddToCart}
              >
                <Text style={{ color: "white" }}>Add to Cart</Text>
              </Button>
            )}
          </NativeBaseProvider>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 10,
    height: 250,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "flex-end",
  },
  imageCon: {
    width: "100%",
    height: "60%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  buttCon: {
    flexDirection: "row",
    marginTop: 5,
  },
  itemm: {
    flex: 1,
    margin: 15,
    height: 440,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "flex-end",
  },
  con: {
    flex: 1,
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

export default ProductItem;
