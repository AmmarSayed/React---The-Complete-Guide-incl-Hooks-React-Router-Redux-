import React, { useState } from "react";

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
});

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Red Scarf",
    description: "A pretty red scarf.",
    isFavorite: false,
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
    description: "A pretty blue t-shirt.",
    isFavorite: false,
  },
  {
    id: "p3",
    title: "Green Trousers",
    description: "A pair of lightly green trousers.",
    isFavorite: false,
  },
  {
    id: "p4",
    title: "Orange Hat",
    description: "Street style! An orange hat.",
    isFavorite: false,
  },
];

export default (props) => {
  const [products, setProducts] = useState(DUMMY_PRODUCTS);

  const toggleFav = (pid) => {
    setProducts((currProductsList) => {
      const prodIndex = currProductsList.findIndex((p) => p.id === pid);
      const newFavStatus = !currProductsList[prodIndex].isFavorite;
      const updatedProducts = [...currProductsList];

      updatedProducts[prodIndex] = {
        ...currProductsList[prodIndex],
        isFavorite: newFavStatus,
      };

      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider value={{ products, toggleFav }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
