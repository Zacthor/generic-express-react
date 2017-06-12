import { REDUCER_TYPES } from './homeConstants';

const { SET_NAME_INPUT } = REDUCER_TYPES;

export function setName(name) {
  return {
    type: SET_NAME_INPUT,
    payload: name,
  }
}
