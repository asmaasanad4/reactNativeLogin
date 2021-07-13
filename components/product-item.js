import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Button, NativeBaseProvider } from "native-base";

const ProductItem = (props) => {
  return (
    <TouchableOpacity style={styles.item} onPress={props.onSelect}>
      <NativeBaseProvider>
        <View style={styles.container}>
          <View style={styles.imageCon}>
            <Image style={styles.image} source={{ uri: props.image }} />
          </View>

          <Text>{props.name}</Text>
          <Text>{props.price}</Text>
          <Button
            style={{
              borderRadius: 10,
              backgroundColor: "#1E90FF",
              marginTop: 10,
            }}
            title="Login"
          >
            <Text style={{ color: "white" }}>Add to Cart</Text>
          </Button>
        </View>
      </NativeBaseProvider>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 15,
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
});

export default ProductItem;
