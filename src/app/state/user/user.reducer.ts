import { AppState } from '../app.state';

import * as userActions from './user.actions';
import { User } from './user.model';

export type Action = userActions.All;

const defaultUser = new User(null, 'GUEST');

export namespace UsersQuery {
  export const getUser = (state: AppState) => state.user;
}

export function userReducer(state: User = defaultUser, action: Action) {
  switch (action.type) {

    case userActions.GET_USER:
      return { ...state, loading: true };

    case userActions.AUTHENTICATED:
      return { ...state, ...action.payload, loading: false };
    case userActions.AUTHENTICATE_EMAIL_PASSWORD:
      return { ...state, ...action.payload, loading: true };

    case userActions.NOT_AUTHENTICATED:
      return { ...state, ...defaultUser, loading: false };

    case userActions.GOOGLE_LOGIN:
      return { ...state, loading: true };

    case userActions.AUTH_ERROR:
      return { ...state, ...action.payload, loading: false };

    case userActions.LOGOUT:
      return { ...state, loading: true };

    default:
      return state;

  }
}
