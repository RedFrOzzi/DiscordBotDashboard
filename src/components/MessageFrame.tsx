import { useEffect, useRef, useState } from "react";
import "../styles/MessageFrame.css";

function MessageFrame() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");
  const [input, setInput] = useState("");

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
      <input type="text" placeholder="ID канала" />
      <div className="message_frame_separator"></div>
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={handleText}
        placeholder="Сообщение..."
      ></textarea>
      <div className="message_frame_separator"></div>
      <button>Отправить</button>
    </div>
  );
}

export default MessageFrame;
