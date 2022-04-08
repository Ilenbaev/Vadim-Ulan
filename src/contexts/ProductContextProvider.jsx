import React, { createContext, useContext } from "react";

export const productContext = createContext();

export const useProductContext = () => {
  return useContext(productContext);
};

const ProductContextProvider = ({ children }) => {
  return (
    <productContext.Provider value={{}}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
