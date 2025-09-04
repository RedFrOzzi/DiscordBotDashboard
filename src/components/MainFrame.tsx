import { useState } from "react";
import "../styles/MainFrame.css";
import NavigationRow from "./NavigationRow";
import MessageFrame from "./messageFrame/MessageFrame";
import { useAtomValue } from "jotai";
import { usersData } from "../atom/UsersData";
import { channelsData } from "../atom/ChannelsData";
import User from "../models/User";
import Channel from "../models/Channel";
import UsersListMainContainer from "./usersList/UsersListMainContainer";
import { selectedUser } from "../atom/SelectedUser.ts";

function MainFrame() {
  const [frameState, setFrameState] = useState<number>(0);
  const users = useAtomValue(usersData);
  const channels = useAtomValue(channelsData);
  const listSelecetedUser = useAtomValue(selectedUser);

  return (
    <div className="main_frame">
      <NavigationRow onButtonClick={(n) => setFrameState(n)} />
      {SwitchRender(frameState, users, channels, listSelecetedUser)}
    </div>
  );
}

function SwitchRender(
  state: number,
  users: User[],
  channels: Channel[],
  selectedUser: User | null
) {
  const mockUsers: User[] = [
    {
      id: "0",
      username: "poop",
      nickname: "",
      globalName: "Poopa and Loopa Corp",
      imageURL: "",
    },
    { id: "1", username: "poop2", nickname: "", globalName: "", imageURL: "" },
    {
      id: "2",
      username: "poop3",
      nickname: "Keke",
      globalName: "",
      imageURL: "",
    },
    {
      id: "3243423423554656734546774",
      username: "poop4",
      nickname: "",
      globalName: "",
      imageURL: "",
    },
    { id: "4", username: "poop5", nickname: "", globalName: "", imageURL: "" },
    { id: "4", username: "poop5", nickname: "", globalName: "", imageURL: "" },
    { id: "4", username: "poop5", nickname: "", globalName: "", imageURL: "" },
    { id: "4", username: "poop5", nickname: "", globalName: "", imageURL: "" },
    { id: "4", username: "poop5", nickname: "", globalName: "", imageURL: "" },
    { id: "4", username: "poop5", nickname: "", globalName: "", imageURL: "" },
  ];

  switch (state) {
    case 0:
      return <MessageFrame channels={channels} selectedUser={selectedUser} />;
    case 1:
      return <UsersListMainContainer users={mockUsers} />;
    case 2:
      return <h1>Third</h1>;
    default:
      return null;
  }
}

export default MainFrame;
