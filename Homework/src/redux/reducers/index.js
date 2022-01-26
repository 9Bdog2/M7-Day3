import { SET_JOBS } from "../actions";
import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobsSearches: {
          ...state.jobsSearches,
          jobs: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
