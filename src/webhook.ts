import { WebhookClient } from "discord.js";
import { Menu, Restaurant } from "./types";
import { botConfig, config, tagEmojis } from "./config";
import { splitMessage } from "./util";

export async function sendMenuWebhook(menu: Menu[], restaurant: Restaurant) {
  const name = restaurant.name.toUpperCase();
  let message = menu
    .filter((item) => item.menu.length > 0)
    .map((menuItem) => formatMessage(menuItem))
    .join("\n");

  if (message === "") {
    message = "# Ei ruokalistaa";
  }

  const messages = splitMessage(message);

  const url = process.env[`${name}_WEBHOOK`]!;
  const webhookClient = new WebhookClient({ url });
  for (const msg of messages) {
    await webhookClient.send({
      content: msg,
      avatarURL: botConfig.avatarURL,
      username: botConfig.username,
    });
  }
}

function formatMessage(menuItem: Menu) {
  const out = [`## ${menuItem.date}`];
  for (const item of menuItem.menu) {
    const [info, tags] = parseTags(item.info);
    out.push(`- **${item.dish}**: ${info} ${tags.join(" ")}`);
  }
  return out.join("\n");
}

function parseTags(info: string): [string, string[]] {
  const infoParts = info.split("  ").filter((part) => part !== "");
  let tags = infoParts.slice(1).map(removeHtmlTags);
  tags = cleanTags(tags);
  return [infoParts[0], tags];
}

function cleanTags(tags: string[]): string[] {
  return tags
    .map((tag) => tag.split(" "))
    .flat()
    .map((tag) => tag.replace(/[^a-zA-Z]/g, ""))
    .map((tag) => tag.toLowerCase())
    .map((tag) => tagEmojis[tag] ?? `${tag.toUpperCase()}`);
}

function removeHtmlTags(text: string): string {
  return text.replace(/<[^>]*>/g, "");
}
