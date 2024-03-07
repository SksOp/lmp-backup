import { useReducer, useCallback, useMemo, useEffect } from "react";
import { ActionMapType, AuthStateType, Platform, User } from "../types";
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

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (!localUser) {
      dispatch({ type: Types.INITIAL, payload: { user: null } });
      return;
    }
    dispatch({ type: Types.INITIAL, payload: { user: JSON.parse(localUser) } });
  }, []);

  const login = useCallback(async (id: string, password: string) => {
    // TODO: Call the login API
    const user: User = {
      id,
      name: "Shubham Kumar",
      email: "sks@devflex.co.in",
      number: "1234567890",
      role: password === "dealer" ? "dealer" : "customer",
    };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({ type: Types.INITIAL, payload: { user } });
  }, []);

  const logout = useCallback(async () => {
    // TODO : Call the logout API
    localStorage.removeItem("user");
    dispatch({ type: Types.INITIAL, payload: { user: null } });
  }, []);

  const requestResetPasswordWithEmail = useCallback(async () => {
    // TODO : Call the reset password API
    return true;
  }, []);

  const requestResetPasswordWithPhone = useCallback(async () => {
    // TODO : Call the reset password API
    return true;
  }, []);

  const validateOtp = useCallback(async (otp: number, platform: Platform) => {
    // TODO : Call the reset password API
    return true;
  }, []);

  const resetPassword = useCallback(async () => {
    // TODO : Call the reset password API
    return true;
  }, []);

  const value = useMemo(
    () => ({
      loading: state.loading,
      authenticated: !!state.user,
      user: state.user,
      login,
      logout,
      requestResetPasswordWithEmail,
      requestResetPasswordWithPhone,
      validateOtp,
      resetPassword,
    }),
    [state.loading, state.user, login, logout, requestResetPasswordWithEmail, requestResetPasswordWithPhone, validateOtp, resetPassword]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
