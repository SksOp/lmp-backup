import { AuthContext } from "@/auth/context/auth-context";
import { useContext } from "react";

export const useAuth = () => {
  return useContext(AuthContext);
};
