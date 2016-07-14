import { createAction } from 'redux-actions';

export const SEND_LINK_INFO = 'SEND_LINK_INFO';
export const ADD_LINK_INFO = 'ADD_LINK_INFO';
export const GET_LINKS_INFO = 'GET_LINKS_INFO';

export const addLinkInfo = createAction(ADD_LINK_INFO);

export function sendLinkInfo(initialLink, description, tags) {
  return {
    type: SEND_LINK_INFO,
    payload: {
      url: '/api/links',
      method: 'post',
      body: {
        initialLink,
        description,
        tags
      }
    }
  };
}

export function getLinksInfo() {
  return {
    type: GET_LINKS_INFO,
    payload: {
      url: '/api/links',
      method: 'get'
    }
  };
}
