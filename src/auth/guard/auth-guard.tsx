import { useEffect, useCallback, useState } from "react";
import { useRouter } from "@/hooks/useRouter";
import { useAuth } from "@/hooks/useAuth";

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [checked, setChecked] = useState(false);

  const check = useCallback(() => {
    if (!loading) {
      if (user) {
        setChecked(true);
      } else {
        router.push("/");
      }
    }
  }, [user, loading, router]);

  useEffect(() => {
    check();
  }, [check]);

  if (!checked) {
    return <> Loading from auth guard </>;
  }

  return <>{children}</>;
}
