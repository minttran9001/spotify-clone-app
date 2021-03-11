import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "../api/spotify";
const spotify = new SpotifyWebApi();
export const getUserFromUrl = (dispatch) => {
  const hash = getTokenFromUrl();
  window.location.hash = "";
  const token = hash.access_token;
  if (token) {
    spotify.setAccessToken(token);
    spotify.getMe().then((user) => {
      dispatch({
        type: "GET_USER_FROM_URL",
        user,
        token,
      });
    });
  }
};

export const getUserPlayLists = (dispatch) => {
  spotify.getUserPlaylists().then((userPlayLists) => {
    console.log(userPlayLists)
    dispatch({
      type: "GET_USER_PLAYLISTS",
      userPlayLists,
    });
  });
};
export const getPlayList = (dispatch) => {
  dispatch({
    type: "GET_PLAYLIST_REQUEST",
  });
  spotify.getPlaylist("37i9dQZEVXcIJazRV9ISoM").then((playlist) => {
    dispatch({
      type: "GET_PLAYLIST",
      playlist,
    });
  });
};
export const getTrackById = (dispatch, trackId) => {
  spotify.getTrack(trackId).then((track) => {
    dispatch({
      type: "GET_TRACK_BY_ID",
      track,
    });
  });
};
export const playTrack = (dispatch) => {
  dispatch({
    type: "PLAY_TRACK",
  });
};
export const pauseTrack = (dispatch) => {
  dispatch({
    type: "PAUSE_TRACK",
  });
};
export const stopTrack = (dispatch) => {
  dispatch({
    type: "STOP_TRACK",
  });
};
