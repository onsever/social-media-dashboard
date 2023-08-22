import { UserState } from "../../redux/features/user/userSlice.ts";

interface UserAvatarCircleProps {
  user: UserState;
}

export default function UserAvatarCircle({ user }: UserAvatarCircleProps) {
  return (
    <div className="flex items-center justify-center p-2 bg-primary w-10 h-10 rounded-full">
      <span className="font-bold text-white">
        {user.fullName.split(" ")[0][0]}
      </span>
    </div>
  );
}
