import "../styles/NavButton.css";

interface NavButtonArgs {
  name: String;
  callback: () => void;
  cssProps: React.CSSProperties;
}

function NavButton(args: NavButtonArgs) {
  return (
    <button
      className="nav_button"
      style={args.cssProps}
      onClick={() => args.callback()}
    >
      {args.name}
    </button>
  );
}

export default NavButton;
