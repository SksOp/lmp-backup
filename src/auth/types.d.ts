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

export type AuthContextType = {
  user: User | null;
  loading: boolean;
  authenticated: boolean;
  // TODO : Later add the type for the auth object
  login: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  logout: () => void;
};
