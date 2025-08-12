import "../../styles/MessageFrame.css";
import MessageOut from "../../svg/MessageOut.tsx";
import EmbedIcon from "../../svg/EmbedIcon.tsx";
import SvgButton from "../SvgButton.tsx";
import SingleMessage from "./SingleMessage.tsx";
import IMessageFrameArgs from "../../types/IMessageFrameArgs";
import { useState } from "react";
import EmbedFrame from "./EmbedFrame.tsx";

export default function MessageFrame(args: IMessageFrameArgs) {
  const [currentWindow, setWindow] = useState<number>(0);

  return (
    <div id="message_frame">
      <div id="message_frame_navigation">
        <SvgButton
          key={0}
          buttonSvg={MessageOut()}
          onClickCallback={() => {
            setWindow(0);
          }}
        />
        <SvgButton
          key={1}
          buttonSvg={EmbedIcon()}
          onClickCallback={() => {
            setWindow(1);
          }}
        />
      </div>
      <div id="message_frame_window">
        {ConditionalRender(currentWindow, args)}
      </div>
    </div>
  );
}

function ConditionalRender(index: number, args: IMessageFrameArgs) {
  switch (index) {
    case 0:
      return <SingleMessage {...args} />;
    case 1:
      return <EmbedFrame {...args} />;
    default:
      return null;
  }
}
