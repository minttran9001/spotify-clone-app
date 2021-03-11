import React, { createContext, useContext, useReducer } from "react";

export const TrackContext = createContext();

export const TrackLayer = ({ initialState, reducer, children }) => (
  <TrackContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </TrackContext.Provider>
);
export const useDataTrack = () => useContext(TrackContext);

