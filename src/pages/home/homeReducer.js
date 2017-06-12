import Immutable from 'immutable';
import { REDUCER_TYPES } from './homeConstants';

const { INIT } = REDUCER_TYPES;

export default function home(state = Immutable.Map(), action) {
  const {type, payload} = action;
  switch(type) {
    case INIT: {
      const { name } = payload;
      state = state.set('name', name);
      return state;
    }
    default:
      return state;
  }
}
