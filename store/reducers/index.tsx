import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

export const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;

export const reducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      return rootReducer(state, action);
  }
};
