import { DiscordProps, Shortcut } from "./types";

export const createShortcut = async (shortcut: Shortcut) => {
  const res = await fetch("http://localhost:7000/shortcut", {
    method: "POST",
    body: JSON.stringify(shortcut),
  });
  return res.json();
};

export const loadShortcuts = async () => {
  const res = await fetch("http://localhost:7000/shortcuts");
  return res.json();
}




export const loadDiscord = async () => {
  const res = await fetch("http://localhost:7000/discord");
  return res.json();
}

export const updateDiscord = async (props: DiscordProps) => {
  const res = await fetch("http://localhost:7000/discord", {
    method: "POST",
    body: JSON.stringify(props),
  });
  return res.json();
}