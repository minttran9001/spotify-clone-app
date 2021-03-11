import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "../api/spotify";
const spotify = new SpotifyWebApi();
export const getUserFromUrl = (dispatch) => {
  const hash = getTokenFromUrl();
  // window.location.hash = "";
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
    dispatch({
      type: "GET_USER_PLAYLISTS",
    });
};
export const createUserPlaylist = (dispatch)=>{
  dispatch({
    type : 'CREATE_USER_PLAYLIST',
  })
}
export const updateUserPlaylist = (dispatch)=>{
  dispatch({
    type : 'UPDATE_USER_PLAYLIST'
  })
}
export const getWeeklyPlayList = (dispatch) => {
  dispatch({
    type: "GET_WEEKLY_PLAYLIST_REQUEST",
  });
  spotify.getPlaylist("37i9dQZEVXcIJazRV9ISoM").then((playlist) => {
    dispatch({
      type: "GET_WEEKLY_PLAYLIST",
      playlist,
    });
  });
};
export const  searchTrack = (dispatch,query) =>{
  spotify.searchTracks(query).then(trackList=>{
    dispatch({
      type:"SEARCH_TRACK",
      searchList : trackList.tracks
    })
  })
  
}
export const selectPlaylist = (dispatch,id)=>{
  dispatch({
    type : "GET_PLAYLIST_BY_ID_REQUEST",
  })
  dispatch({
    type : "GET_PLAYLIST_BY_ID",
    id
  })
}
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
