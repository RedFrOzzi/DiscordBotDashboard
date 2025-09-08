import { useState } from "react";
import "../styles/MainFrame.css";
import NavigationRow from "./NavigationRow";
import MessageFrame from "./messageFrame/MessageFrame";
import { useAtom, useAtomValue } from "jotai";
import { usersData } from "../atom/UsersData";
import { channelsData } from "../atom/ChannelsData";
import User from "../models/User";
import Channel from "../models/Channel";
import UsersListMainContainer from "./usersList/UsersListMainContainer";
import { selectedUser } from "../atom/SelectedUser.ts";
import SummaryMainFrame from "./summaryFrame/SummaryMainFrame.tsx";

function MainFrame() {
  const [frameState, setFrameState] = useState<number>(0);
  const users = useAtomValue(usersData);
  const channels = useAtomValue(channelsData);
  const [listSelecetedUser, setListSelectedUser] = useAtom(selectedUser);

  return (
    <div className="main_frame">
      <NavigationRow onButtonClick={(n) => setFrameState(n)} />
      {SwitchRender(
        frameState,
        users,
        channels,
        listSelecetedUser,
        setListSelectedUser
      )}
    </div>
  );
}

function SwitchRender(
  state: number,
  users: User[],
  channels: Channel[],
  selectedUser: User | null,
  setSelectedUser: (user: User | null) => void
) {
  switch (state) {
    case 0:
      return (
        <MessageFrame
          channels={channels}
          selectedUser={selectedUser}
          setSelectedUserCallback={setSelectedUser}
        />
      );
    case 1:
      return <UsersListMainContainer users={users} />;
    case 2:
      return <SummaryMainFrame />;
    default:
      return null;
  }
}

export default MainFrame;
