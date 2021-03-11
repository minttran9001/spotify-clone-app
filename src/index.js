import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthLayer } from "./context/AuthLayer";
import { userInitialState, userReducer } from "./reducers/userReducer";
import { trackInitialState, trackReducer } from "./reducers/trackReducer";
import {
  playlistInitialState,
  playlistReducer,
} from "./reducers/playlistReducer";
import {
  searchListInitialState,
  searchListReducer,
} from "./reducers/searchListReducer";
import { PlaylistLayer } from "./context/PlaylistLayer";
import { TrackLayer } from "./context/TrackLayer";
import { SearchListLayer } from "./context/SearchListLayer";
const initialState = {
  user: userInitialState,
  track: trackInitialState,
  playlist: playlistInitialState,
  search: searchListInitialState,
};
const reducer = {
  userReducer,
  trackReducer,
  playlistReducer,
  searchListReducer,
};
ReactDOM.render(
  <AuthLayer initialState={initialState.user} reducer={reducer.userReducer}>
    <PlaylistLayer
      initialState={initialState.playlist}
      reducer={reducer.playlistReducer}
    >
      <TrackLayer
        initialState={initialState.track}
        reducer={reducer.trackReducer}
      >
        <SearchListLayer
          initialState={initialState.search}
          reducer={reducer.searchListReducer}
        >
          <App />
        </SearchListLayer>
      </TrackLayer>
    </PlaylistLayer>
  </AuthLayer>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
