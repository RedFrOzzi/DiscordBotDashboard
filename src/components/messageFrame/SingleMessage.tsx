import "../../styles/SingleMessage.css";
import { useEffect, useRef, useState } from "react";
import ArrowRight from "../../svg/ArrowRight";
import { useMutation } from "@tanstack/react-query";
import Channel from "../../models/Channel";
import DropdownList from "../../components/DropdownList";
import IMessageFrameArgs from "../../types/IMessageFrameArgs";

export default function SingleMessage(args: IMessageFrameArgs) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [channel, setChannel] = useState<Channel | null>(null);
  const [isOpen, setOpen] = useState<Boolean>(false);

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
      <div id="input_row">
        <button id="ch_id_button" onClick={() => setOpen(true)}>
          <ArrowRight />
        </button>

        <input
          ref={inputRef}
          type="text"
          placeholder="ID канала"
          value={channel === null ? "" : channel.name}
          readOnly
          onClick={() => setOpen(true)}
        />
      </div>
      {isOpen ? (
        <DropdownList
          items={args.channels}
          onSelectItem={setChannel}
          onLosingFocus={() => setOpen(false)}
        />
      ) : null}
      <div className="message_frame_separator"></div>
      <textarea
        id="message_textarea"
        ref={textAreaRef}
        value={text}
        onChange={handleText}
        placeholder="Сообщение..."
      ></textarea>

      <div className="message_frame_separator"></div>
      <button
        id="send_button"
        onClick={() =>
          sendMessage.mutate({
            channelId: channel?.id,
            text: textAreaRef.current!.value,
          })
        }
      >
        Отправить
      </button>
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
