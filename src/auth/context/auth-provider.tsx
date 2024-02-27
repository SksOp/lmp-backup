import { useReducer, useCallback, useMemo } from "react";
import { ActionMapType, AuthStateType, User } from "../types";
import { AuthContext } from "./auth-context";

enum Types {
  INITIAL = "INITIAL",
}

type Payload = {
  [Types.INITIAL]: {
    user: User | null;
  };
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

  const login = useCallback(async (id: string, password: string) => {
    // TODO: Call the login API
    const user: User = {
      id,
      name: "Muhhamed",
      role: password === "dealer" ? "dealer" : "customer",
    };
    dispatch({ type: Types.INITIAL, payload: { user } });
  }, []);

  const logout = useCallback(async () => {
    // TODO : Call the logout API
    dispatch({ type: Types.INITIAL, payload: { user: null } });
  }, []);

  const signup = useCallback(async (id: string, password: string) => {
    // TODO : Call the signup API
    const user: User = {
      id,
      name: "Muhhamed",
      role: password === "dealer" ? "dealer" : "customer",
    };
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
