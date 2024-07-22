import { createAction } from "../../utils/reducer/reducerUtils";
import { USER_ACTION_TYPES } from "./userActionTypes";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
