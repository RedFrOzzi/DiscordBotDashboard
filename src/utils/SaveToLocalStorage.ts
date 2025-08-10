import Channel from "../types/Channel";

export function SaveChannels(channels: Channel[]) {
  localStorage.setItem("channels", JSON.stringify(channels));
}

export function LoadChannels(): Channel[] | null {
  const chString = localStorage.getItem("channels");
  if (chString === null) return null;
  const array = JSON.parse(chString);
  if (array === null) return null;
  return array as Channel[];
}
