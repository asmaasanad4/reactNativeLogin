import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
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
        id={itemData.item.id}
        description={itemData.item.description}
      />
    );
  };

  useEffect(() => {
    fetch(`http://6027dcd1b1f0.ngrok.io/product`)
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
        <Item
          title="Cart"
          iconName="md-cart"
          onPress={() => {
            navData.navigation.navigate("Checkout");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default HomePageScreen;
