
export const setUser = (state, userInfo) => {
  state.userId = userInfo.userId;
  state.email = userInfo.email;
};

export const setLogin = (state, isLogin) => {
  state.isLogin = isLogin;
};
