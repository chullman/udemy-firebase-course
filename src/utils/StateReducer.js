export default function reducer(state, action) {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        user: action.data,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
}
