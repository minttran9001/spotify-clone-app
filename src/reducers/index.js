export const initialState = {
  user: null,
  token : null,
  isLogged : false,
  playlists: [],
  isPlaying: false,
  item: null,
};

 const reducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_FROM_URL":
      return {
        ...state,
        user: action.user,
        token : action.token,
        isLogged : action.token ? true : false,
      };
    default:
      return state;
  }
};
export default reducer