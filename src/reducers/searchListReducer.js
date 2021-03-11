export const searchListInitialState = {
  searchList: {},
  isLoading :true,
};

export const searchListReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_TRACK":
      state = {
        ...state,
        searchList: action.searchList,
        isLoading : false,
      };
      return state;
    default:
      return state;
  }
};
