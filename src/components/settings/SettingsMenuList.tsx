import { useQuery } from "@tanstack/react-query";
import "../../styles/settings/SettingsMenuList.css";
import {
  getUsersURL,
  getChannelsURL,
  serverBaseURL,
} from "../../utils/ServerUrls";
import LoadingCircle from "../../svg/LoadingCircle";
import User from "../../models/User";
import Channel from "../../models/Channel";
import { useSetAtom } from "jotai";
import { usersData } from "../../atom/UsersData";
import { channelsData } from "../../atom/ChannelsData";
import { useEffect } from "react";

interface FetchedData {
  users: User[];
  channels: Channel[];
}

function SettingsMenuList() {
  const loadUsersQuery = useQuery({
    queryKey: ["loadDataQuery"],
    queryFn: FetchData,
    enabled: false,
    refetchOnMount: false,
    retry: false,
    retryOnMount: false,
  });

  const setUsers = useSetAtom(usersData);
  const setChannels = useSetAtom(channelsData);

  useEffect(() => {
    if (loadUsersQuery.isSuccess) {
      setUsers(loadUsersQuery.data.users);
      setChannels(loadUsersQuery.data.channels);
    }
  }, [loadUsersQuery.isSuccess]);

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
            <p>Загрузить данные</p>
          )}
        </li>
      </ul>
    </div>
  );
}

async function FetchData(): Promise<FetchedData> {
  const response1 = await fetch(serverBaseURL + getUsersURL);
  const users = (await response1.json()) as User[];
  const response2 = await fetch(serverBaseURL + getChannelsURL);
  const channels = (await response2.json()) as Channel[];
  return {
    users: users,
    channels: channels,
  };
}

export default SettingsMenuList;
