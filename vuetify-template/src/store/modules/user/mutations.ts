import type { UserState } from './type';


export const setUser = (state: UserState, userInfo: UserState) => {
  state.userId = userInfo.userId;
  state.email = userInfo.email;
};

export const setLogin = (state: UserState, isLogin: boolean) => {
  state.isLogin = isLogin;
};
