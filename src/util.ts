import { config } from "./config";

export function validateEnv() {
  for (const restaurant of config.restaurants) {
    const name = restaurant.name.toUpperCase();
    if (!process.env[`${name}_WEBHOOK`]) {
      throw new Error(`Missing ${name}_WEBHOOK environment variable`);
    }
  }
}

export function splitMessage(message: string): string[] {
  const chunks = [];

  const lines = message.split("\n");
  let chunk = "";

  for (const line of lines) {
    if (chunk.length + line.length > 2000) {
      chunks.push(chunk);
      chunk = "";
    }

    chunk += line + "\n";
  }

  chunks.push(chunk);
  return chunks;
}
