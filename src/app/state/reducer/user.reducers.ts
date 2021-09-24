import { User } from 'src/app/models/user';
import { createReducer, on, Action } from '@ngrx/store';

import { retrievedUserList } from '../actions/user.actions';

export const initialState: Array<User> = [];

export const usersReducer = createReducer(
  initialState,
  on(retrievedUserList, (state, user ) => [...state])
);