import { userManipulation } from "../actions/userManipulation";

function userManipulationCreator(value) {
  return {
    type: userManipulation,
    userInitials: value.userInitials,
    isLogged: value.isLogged,
  };
}

export default userManipulationCreator;
