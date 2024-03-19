import React, { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { paths } from "@/router";
import { useRouter } from "@/hooks/useRouter";
import { Progress } from "@radix-ui/react-progress";

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const { user } = useAuth();
  useEffect(() => {
    if (!user) router.replace(paths.login);
  }, [router, user]);

  return <React.Suspense fallback={<Progress />}>{children}</React.Suspense>;
}
