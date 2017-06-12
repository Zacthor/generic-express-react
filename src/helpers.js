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
