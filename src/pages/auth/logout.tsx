import { useAuth } from "@/hooks/useAuth";
import React, { useEffect } from "react";

function Page() {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, [logout]);
  return <div>Logging you out</div>;
}

export default Page;
