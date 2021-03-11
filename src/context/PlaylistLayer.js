import React, { createContext, useContext, useReducer } from "react";

export const PlaylistContext = createContext();

export const PlaylistLayer = ({ initialState, reducer, children }) => (
  <PlaylistContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </PlaylistContext.Provider>
);
export const useDataPlaylist = () => useContext(PlaylistContext);
