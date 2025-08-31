import { RgbColor } from "react-colorful";
import EmbedAuthor from "../../models/embed/EmbedAuthor";
import EmbedField from "../../models/embed/EmbedField";
import EmbedFooter from "../../models/embed/EmbedFooter";
import EmbedImage from "../../models/embed/EmbedImage";
import EmbedThumbnail from "../../models/embed/EmbedThumbnail";

type Embed = {
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  color: RgbColor | null;
  footer: EmbedFooter | null;
  image: EmbedImage | null;
  thumbnail: EmbedThumbnail | null;
  author: EmbedAuthor | null;
  fields: EmbedField[] | null;
};

export default Embed;
