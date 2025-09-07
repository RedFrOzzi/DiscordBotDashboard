import { useEffect, useRef, useState } from "react";
import User from "../../models/User";
import "../../styles/usersListMainContainer/UsersListMainContainer.css";
import UserContainer from "./UserContainer";
import fuzzysort from "fuzzysort";

interface UsersListMainContainerArgs {
  users: User[];
}

export default function UsersListMainContainer(
  args: UsersListMainContainerArgs
) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputText, setInputText] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>(args.users);

  useEffect(() => {
    if (inputText === null || inputText === "") {
      setFilteredUsers(args.users);
      return;
    }

    const results = fuzzysort.go(inputText, args.users, {
      threshold: 0.5,
      all: false,
      keys: ["username", "nickname", "globalName"],
    });

    if (results.length === 0) {
      setFilteredUsers([]);
      return;
    }

    setFilteredUsers(results.map((item) => item.obj));
  }, [inputText]);

  return (
    <>
      <div id="users_list_search">
        <input
          ref={inputRef}
          type="text"
          placeholder="Поиск"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <div id="users_list_container">
        {filteredUsers.length > 0 &&
          filteredUsers.map((user, index) => (
            <UserContainer user={user} key={index} />
          ))}
      </div>
    </>
  );
}
