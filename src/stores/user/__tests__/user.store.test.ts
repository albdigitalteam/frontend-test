import { users } from '../../../../__mocks__/users';
import { userSlice } from '../user.store';

describe('users store', () => {
  const { actions, reducer } = userSlice;
  const initialState = {
    users: [],
    isLoading: false,
  };

  it('should set users list', () => {
    expect(reducer(initialState, actions.setUsers({ users }))).toEqual({
      ...initialState,
      users: users,
    });
  });
});
