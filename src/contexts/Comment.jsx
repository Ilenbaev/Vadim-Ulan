import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, APILIKE, PRODUCTS_LIMIT } from "../helpers/consts";

export const userContext = createContext();

export const useUserContext = () => {
  return useContext(userContext);
};

const INIT_STATE = {
  commit: [],
  forEditCom: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
      };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, forEditCom: action.payload };
    default:
      return state;
  }
}

const Comment = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCommit = async (id) => {
    try {
      let res = await axios.get(`${APILIKE}?prodId=${id}`);
      dispatch({
        type: ACTIONS.GET_PRODUCTS,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addCommit = async (newProduct) => {
    try {
      let res = await axios.post(APILIKE, newProduct);
      getCommit(newProduct.prodId);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCommit = async (item) => {
    try {
      let res = await axios.delete(`${APILIKE}/${item.id}`);
      getCommit(item.prodId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <userContext.Provider
      value={{
        addCommit,
        getCommit,
        deleteCommit,

        products: state.products,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default Comment;
