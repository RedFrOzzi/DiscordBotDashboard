import { useState } from "react";
import "../styles/NavigationRow.css";
import NavButton from "./NavButton";

interface NavigationRowArgs {
  onButtonClick: (n: number) => void;
}

function NavigationRow(args: NavigationRowArgs) {
  const [frameState, setFrameState] = useState<number>(0);

  return (
    <div className="navigation_row">
      <NavButton
        name="Сообщение"
        cssProps={frameState == 0 ? activeFrameStyle : inActiveFrameStyle}
        callback={() => {
          args.onButtonClick(0);
          setFrameState(0);
        }}
      />
      <NavButton
        name="Пользователи"
        cssProps={frameState == 1 ? activeFrameStyle : inActiveFrameStyle}
        callback={() => {
          args.onButtonClick(1);
          setFrameState(1);
        }}
      />
      <NavButton
        name="Канал"
        cssProps={frameState == 2 ? activeFrameStyle : inActiveFrameStyle}
        callback={() => {
          args.onButtonClick(2);
          setFrameState(2);
        }}
      />
    </div>
  );
}

const activeFrameStyle: React.CSSProperties = {
  borderBottomStyle: "none",
};

const inActiveFrameStyle: React.CSSProperties = {
  borderBottomStyle: "solid",
};

export default NavigationRow;
