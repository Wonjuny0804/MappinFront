export interface IAuth {
  isAuthenticated: boolean;
  token: string | null;
  userProfile: IUser | null;
}

export interface IUser {
  nickName: string;
  email: string;
  role: string;
}

export interface IGeneralResponse {
  result : string;
  statusCode: number;
}

export interface ISignInResponse extends IGeneralResponse {
  data: {
    token: string;
  }
}

export interface IEmailCheckResponse extends IGeneralResponse {
  data: {
    existed: boolean;
  }
}

export interface ISignIn {
  email: string;
  password: string;
}

