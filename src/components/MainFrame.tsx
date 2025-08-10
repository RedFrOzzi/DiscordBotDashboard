import { useState } from "react";
import "../styles/MainFrame.css";
import NavigationRow from "./NavigationRow";
import MessageFrame from "./MessageFrame";
import { useAtomValue } from "jotai";
import { usersData } from "../atom/UsersData";
import User from "../models/User";

function MainFrame() {
  const [frameState, setFrameState] = useState<number>(0);
  const users = useAtomValue(usersData);

  return (
    <div className="main_frame">
      <NavigationRow onButtonClick={(n) => setFrameState(n)} />
      {SwitchRender(frameState, users)}
    </div>
  );
}

function SwitchRender(state: number, users: User[]) {
  switch (state) {
    case 0:
      return (
        <MessageFrame
          channels={[
            { id: "1", name: "Poop" },
            { id: "2", name: "Loop" },
          ]}
        />
      );
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
  }
}

export default MainFrame;
