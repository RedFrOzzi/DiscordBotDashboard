import { useEffect, useRef, useState } from "react";
import "../styles/MessageFrame.css";
import { useMutation, useQuery } from "@tanstack/react-query";

function MessageFrame() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");

  const sendMessage = useMutation({
    mutationFn: SendMessageMutation,
  });

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  }, [text]);

  const handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="message_frame">
      <input ref={inputRef} type="text" placeholder="ID канала" />
      <div className="message_frame_separator"></div>
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={handleText}
        placeholder="Сообщение..."
      ></textarea>
      <div className="message_frame_separator"></div>
      <button
        onClick={() =>
          sendMessage.mutate({
            channel: inputRef.current!.value,
            text: textAreaRef.current!.value,
          })
        }
      >
        Отправить
      </button>
    </div>
  );
}

export default MessageFrame;

const SendMessageMutation = async (args: SendMessageMutationArgs) => {
  const url = `https://localhost:7017/send-message?channelId=${args.channel}`;
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
  channel: string;
  text: string;
}
