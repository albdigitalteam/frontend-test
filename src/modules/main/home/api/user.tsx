import Config from 'react-native-config';

const BASE_URL_USERS = `${Config.API_BASE_URL}/users`;

export const getUsers = async () => {
  return await fetch(`${BASE_URL_USERS}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const getUserById = async (userId: number) => {
  return await fetch(`${BASE_URL_USERS}?id=${userId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
