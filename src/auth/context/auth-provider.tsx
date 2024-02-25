import {
  useEffect,
  useReducer,
  useCallback,
  useMemo,
  useState,
  useContext,
} from "react";
import { ActionMapType, AuthStateType } from "../types";
import { AuthContext } from "./auth-context";

enum Types {
  INITIAL = "INITIAL",
}

interface User {
  id: string;
  email: string;
  role: "dealer" | "customer";
}

type Payload = {
  [Types.INITIAL]: {
    user: User | null;
  };
};

export const useAuth = () => {
  return useContext(AuthContext);
};

type Action = ActionMapType<Payload>[keyof ActionMapType<Payload>];

const initialState: AuthStateType = {
  user: null,
  loading: true,
};

const reducer = (state: AuthStateType, action: Action) => {
  if (action.type === Types.INITIAL) {
    return {
      loading: false,
      user: action.payload.user,
    };
  }
  return state;
};

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = useCallback(async (email: string, password: string) => {
    // TODO: Call the login API
    const user: User = { id: "123", email, role: "dealer" };
    dispatch({ type: Types.INITIAL, payload: { user } });
  }, []);

  const logout = useCallback(async () => {
    // TODO : Call the logout API
    dispatch({ type: Types.INITIAL, payload: { user: null } });
  }, []);

  const signup = useCallback(async (email: string, password: string) => {
    // TODO : Call the signup API
    const user: User = { id: "123", email, role: "dealer" };
    dispatch({ type: Types.INITIAL, payload: { user } });
  }, []);

  const value = useMemo(
    () => ({
      loading: state.loading,
      authenticated: !!state.user,
      user: state.user,
      login,
      logout,
      signup,
    }),
    [state.loading, state.user, login, logout, signup]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
