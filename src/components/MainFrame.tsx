import { useState } from "react";
import "../styles/MainFrame.css";
import NavigationRow from "./NavigationRow";
import MessageFrame from "./messageFrame/MessageFrame";
import { useAtomValue } from "jotai";
import { usersData } from "../atom/UsersData";
import { channelsData } from "../atom/ChannelsData";
import User from "../models/User";
import Channel from "../models/Channel";

function MainFrame() {
  const [frameState, setFrameState] = useState<number>(0);
  const users = useAtomValue(usersData);
  const channels = useAtomValue(channelsData);

  return (
    <div className="main_frame">
      <NavigationRow onButtonClick={(n) => setFrameState(n)} />
      {SwitchRender(frameState, users, channels)}
    </div>
  );
}

function SwitchRender(state: number, users: User[], channels: Channel[]) {
  switch (state) {
    case 0:
      return <MessageFrame channels={channels} />;
    case 1:
      return (
        <div
          style={{
            width: "100%",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            overflowY: "scroll",
            scrollbarWidth: "thin",
            scrollbarColor: "#fff rgba(0,0,0,0)",
          }}
        >
          {users.map((user) => (
            <>
              <div>{user.id}</div>
              <div>{user.username}</div>
              <div>{user.nickname}</div>
              <div>{user.globalName}</div>
              <div>-----------------</div>
            </>
          ))}
        </div>
      );
    case 2:
      return <h1>Third</h1>;
    default:
      return null;
  }
}

export default MainFrame;
