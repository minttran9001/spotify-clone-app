export const userInitialState = {
    user: null,
    token: null,
    isLogged: false,
}
export const userReducer = (state, action) => {
    switch (action.type) {
      case "GET_USER_FROM_URL":
        return {
          ...state,
          user: action.user,
          token: action.token,
          isLogged: action.token ? true : false,
        };
      default:
        return state;
    }
  };

  