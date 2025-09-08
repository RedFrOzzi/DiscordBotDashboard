import { useQuery } from "@tanstack/react-query";
import "../styles/AppMainContainer.css";
import MainFrame from "./MainFrame.js";
import Settings from "./settings/Settings.js";
import IFetchedData from "../types/IFetchedData.js";
import {
  getChannelsURL,
  getUsersURL,
  serverBaseURL,
} from "../utils/ServerUrls.js";
import User from "../models/User.js";
import Channel from "../models/Channel.js";
import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { usersData } from "../atom/UsersData.js";
import { channelsData } from "../atom/ChannelsData.js";

export default function AppMainContainer() {
  const loadUsersQuery = useQuery({
    queryKey: ["loadDataQuery"],
    queryFn: FetchData,
    retry: 3,
    staleTime: Infinity,
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
    <div className="app_main_container">
      <Settings
        isFetching={loadUsersQuery.isFetched}
        isError={loadUsersQuery.isError}
        refetchQuery={loadUsersQuery.refetch}
      />
      <MainFrame />
    </div>
  );
}

async function FetchData(): Promise<IFetchedData> {
  const response1 = await fetch(serverBaseURL + getUsersURL);
  const users = (await response1.json()) as User[];
  const response2 = await fetch(serverBaseURL + getChannelsURL);
  const channels = (await response2.json()) as Channel[];
  return {
    users: users,
    channels: channels,
  };
}
