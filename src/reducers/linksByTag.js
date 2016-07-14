import { GET_LINKS_BY_TAG } from '../actions/link';

export default function(state = [], action) {
  switch(action.type) {
    case `${GET_LINKS_BY_TAG}_SUCCESS`:
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
}
