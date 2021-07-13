import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../shared/header";
import ProductItem from "../components/product-item";
import * as action from "../state/products/action-creator";

const HomePageScreen = (props) => {
  const [productsData, setProductsData] = useState([]);

  const dispatch = useDispatch();

  const availableData = useSelector(
    (state) => state.products.availableProducts
  );

  const renderItem = (itemData) => {
    return (
      <ProductItem
        image={itemData.item.image}
        name={itemData.item.name}
        price={itemData.item.price}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "ProductDetails",
            params: {
              pName: itemData.item.name,
              pPrice: itemData.item.price,
              pImage: itemData.item.image,
              pDescription: itemData.item.description,
            },
          });
        }}
      />
    );
  };

  useEffect(() => {
    fetch(`http://c27389f01ad7.ngrok.io/product`)
      .then((response) => response.json())
      .then((data) => {
        setProductsData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  dispatch(action.setData(productsData));

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={availableData}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};

HomePageScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Home ",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Cart" iconName="md-cart" />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});

export default HomePageScreen;
