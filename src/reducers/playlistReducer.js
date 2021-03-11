export const playlistInitialState = {
  userPlayLists: [],
  playlist: {},
  isLoading: true,
};

export const playlistReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_PLAYLISTS":
      return {
        ...state,
        userPlayLists: action.userPlayLists,
      };
    case "GET_PLAYLIST_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
        isLoading: false,
      };
    default:
      return state;
  }
};