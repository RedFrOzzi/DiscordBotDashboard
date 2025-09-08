import "../styles/ChannelsSelector.css";
import { useRef, useState } from "react";
import ArrowRight from "../svg/ArrowRight";
import Channel from "../models/Channel";
import ChannelsList from "./ChannelsList";

interface ChannelsSelectorArgs {
  channels: Channel[];
  selectedChannel: Channel | null;
  setSelectedChannel: (ch: Channel | null) => void;
}

export default function ChannelsSelector(args: ChannelsSelectorArgs) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setOpen] = useState<Boolean>(false);

  return (
    <>
      <div id="ch_s_input_row">
        <button id="ch_s_id_button" onClick={() => setOpen(true)}>
          <ArrowRight />
        </button>

        <input
          ref={inputRef}
          type="text"
          placeholder="ID канала"
          value={args.selectedChannel === null ? "" : args.selectedChannel.name}
          readOnly
          onClick={() => setOpen(true)}
        />
      </div>
      {isOpen ? (
        <ChannelsList
          channels={args.channels}
          onSelectItem={args.setSelectedChannel}
          onLoosingFocus={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}
