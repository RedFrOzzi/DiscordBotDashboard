import { atom } from "jotai";
import EmbedBuilder from "../utils/EmbedBuilder";

export const embedBuilderData = atom<EmbedBuilder>(new EmbedBuilder());
