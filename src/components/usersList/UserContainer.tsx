import { ReactNode } from "react";
import User from "../../models/User";
import "../../styles/usersListMainContainer/UserContainer.css";
import DiscordLogo from "../../svg/DiscordLogo";
import { useSetAtom } from "jotai";
import { selectedUser } from "../../atom/SelectedUser.ts";

interface UserContainerArgs {
  user: User | null;
}

export default function UserContainer(args: UserContainerArgs) {
  const setUser = useSetAtom(selectedUser);

  return (
    <div className="user_container" onClick={() => setUser(args.user)}>
      {getUserImageUrl(args.user)}
      <div className="user_info_container">
        <h3>{getUserName(args.user)}</h3>
        <p>Global name: {args.user?.globalName}</p>
        <p>ID: {args.user?.id}</p>
      </div>
    </div>
  );
}

function getUserName(user: User | null): string {
  if (user === null) return "";

  if (!user.nickname || user.nickname === "") return user.username;

  return `${user.nickname} (${user.username})`;
}

function getUserImageUrl(user: User | null): ReactNode {
  if (user === null || !user.imageURL || user.imageURL === "")
    return <DiscordLogo clsName="user_avatar" width="64px" height="64px" />;

  return (
    <img className="user_avatar" src={user.imageURL} alt="user's avatar" />
  );
}
