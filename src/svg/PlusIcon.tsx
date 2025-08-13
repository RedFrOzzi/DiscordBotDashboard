import ISize from "../types/ISize";

export default function PlusIcon(size: ISize) {
  return (
    <svg
      width={size.width}
      height={size.heigth}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="plus_bg" strokeWidth={0}></g>
      <g id="plus_bg_tracer" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="plus_bg_icon">
        <path
          d="M4 12H20M12 4V20"
          stroke="#787878"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
}
