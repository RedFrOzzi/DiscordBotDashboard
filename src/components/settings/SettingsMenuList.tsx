import { useQuery } from "@tanstack/react-query";
import "../../styles/settings/SettingsMenuList.css";
import { getUsersURL, serverBaseURL } from "../../utils/ServerUrls";
import LoadingCircle from "../../svg/LoadingCircle";
import { useEffect } from "react";

function SettingsMenuList() {
  const loadUsersQuery = useQuery({
    queryKey: ["loadUsersQuery"],
    queryFn: FetchUsers,
    enabled: false,
    refetchOnMount: false,
    retry: false,
    retryOnMount: false,
  });

  //   useEffect(() => {
  //     loadUsersQuery.data?.forEach((item) => console.log(item));
  //   }, [loadUsersQuery.data]);

  return (
    <div id="settings_menu_list">
      <ul>
        <li
          className="settings_menu_item"
          onClick={() => loadUsersQuery.refetch()}
        >
          {loadUsersQuery.isFetching ? (
            <LoadingCircle />
          ) : (
            <p>Load data from database</p>
          )}
        </li>
      </ul>
    </div>
  );
}

async function FetchUsers(): Promise<User[]> {
  const response = await fetch(serverBaseURL + getUsersURL);
  console.log("fetched");
  return (await response.json()) as User[];
}

export default SettingsMenuList;
