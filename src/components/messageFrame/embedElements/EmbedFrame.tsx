import "../../../styles/embedElements/EmbedFrame.css";
import IMessageFrameArgs from "../../../types/IMessageFrameArgs";
import PlusIcon from "../../../svg/PlusIcon";
import { ReactNode, useState } from "react";
import DropdownList from "../../DropdownList";
import EmbedBuilder from "../../../utils/EmbedBuilder";
import EmbedTextFrame from "./EmbedTextFrame";
import EmbedFieldFrame from "./EmbedFieldFrame";

interface EmbedFrameArgs {
  args: IMessageFrameArgs;
  builder: EmbedBuilder;
}

export default function EmbedFrame(eArgs: EmbedFrameArgs) {
  const [isOptionsOpen, setOptionsState] = useState(false);

  function onSelectOption(item: { index: number; name: string } | null) {
    if (item === null) {
      return;
    }
    eArgs.builder.chooseElement(item.index);
  }

  return (
    <>
      {isOptionsOpen ? (
        <DropdownList
          items={eArgs.builder.content}
          onSelectItem={(item) => onSelectOption(item)}
          onLosingFocus={() => {
            setOptionsState(false);
          }}
        />
      ) : null}
      <div id="embed_frame">
        <div
          id="embed_color"
          style={{ backgroundColor: eArgs.builder.embed.color! }}
        ></div>
        <div id="embed_contructor_frame">
          <div id="constructor">
            {eArgs.builder.hasTitle ? (
              <div className="embed_element">
                <EmbedTextFrame placeholder="Заглавие..." fontSize="2.4ch" />
              </div>
            ) : null}
            {eArgs.builder.hasDescription ? (
              <div className="embed_element">
                <EmbedTextFrame placeholder="Описание..." fontSize="2ch" />
              </div>
            ) : null}
            {eArgs.builder.hasUrl ? (
              <div className="embed_element">
                <a href={eArgs.builder.embed.url!}>eArgs.builder.embed.url</a>
              </div>
            ) : null}
            {EnumerateFields(eArgs.builder.fieldsCount)}
          </div>
          <button id="add_element_button" onClick={() => setOptionsState(true)}>
            <PlusIcon heigth="20px" width="20px" />
          </button>
        </div>
      </div>
    </>
  );
}

function EnumerateFields(count: number): ReactNode[] {
  const nodes: ReactNode[] = [];
  for (let i = 0; i < count; i++) {
    nodes.push(<EmbedFieldFrame key={i} />);
  }
  return nodes;
}
