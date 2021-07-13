import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Button, NativeBaseProvider } from "native-base";

const ProductDetailsScreen = (props) => {
  return (
    <ScrollView>
      <NativeBaseProvider>
        <View style={styles.item}>
          <View style={styles.imageCon}>
            <Image
              style={styles.image}
              source={{ uri: props.navigation.getParam("pImage") }}
            />
          </View>
          <Text>{props.navigation.getParam("pName")}</Text>
          <Text>{props.navigation.getParam("pPrice")}</Text>
          <Text>{props.navigation.getParam("pDescription")}</Text>
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
    </ScrollView>
  );
};

ProductDetailsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("pName"),
  };
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 15,
    height: 390,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imageCon: {
    width: "100%",
    height: "60%",
  },
});

export default ProductDetailsScreen;
