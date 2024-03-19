import { useAuth } from "@/hooks/useAuth";
import ProfileLayout from "@/layout/profile";
import { Profile } from "@/sections/profile/profle";

export default function Page() {
  const { user } = useAuth();
  console.log(user);
  if (!user) return null;
  return (
    <ProfileLayout>
      <Profile user={user} />
    </ProfileLayout>
  );
}
