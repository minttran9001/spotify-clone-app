import React, { createContext, useContext, useReducer } from "react";

export const SearchListContext = createContext();

export const SearchListLayer = ({ initialState, reducer, children }) => (
  <SearchListContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </SearchListContext.Provider>
);
export const useDataSearchList = () => useContext(SearchListContext);
