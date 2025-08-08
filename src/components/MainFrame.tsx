import { useState } from "react";
import "../styles/MainFrame.css";
import NavigationRow from "./NavigationRow";
import MessageFrame from "./MessageFrame";

function MainFrame() {
  const [frameState, setFrameState] = useState<number>(0);

  return (
    <div className="main_frame">
      <NavigationRow onButtonClick={(n) => setFrameState(n)} />
      {SwitchRender(frameState)}
    </div>
  );
}

function SwitchRender(state: number) {
  switch (state) {
    case 0:
      return <MessageFrame />;
    case 1:
      return <h1>Second</h1>;
    case 2:
      return <h1>Third</h1>;
  }
}

export default MainFrame;
