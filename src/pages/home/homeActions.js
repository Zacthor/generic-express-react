import { REDUCER_TYPES } from './homeConstants';

const { SET_NAME_INPUT, SAVE_NAME } = REDUCER_TYPES;

export function setNameInput({target}) {
  return {
    type: SET_NAME_INPUT,
    payload: target.value
  };
}

export function saveNameInput() {
  return {
    type: SAVE_NAME
  };
}
