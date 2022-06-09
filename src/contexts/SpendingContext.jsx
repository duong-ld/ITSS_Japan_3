import React, { createContext, useReducer, useEffect } from "react";
import { SPENDINGS_KEY } from "../constants/local-storage.constant";
import { spendingReducer } from "../reducers/spendingReducer";

export const SpendingContext = createContext();

const SpendingContextProvider = (props) => {
  const [spendings, dispatch] = useReducer(spendingReducer, [], () => {
    const spendings = localStorage.getItem(SPENDINGS_KEY);
    return spendings ? JSON.parse(spendings) : [];
  });

  useEffect(() => {
    localStorage.setItem(SPENDINGS_KEY, JSON.stringify(spendings));
  }, [spendings]);

  return (
    <SpendingContext.Provider value={{ spendings, dispatch }}>
      {props.children}
    </SpendingContext.Provider>
  );
};

export default SpendingContextProvider;
