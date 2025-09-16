import "../../../styles/embedElements/EmbedFooterFrame.css";
import EmbedBuilder from "../../../utils/EmbedBuilder";
import EmbedTextFrame from "./EmbedTextFrame";

export default function EmbedFooterFrame(args: { embedBuilder: EmbedBuilder }) {
  return (
    <div id="embed_frame_footer">
      {args.embedBuilder.embed.footer &&
        args.embedBuilder.embed.footer.icon_url && (
          <img
            src={args.embedBuilder.embed.footer.icon_url}
            alt="footer_icon"
          />
        )}
      <EmbedTextFrame
        fontSize="0.85rem"
        placeholder="Текст..."
        onTextChange={args.embedBuilder.changeFooterText}
      />
    </div>
  );
}
