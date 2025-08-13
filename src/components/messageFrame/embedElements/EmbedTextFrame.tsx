import { useEffect, useRef, useState } from "react";
import "../../../styles/embedElements/EmbedTextFrame.css";

interface EmbedTextFrameArgs {
  placeholder: string;
  fontSize: string;
  maxHeigth?: string | null;
}

export default function EmbedTextFrame(args: EmbedTextFrameArgs) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    if (
      textAreaRef.current &&
      (args.maxHeigth === null || args.maxHeigth === undefined)
    ) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  }, [text]);

  const handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <textarea
      ref={textAreaRef}
      className="embed_text_area"
      value={text}
      onChange={handleText}
      placeholder={args.placeholder}
      style={{
        fontSize: args.fontSize,
        maxHeight:
          args.maxHeigth === null || args.maxHeigth === undefined
            ? ""
            : args.maxHeigth,
      }}
    ></textarea>
  );
}
