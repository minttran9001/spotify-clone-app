export const playlistInitialState = {
  userPlaylists: [],
  isLoading: true,
  playlist: {},
  isSelected: false,
};
const isExist = (arr, trackId) => {
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].track.id === trackId) {
        return true;
      }
    }
    return false;
  }
  return false;
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
      const newArr = playlistInitialState.userPlaylists;
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
        userPlaylists: newArr,
      };
      return state;
    case "GET_PLAYLIST_BY_ID_REQUEST":
      return state;
    case "GET_PLAYLIST_BY_ID":
      const pl = playlistInitialState.userPlaylists.find(
        (item) => item.id === action.id
      );
      state = {
        ...state,
        playlist: pl,
        isSelected: true,
      };
      return state;
    case "ADD_TRACK_TO_PLAYLIST":
      const plArr = [...playlistInitialState.userPlaylists];
      plArr.map((item, index) => {
        if (item.id === action.playlistId) {
          if (!isExist(plArr[index].tracks.items, action.newTrack.track.id)) {
            plArr[index].tracks.items.push(action.newTrack);
          }
        }
      });
      state = {
        ...state,
        userPlaylists: [...plArr],
      };
      return state;
    default:
      return state;
  }
};
