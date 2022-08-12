
const signIn = ({ commit, state }, signInRequest) => {
  const userInfo = {
    userId: signInRequest.userId,
    email: signInRequest.email,
  };
  commit('setUser', userInfo);
  commit('setLogin', true);
  return {
    resMsg: 'signIn OK'
  };
};

const register = ({ commit, state },  registerRequest) => {
  const userInfo = {
    userId: registerRequest.userId,
    email: registerRequest.email,
  };
  commit('setUser', userInfo);
  return {
    resMsg: 'register OK'
  };
};
