import "../styles/SvgButton.css";
import ISvgButtonArgs from "../types/ISvgButtonArgs";

export default function SvgButton(args: ISvgButtonArgs) {
  return (
    <div key={args.index} className="svg_button" onClick={args.onClickCallback}>
      {args.buttonSvg}
    </div>
  );
}
