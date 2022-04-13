import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, APILIKE, PRODUCTS_LIMIT } from "../helpers/consts";

export const userContext = createContext();

export const useUserContext = () => {
  return useContext(userContext);
};

const INIT_STATE = {
  commit: [],
  forEditVal: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
        pageTotalCount: Math.ceil(
          action.payload.headers["x-total-count"] / PRODUCTS_LIMIT
        ),
      };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, forEditVal: action.payload };
    default:
      return state;
  }
}

const Comment = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addCommit = async (newProduct) => {
    try {
      let res = await axios.post(APILIKE, newProduct);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <userContext.Provider value={{ addCommit }}>
      {children}
    </userContext.Provider>
  );
};

export default Comment;
