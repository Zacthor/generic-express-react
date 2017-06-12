import { combineReducers } from 'redux';

export function getReducers(pages) {
  return combineReducers(Object.keys(pages).reduce((acc, pageKey) => {
    const page = pages[pageKey];
    if (page.reducer) {
      acc[pageKey] = page.reducer;
    }
    return acc;
  }, {}));
}

export function doInitSetup({initialState, actionType, store}) {
  let butter = {};
  if (actionType) {
    store.dispatch({ type: actionType, payload: initialState });
  } else {
    butter = initialState;
  }
  return butter;
}
