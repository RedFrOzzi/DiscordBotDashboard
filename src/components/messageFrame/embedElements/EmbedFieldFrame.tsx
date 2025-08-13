import EmbedTextFrame from "./EmbedTextFrame";
import "../../../styles/embedElements/EmbedFieldFrame.css";

export default function EmbedFieldFrame() {
  return (
    <div className="embed_field">
      <EmbedTextFrame
        placeholder="Название..."
        fontSize="2ch"
        maxHeigth={"25px"}
      />
      <EmbedTextFrame placeholder="Текст..." fontSize="1.8ch" />
    </div>
  );
}
