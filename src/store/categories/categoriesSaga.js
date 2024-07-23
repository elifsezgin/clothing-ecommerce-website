import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebaseUtils";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./categoriesActions";
import { CATEGORIES_ACTION_TYPES } from "./categoriesActionTypes";

export function* fetchCategoriesAsync() {
  try {
    const categories = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailed());
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
