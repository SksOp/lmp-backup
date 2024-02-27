import { AuthContext } from "./auth-context";
import { Progress } from "@/components/ui/progress";

type Props = {
  children: React.ReactNode;
};

export function AuthConsumer({ children }: Props) {
  return (
    <AuthContext.Consumer>
      {(auth) => (auth.loading ? <Progress /> : children)}
    </AuthContext.Consumer>
  );
}
