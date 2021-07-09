import { cloneableGenerator } from '@redux-saga/testing-utils';
import { put, call } from 'redux-saga/effects';
import { users } from '../../../../__mocks__/users';
import api from '../../../services/instance';

import { getUsers } from '../user.saga';

describe('users flow', () => {
  const generator = cloneableGenerator(getUsers)();

  it('fetch users success', async () => {
    const clone = generator.clone();

    expect(clone.next().value).toEqual(
      put({
        type: 'users/setIsLoading',
        payload: true,
      }),
    );

    expect(clone.next(true).value).toEqual(call(api.get, '/users'));

    const response = { data: { data: users } };

    expect(clone.next(response).value).toEqual(
      put({
        type: 'users/setUsers',
        payload: {
          users: {
            data: users,
          },
        },
      }),
    );

    expect(clone.next().value).toEqual(
      put({
        type: 'users/setIsLoading',
        payload: false,
      }),
    );

    expect(clone.next().done).toEqual(true);
  });
});
