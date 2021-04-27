import { usersConstants } from 'store/redux/constants';

const users = (state = [], action: any) => {
  switch (action.type) {
    case usersConstants.SET_USERS: {
      return [...action.users];
    }
    default:
      return state;
  }
}

export default users;
