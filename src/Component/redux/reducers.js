const intialState = {
  user: null,
};

export const UserReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      break;
  }
};
