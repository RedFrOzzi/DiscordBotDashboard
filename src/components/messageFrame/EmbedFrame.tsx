import "../../styles/EmbedFrame.css";
import IMessageFrameArgs from "../../types/IMessageFrameArgs";
import PlusIcon from "../../svg/PlusIcon";
import { useState } from "react";
import DropdownList from "../DropdownList";

export default function EmbedFrame(args: IMessageFrameArgs) {
  const [isOptionsOpen, setOptionsState] = useState(false);

  return (
    <>
      {isOptionsOpen ? (
        <DropdownList
          items={[{ name: "poop" }, { name: "loop" }]}
          onSelectItem={(item) => console.log(item)}
          onLosingFocus={() => {
            setOptionsState(false);
          }}
        />
      ) : null}
      <div id="embed_frame">
        <button id="add_element_button" onClick={() => setOptionsState(true)}>
          <PlusIcon />
        </button>
      </div>
    </>
  );
}
