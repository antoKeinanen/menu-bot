import * as cheerio from "cheerio";
import { Menu, MenuItem, ParseMode } from "./types";

export async function fetchMenu(url: string): Promise<string> {
  const response = await fetch(url);
  return response.text();
}

export function handleParse(content: string, parseMode: ParseMode) {
  switch (parseMode) {
    case ParseMode.LOUNAAT_INFO:
      return parseLounaatInfo(content);
    default:
      throw new Error("Unknown parse mode");
  }
}

function parseLounaatInfo(content: string): Menu[] {
  const menuOut: Menu[] = [];
  const $ = cheerio.load(content);
  $("#menu").each((_, menu) => {
    $(menu)
      .find(".item")
      .each((dayIndex, day) => {
        let menuItems: MenuItem[] = [];
        const date = $(day).find(".item-header").text();
        $(day)
          .find(".menu-item")
          .each((_, menuItem) => {
            const dish = $(menuItem).find(".dish").text();
            const info = $(menuItem).find(".info").text();
            const footer = $(menuItem).find(".footer").text();
            menuItems.push({ dish, info, footer });
          });
        menuOut[dayIndex] = { menu: menuItems, date };
      });
  });
  return menuOut;
}
