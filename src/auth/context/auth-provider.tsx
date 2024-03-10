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

// Custom event for login
const loginEvent = new CustomEvent("authChange", {
  detail: { isLoggedIn: true },
});

// Custom event for logout
const logoutEvent = new CustomEvent("authChange", {
  detail: { isLoggedIn: false },
});

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
    window.dispatchEvent(loginEvent);
  }, []);

  const logout = useCallback(async () => {
    // TODO : Call the logout API
    localStorage.removeItem("user");
    dispatch({ type: Types.INITIAL, payload: { user: null } });
    window.dispatchEvent(logoutEvent);
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

  const onAuthStateChange = useCallback((callback: (user?: User | null) => void) => {
    const handleAuthChange = (event: Event) => {
      const authEvent = event as CustomEvent<{ isLoggedIn: boolean }>;

      const localUser = localStorage.getItem("user");

      console.log("localUser", localUser);

      if (authEvent.detail.isLoggedIn) {
        callback(localUser ? JSON.parse(localUser) : null);
      } else {
        callback(null);
      }
    };

    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
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
      onAuthStateChange,
    }),
    [
      state.loading,
      state.user,
      onAuthStateChange,
      login,
      logout,
      requestResetPasswordWithEmail,
      requestResetPasswordWithPhone,
      validateOtp,
      resetPassword,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
