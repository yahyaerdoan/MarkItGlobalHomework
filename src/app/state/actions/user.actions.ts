import { User } from 'src/app/models/user';
import { createAction, props } from '@ngrx/store';

export const retrievedUserList = createAction(
  '[User List/API] Retrieve Users Success',
  props<{ user: User }>()
);