import Immutable from 'immutable';
import { REDUCER_TYPES } from './homeConstants';

const {
  INIT,
  SET_NAME_INPUT,
  SAVE_NAME,
  PREP_SIDE_EFFECT,
  CAUSE_SIDE_EFFECT
} = REDUCER_TYPES;

export default function home(state = Immutable.Map(), action) {
  const {type, payload} = action;
  switch (type) {
    case INIT: {
      const { name } = payload;
      state = state.set('name', name);
      return state;
    }
    case SET_NAME_INPUT: {
      if (payload.length < 50) {
        state = state.set('nameInput', payload);
      }
      return state;
    }
    case SAVE_NAME: {
      if (state.has('nameInput')) {
        state = state.set('name', state.get('nameInput'));
      }
      return state;
    }
    case PREP_SIDE_EFFECT: {
      state = state.set('obj', {a:'a', b: {currency: '$', value: 125}});
      state = state.set('doSideEffect', true);
      return state;
    }
    case CAUSE_SIDE_EFFECT: {
      const obj = state.get('obj');
      debugger;
      const value = obj.b.value;
      // BOOM!
      return state;
    }
    default:
      return state;
  }
}
