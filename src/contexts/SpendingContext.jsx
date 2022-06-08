import React, { createContext, useReducer, useEffect } from "react";
import { spendingReducer } from "../reducers/spendingReducer";

export const SpendingContext = createContext();

const SpendingContextProvider = (props) => {
  const [spendings, dispatch] = useReducer(spendingReducer, [], () => {
    const spendings = localStorage.getItem("spendings");
    return spendings ? JSON.parse(spendings) : [];
  });

  useEffect(() => {
    localStorage.setItem("spendings", JSON.stringify(spendings));
  }, [spendings]);

  return (
    <SpendingContext.Provider value={{ spendings, dispatch }}>
      {props.children}
    </SpendingContext.Provider>
  );
};

export default SpendingContextProvider;
