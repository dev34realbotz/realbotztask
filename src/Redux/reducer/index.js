import { FETCH_USER_DATA } from "../actions/actionType";

const userData = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return action.payload;

    default:
      return state;
  }
};

export default userData;
