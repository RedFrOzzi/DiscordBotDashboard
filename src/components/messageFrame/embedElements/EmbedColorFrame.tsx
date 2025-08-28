import { RgbColor, RgbColorPicker } from "react-colorful";
import "../../../styles/embedElements/EmbedColorFrame.css";
import { useEffect, useState } from "react";

interface EmbedColorFrameArgs {
  setColorCallback: (c: RgbColor) => void;
  closePanelCallback: () => void;
}

export default function EmbedColorFrame(args: EmbedColorFrameArgs) {
  const [color, setColor] = useState<RgbColor>({ r: 0, g: 0, b: 0 });
  const [textColor, setTextColor] = useState<string>("white");

  useEffect(() => {
    args.setColorCallback(color);
    const brightness = (color.r * 299 + color.g * 587 + color.b * 114) / 1000;
    brightness > 150 ? setTextColor("black") : setTextColor("white");
  }, [color]);

  return (
    <div id="embed_color_picker" onClick={(e) => e.stopPropagation()}>
      <div
        id="embed_color_picker_backpanel"
        onClick={() => args.closePanelCallback()}
      ></div>
      <div id="hexcolorpicker">
        <RgbColorPicker onChange={setColor} />
        <button
          style={{
            backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
            color: textColor,
          }}
          onClick={() => args.closePanelCallback()}
        >
          OK
        </button>
      </div>
    </div>
  );
}
