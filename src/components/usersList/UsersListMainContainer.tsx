import User from "../../models/User";
import "../../styles/usersListMainContainer/UsersListMainContainer.css";
import UserContainer from "./UserContainer";

interface UsersListMainContainerArgs {
  users: User[];
}

export default function UsersListMainContainer(
  args: UsersListMainContainerArgs
) {
  return (
    <div id="users_list_container">
      {args.users.map((user, index) => (
        <UserContainer user={user} key={index} />
      ))}
    </div>
  );
}
