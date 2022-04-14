import React, { createContext, useContext, useReducer } from "react";
import { FAV } from "../helpers/consts";

const favoriteContext = createContext();

export const useFavorite = () => {
  return useContext(favoriteContext);
};

const INIT_STATE = {
  favorite: JSON.parse(localStorage.getItem("favorite")),
  favoriteLength: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FAV.GET_FAV_LENGTH:
      return {
        ...state,
        favoriteLength: action.payload,
      };
    case FAV.GET_FAV:
      return {
        ...state,
        favorite: action.payload,
      };
    default:
      return state;
  }
}

const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function createFavoriteFromLS() {
    let favorite = JSON.parse(localStorage.getItem("favorite"));

    if (!favorite) {
      favorite = {
        products: [],
        totalPrice: 0,
      };
      localStorage.setItem("favorite", JSON.stringify(favorite));
    }
    return favorite;
  }

  const addDelToFavorite = (prod) => {
    let favorite = createFavoriteFromLS();

    let newProd = {
      item: prod,
      count: 1,
      subPrice: prod.price,
    };

    let checkProdInFavorite = favorite.products.some((obj) => {
      return obj.item.id === prod.id;
    });
    if (checkProdInFavorite) {
      favorite.products = favorite.products.filter((obj) => {
        return obj.item.id !== prod.id;
      });
    } else {
      favorite.products.push(newProd);
    }

    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavoriteLength();
    dispatch({
      type: FAV.GET_FAV,
      payload: favorite,
    });
  };

  const getFavoriteLength = () => {
    let favorite = createFavoriteFromLS();
    dispatch({
      type: FAV.GET_FAV_LENGTH,
      payload: favorite.products.length,
    });
  };

  const isProdInFavorite = (id) => {
    let favorite = createFavoriteFromLS();
    let exist = favorite.products.some((obj) => {
      return obj.item.id === id;
    });
    return exist;
  };

  const getFavorite = () => {
    let favorite = createFavoriteFromLS();
    dispatch({
      type: FAV.GET_FAV,
      payload: favorite,
    });
  };

  const changeProductCount = (newCount, id) => {
    let favorite = createFavoriteFromLS();
    favorite.products = favorite.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = newCount;
      }
      return elem;
    });
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
  };

  const deleteProdInFavorite = (id) => {
    let favorite = createFavoriteFromLS();
    favorite.products = favorite.products.filter((elem) => {
      return elem.item.id !== id;
    });
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
    getFavoriteLength();
  };

  return (
    <favoriteContext.Provider
      value={{
        favoriteLength: state.favoriteLength,
        favorite: state.favorite,
        addDelToFavorite,
        getFavoriteLength,
        isProdInFavorite,
        getFavorite,
        changeProductCount,
        deleteProdInFavorite,
      }}
    >
      {children}
    </favoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
