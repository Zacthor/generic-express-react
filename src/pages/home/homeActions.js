import { REDUCER_TYPES } from './homeConstants';

const {
  SET_NAME_INPUT,
  SAVE_NAME,
  PREP_SIDE_EFFECT,
  CAUSE_SIDE_EFFECT
} = REDUCER_TYPES;

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

export function prepSideEffect() {
  return {
    type: PREP_SIDE_EFFECT
  };
}

export function causeSideEffectError() {
  return {
    type: CAUSE_SIDE_EFFECT
  }
}
