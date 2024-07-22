import { combineReducers } from "redux";
import CustomThemeSlice from "./CustomThemeSlice";

const rootReducer = combineReducers({
  theme: CustomThemeSlice,
  // Add other slices here
});

export default rootReducer;
