import { useState } from "react";
import { HexColorPicker } from "react-colorful";

export default function EmbedColorFrame() {
  const [color, setColor] = useState<string>("#ffffff");

  return (
    <div>
      <HexColorPicker color={color} onChange={setColor} />
    </div>
  );
}
