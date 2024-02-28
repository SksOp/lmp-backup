import { useAuth } from "@/hooks/useAuth";
import React, { useEffect } from "react";

function Logout() {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, [logout]);
  return <div>Logging you out</div>;
}

export default Logout;
