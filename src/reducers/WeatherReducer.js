import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // combine existing state with newly searched city
      // return newly created array
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
