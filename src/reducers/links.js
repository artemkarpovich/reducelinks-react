import { GET_LINKS_INFO } from '../actions/link';

export default function(state = [], action) {
  switch(action.type) {
    case `${GET_LINKS_INFO}_SUCCESS`:
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
}
