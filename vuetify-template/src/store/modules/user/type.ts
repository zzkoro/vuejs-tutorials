export interface UserState {
  userId?: string,
  email?: string,
  isLogin?: boolean,
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  userId: string;
  email?: string;
}
