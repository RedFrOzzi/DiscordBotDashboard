import Channel from "../models/Channel";
import User from "../models/User";

export default interface IFetchedData {
  users: User[];
  channels: Channel[];
}
