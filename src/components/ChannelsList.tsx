import Channel from "../models/Channel";
import "../styles/DropdownList.css";
import Pencil from "../svg/Pencil";
import Microphone from "../svg/Microphone";

export default function ChannelsList(args: {
  channels: Channel[];
  onSelectItem: (ch: Channel) => void;
  onLoosingFocus: () => void;
}) {
  function OnSelect(key: number) {
    if (
      args === null ||
      args.channels === null ||
      args.channels.length <= key
    ) {
      return;
    }
    args.onSelectItem(args.channels[key]);
  }

  return (
    <>
      <div id="dropdown_backpanel" onClick={args.onLoosingFocus}></div>
      <div className="dropdown_frame">
        <div id="dropdown_list">
          {args === null || args.channels === null ? null : (
            <ul>
              {args.channels.map((item, i) => (
                <li key={i}>
                  <div
                    className="channel_item"
                    onClick={() => {
                      OnSelect(i);
                      args.onLoosingFocus();
                    }}
                  >
                    {item.isTextChannel ? (
                      <Pencil width="24px" height="24px" />
                    ) : (
                      <Microphone width="24px" height="24px" />
                    )}
                    <p>{item.name}</p>
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
