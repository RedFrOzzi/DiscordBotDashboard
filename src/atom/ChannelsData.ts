import { atom } from "jotai";
import Channel from "../models/Channel";

export const channelsData = atom<Channel[]>([]);
