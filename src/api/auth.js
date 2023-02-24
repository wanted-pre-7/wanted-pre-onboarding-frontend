import { client } from './instance';

// auth api
export const signUp = async (user) => {
  return client.post('/auth/signup', { ...user });
};

export const signIn = async (user) => {
  return client.post('/auth/signin', { ...user });
};
