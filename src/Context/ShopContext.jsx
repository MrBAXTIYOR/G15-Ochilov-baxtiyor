import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

const ShopContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const getAllCard = () => {
      let card = {};
      for (let index = 0; index < products.length; index++) {
        card[index] = 0;
      }
      return card;
    };

    setCartItems(getAllCard());
  }, [products]);

  const addProduct = (product) => {
    const { title, price, description, category, image } = product;

    const productObj = {
      id: Date.now(),
      image,
      title,
      price,
      description,
      category,
    };
    setProducts([...products, productObj]);
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 1) - 1 }));
  };
  const removeToCard = (itemId) => {
    setCartItems(products.filter((pro) => pro.id !== itemId));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextVal = {
    addProduct,
    products,
    addToCart,
    removeCart,
    getTotalCartAmount,
    getTotalCartItems,
    cartItems,
    removeToCard
  };

  return <Context.Provider value={contextVal}>{children}</Context.Provider>;
};

export { Context };
export default ShopContext;
