export const playlistInitialState = {
  userPlayLists: [],
  isLoading: true,
  playlist: {},
  isSelected: false,
};

export const playlistReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_PLAYLISTS":
      return state;
    case "GET_WEEKLY_PLAYLIST_REQUEST":
      state = {
        ...state,
        isLoading: true,
      };
      return state;
    case "GET_WEEKLY_PLAYLIST":
      state = {
        ...state,
        playlist: action.playlist,
        isLoading: false,
      };
      return state;
    case "CREATE_USER_PLAYLIST":
      console.log("prevState: ", state);
      console.log("action: ", action);
      const newArr = playlistInitialState.userPlayLists;
      let maxId;
      if (newArr.length > 0) {
        maxId = newArr.reduce((p, v) => {
          return p > v.id ? parseInt(p + 1) : parseInt(v.id + 1);
        }, 0);
      } else {
        maxId = 1;
      }
      const newPlaylist = {
        id: maxId,
        name: `My playlist ${maxId}#`,

        images: [],
        artists: [],
        type: "playlist",
        owner: {
          display_name: "Mint",
        },
        tracks: {
          total: 0,
          items: [],
        },
      };
      newArr.push(newPlaylist);
      state = {
        ...state,
        userPlayLists: newArr,
      };
      return state;
    case "GET_PLAYLIST_BY_ID_REQUEST":
      return state;
    case "GET_PLAYLIST_BY_ID":
      const pl = playlistInitialState.userPlayLists.find(
        (item) => item.id === action.id
      );
      state = {
        ...state,
        playlist: pl,
        isSelected: true,
      };
      return state;
    default:
      return state;
  }
};
