import { asyncAction } from './homeServices';
import { REDUCER_TYPES } from './homeConstants';

const { INIT } = REDUCER_TYPES;

export default {
  path: '/',
  loader: (req, finish) => {
    asyncAction().then((data) => {
      finish({
        templateName: 'home',
        initialState: data,
        title: 'Home',
        actionType: INIT,
      });
    })
  }
};
