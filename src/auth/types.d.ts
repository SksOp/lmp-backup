export type ActionMapType<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type AuthStateType = {
  status?: string;
  loading: boolean;
  user: User | null;
};

export interface User {
  id: string;
  name: string;
  // we require email and number  inorder to send the OTP in case of reset password
  email?: string;
  number?: string;
  role: "dealer" | "customer";
}

export type AuthContextType = {
  user: User | null;
  loading: boolean;
  authenticated: boolean;
  // TODO : Later add the type for the auth object
  login: (id: string, password: string) => void;
  logout: () => void;
  requestResetPasswordWithEmail: (email: string) => Promise<boolean>;
  resetPassword: (password: string, otp: string) => Promise<boolean>;
};
