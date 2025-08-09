import "../styles/DropdownList.css";
import Channel from "../types/Channel.ts";

interface DropdownListArgs {
  channels: Channel[];
  onSelectChannel: (c: Channel) => void;
  onLosingFocus: () => void;
}

function DropdownList(args: DropdownListArgs) {
  function OnSelect(key: number) {
    try {
      args.onSelectChannel(args.channels[key]);
    } catch {
      console.log("Wrong index");
    }
  }

  return (
    <>
      <div id="dropdown_backpanel" onClick={args.onLosingFocus}></div>
      <div className="dropdown_frame">
        <div id="dropdown_list">
          {args === null || args.channels === null ? (
            <></>
          ) : (
            <ul>
              {args.channels.map((channel, i) => (
                <li key={i}>
                  <div
                    className="channel_item"
                    onClick={() => {
                      OnSelect(i);
                      args.onLosingFocus();
                    }}
                  >
                    <p>{channel.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default DropdownList;
