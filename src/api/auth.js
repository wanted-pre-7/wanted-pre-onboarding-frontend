import axiosInstance from './instance';

export const signUp = async (user) => {
  return axiosInstance.post('/auth/signup', { ...user });
};

export const signIn = async (user) => {
  return axiosInstance.post('/auth/signin', { ...user });
};
