import initialState from "../initialState";

function appUser(state = initialState, action) {
  switch (action.type) {
    case "USER_MANIPULATION":
      return {
        isLogged: action.isLogged,
        userInitials: action.userInitials,
      };

    default:
      return state;
  }
}

export default appUser;
