export default function Microphone(args: { height?: string; width?: string }) {
  return (
    <svg
      height={args.height || "32px"}
      width={args.width || "32px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#e2e2e2ff"
    >
      <g id="microphone_bgCarrier" strokeWidth="0"></g>
      <g
        id="microphone_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="microphone_iconCarrier">
        <path
          d="M12 14.2857C13.4229 14.2857 14.5714 13.1371 14.5714 11.7143V6.57143C14.5714 5.14857 13.4229 4 12 4C10.5771 4 9.42857 5.14857 9.42857 6.57143V11.7143C9.42857 13.1371 10.5771 14.2857 12 14.2857Z"
          fill="#e2e2e2ff"
        ></path>
        <path
          d="M16.5429 11.7143H18C18 14.6371 15.6686 17.0543 12.8571 17.4743V20.2857H11.1429V17.4743C8.33143 17.0543 6 14.6371 6 11.7143H7.45714C7.45714 14.2857 9.63429 16.0857 12 16.0857C14.3657 16.0857 16.5429 14.2857 16.5429 11.7143Z"
          fill="#e2e2e2ff"
        ></path>
      </g>
    </svg>
  );
}
