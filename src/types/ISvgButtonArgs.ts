import { JSX } from "react";

export default interface ISvgButtonArgs {
  buttonSvg: JSX.Element;
  index: number;
  onClickCallback: () => void;
}
