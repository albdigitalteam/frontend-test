const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function getPosts() {
  const response = await fetch(`${BASE_URL}/posts`);
  return response.json();
}

export async function getUsers() {
  const response = await fetch(`${BASE_URL}/users`);
  return response.json();
}
export async function getComments() {
  const response = await fetch(`${BASE_URL}/comments`);
  return response.json();
}
