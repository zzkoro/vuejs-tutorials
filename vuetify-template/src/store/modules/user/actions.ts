import type { UserState, SignInRequest, RegisterRequest } from './type';


export const signIn = ({ commit, state }, signInRequest:SignInRequest) => {
  commit('setLogin', true);
  return {
    resMsg: 'signIn OK'
  };
};

export const register = ({ commit, state },  registerRequest:RegisterRequest) => {
  const userInfo = {
    userId: registerRequest.userId,
    email: registerRequest.email,
  };
  commit('setUser', userInfo);
  return {
    resMsg: 'register OK'
  };
};
