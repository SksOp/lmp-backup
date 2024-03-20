import { useAuth } from "@/hooks/useAuth";
import ProfileLayout from "@/layout/profile";
import { Profile } from "@/sections/profile/profle";

export default function Page() {
  const { user } = useAuth();
  if (!user) return null;
  return (
    <ProfileLayout>
      <Profile user={user} />
    </ProfileLayout>
  );
}
