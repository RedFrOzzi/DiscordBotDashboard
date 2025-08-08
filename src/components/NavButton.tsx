import "../styles/NavButton.css";

interface NavButtonArgs {
  name: String;
  callback: () => void;
  cssProps: React.CSSProperties;
  position: "left" | "center" | "right";
}

function NavButton(args: NavButtonArgs) {
  let cssProperties: React.CSSProperties = {
    ...args.cssProps,
    borderTopRightRadius: args.position === "right" ? "10px" : "0",
    borderTopLeftRadius: args.position === "left" ? "10px" : "0",
  };

  return (
    <button
      className="nav_button"
      style={cssProperties}
      onClick={() => args.callback()}
    >
      {args.name}
    </button>
  );
}

export default NavButton;
