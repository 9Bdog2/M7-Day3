import { SET_JOBS } from "../actions";
import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        jobsSearches: {
          ...state.jobsSearches,
          jobs: [...state.jobsSearches.jobs, action.payload],
        },
      };
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
