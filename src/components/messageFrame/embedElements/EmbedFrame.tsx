import "../../../styles/embedElements/EmbedFrame.css";
import IMessageFrameArgs from "../../../types/IMessageFrameArgs";
import PlusIcon from "../../../svg/PlusIcon";
import { ReactNode, useEffect, useState } from "react";
import DropdownList from "../../DropdownList";
import EmbedTextFrame from "./EmbedTextFrame";
import EmbedFieldFrame from "./EmbedFieldFrame";
import EmbedColorFrame from "./EmbedColorFrame";
import { RgbColor } from "react-colorful";
import { useAtom } from "jotai";
import { embedBuilderData } from "../../../atom/EmbedBuilderData.ts";
import EmbedBuilder from "../../../utils/EmbedBuilder.ts";

interface EmbedFrameArgs {
  args: IMessageFrameArgs;
}

export default function EmbedFrame(eArgs: EmbedFrameArgs) {
  const [embedBuilder, setBuilder] = useAtom(embedBuilderData);

  const [isOptionsOpen, setOptionsState] = useState(false);
  const [isColorPickerOpen, setColorPickerState] = useState(false);
  const [sideColor, setSideColor] = useState<RgbColor>(
    embedBuilder.embed.color !== null
      ? embedBuilder.embed.color
      : { r: 0, g: 0, b: 0 }
  );

  useEffect(() => {
    embedBuilder.changeColor(sideColor);
  }, [sideColor]);

  function onSelectOption(item: { index: number; name: string } | null) {
    if (item === null) {
      return;
    }
    embedBuilder.chooseElement(item.index);
  }

  return (
    <>
      {isOptionsOpen ? (
        <DropdownList
          items={embedBuilder.content}
          onSelectItem={(item) => onSelectOption(item)}
          onLosingFocus={() => {
            setOptionsState(false);
          }}
        />
      ) : null}
      <div id="embed_frame_scroll_container">
        <div id="embed_frame">
          <div
            id="embed_color"
            style={{
              backgroundColor: `rgb(${sideColor.r}, ${sideColor.g}, ${sideColor.b})`,
            }}
            onClick={() => setColorPickerState(true)}
          >
            {isColorPickerOpen ? (
              <EmbedColorFrame
                setColorCallback={setSideColor}
                closePanelCallback={() => {
                  setColorPickerState(false);
                }}
              />
            ) : null}
          </div>
          <div id="embed_contructor_frame">
            <div id="constructor">
              {embedBuilder.hasTitle ? (
                <div className="embed_element">
                  <EmbedTextFrame placeholder="Заглавие..." fontSize="2.4ch" />
                </div>
              ) : null}
              {embedBuilder.hasDescription ? (
                <div className="embed_element">
                  <EmbedTextFrame placeholder="Описание..." fontSize="2ch" />
                </div>
              ) : null}
              {embedBuilder.hasUrl ? (
                <div className="embed_element">
                  <a href={embedBuilder.embed.url!}>embedBuilder.embed.url</a>
                </div>
              ) : null}
              {EnumerateFields(embedBuilder.fieldsCount)}
            </div>
            <button
              id="add_element_button"
              onClick={() => setOptionsState(true)}
            >
              <PlusIcon heigth="20px" width="20px" />
            </button>
          </div>
        </div>
        <div id="embed_send_container">
          <button
            id="embed_cancel_button"
            onClick={() => {
              setBuilder(new EmbedBuilder());
              setSideColor({ r: 0, g: 0, b: 0 });
            }}
          >
            Сбросить
          </button>
          <button id="embed_send_button">Отправить</button>
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
