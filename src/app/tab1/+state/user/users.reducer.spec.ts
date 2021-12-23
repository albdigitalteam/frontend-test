// import { Action } from '@ngrx/store';

// import * as UsersActions from './users.actions';
// import { UsersEntity } from './users.models';
// import { State, initialState, reducer } from './users.reducer';

// describe('Users Reducer', () => {
//   const createUsersEntity = (name = '', id = 0, username = '', email = '', address:  null, phone = '', website = '', company: null): UsersEntity => ({
//     name: name || `name-${id}`,
//     id,
//     username,
//     email,
//     address,
//     phone,
//     website,
//     company,
//   });

//   describe('valid Users actions', () => {
//     it('loadUsersSuccess should return the list of known Users', () => {
//       const users = [
//         createUsersEntity('PRODUCT-AAA'),
//         createUsersEntity('PRODUCT-zzz'),
//       ];
//       const action = UsersActions.loadUsersSuccess({ users });

//       const result: State = reducer(initialState, action);

//       expect(result.loaded).toBe(true);
//       expect(result.ids.length).toBe(2);
//     });
//   });

//   describe('unknown action', () => {
//     it('should return the previous state', () => {
//       const action = {} as Action;

//       const result = reducer(initialState, action);

//       expect(result).toBe(initialState);
//     });
//   });
// });
