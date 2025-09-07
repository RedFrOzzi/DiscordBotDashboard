import "../../styles/SingleMessage.css";
import { useEffect, useRef, useState } from "react";
import ArrowRight from "../../svg/ArrowRight";
import { useMutation } from "@tanstack/react-query";
import Channel from "../../models/Channel";
import DropdownList from "../../components/DropdownList";
import IMessageFrameArgs from "../../types/IMessageFrameArgs";
import ChannelsSelector from "../ChannelsSelector";

export default function SingleMessage(args: IMessageFrameArgs) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");
  const [channel, setChannel] = useState<Channel | null>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  }, [text]);

  useEffect(() => {
    if (args.selectedUser === null) return;

    setText(`<@!${args.selectedUser.id}> `);
  }, [args.selectedUser]);

  const sendMessage = useMutation({
    mutationFn: SendMessageMutation,
  });

  const handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <div id="message_frame_ch_selector">
        <ChannelsSelector
          channels={args.channels}
          selectedChannel={channel}
          setSelectedChannel={setChannel}
        />
      </div>
      <div className="message_frame_separator"></div>
      <textarea
        id="message_textarea"
        ref={textAreaRef}
        value={text}
        onChange={handleText}
        placeholder="Сообщение..."
      ></textarea>

      <div className="message_frame_separator"></div>
      <div id="nessage_buttons_group">
        <button
          id="message_clear_button"
          onClick={() => {
            args.setSelectedUserCallback(null);
            setText("");
          }}
        >
          Очистить
        </button>
        <button
          id="message_send_button"
          onClick={() =>
            sendMessage.mutate({
              channelId: channel?.id,
              text: textAreaRef.current!.value,
            })
          }
        >
          Отправить
        </button>
      </div>
    </>
  );
}

const SendMessageMutation = async (args: SendMessageMutationArgs) => {
  if (args.channelId === undefined) {
    return;
  }
  const url = `https://localhost:7017/send-message?channelId=${args.channelId}`;
  var response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args.text),
  });
  return await response.json();
};

interface SendMessageMutationArgs {
  channelId: string | undefined;
  text: string;
}
