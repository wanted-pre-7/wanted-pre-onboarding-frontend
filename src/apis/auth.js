import { client } from './instance';

/** 회원가입 */
export const signUp = async (user) => {
  return client.post('/auth/signup', { ...user });
};

/** 로그인 */
export const signIn = async (user) => {
  return client.post('/auth/signin', { ...user });
};
