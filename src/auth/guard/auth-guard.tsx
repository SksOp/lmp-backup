import { useEffect, useCallback, useState } from "react";
import { useRouter } from "@/hooks/useRouter";
import { useAuth } from "@/hooks/useAuth";
import { paths } from "@/router";

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const { user } = useAuth();
  useEffect(() => {
    if (!user) router.replace(paths.login);
  }, [user, router]);

  return <>{children}</>;
}
