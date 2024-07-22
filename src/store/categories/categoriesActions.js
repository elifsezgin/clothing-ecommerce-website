import { createAction } from "../../utils/reducer/reducerUtils";
import { CATEGORIES_ACTION_TYPES } from "./categoriesActionTypes";

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
