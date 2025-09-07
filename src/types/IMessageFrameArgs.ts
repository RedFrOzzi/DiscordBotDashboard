import Channel from "../models/Channel";
import User from "../models/User";

export default interface MessageFrameArgs {
  channels: Channel[];
  selectedUser: User | null;
  setSelectedUserCallback: (user: User | null) => void;
}
