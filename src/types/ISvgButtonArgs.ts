import { JSX } from "react";

export default interface ISvgButtonArgs {
  buttonSvg: JSX.Element;
  key: number;
  onClickCallback: () => void;
}
