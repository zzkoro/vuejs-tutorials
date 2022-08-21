import type { UserState, SignInRequest, RegisterRequest } from "./type";
import { ActionContext } from "vuex";

export const signIn = (
  context: ActionContext<UserState, any>,
  signInRequest: SignInRequest
): any => {
  context.commit("setLogin", true);
  return {
    resMsg: "signIn OK",
  };
};

export const register = (
  context: ActionContext<UserState, any>,
  registerRequest: RegisterRequest
): any => {
  const userInfo = {
    userId: registerRequest.userId,
    email: registerRequest.email,
  };
  context.commit("setUser", userInfo);
  return {
    resMsg: "register OK",
  };
};
