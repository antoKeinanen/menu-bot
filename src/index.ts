import { config } from "./config";
import { fetchMenu, handleParse } from "./scraper";
import { validateEnv } from "./util";
import { sendMenuWebhook } from "./webhook";

validateEnv();

for (const restaurant of config.restaurants) {
  const content = await fetchMenu(restaurant.endpoint);
  const parsedMenu = handleParse(content, restaurant.parseMode);
  sendMenuWebhook(parsedMenu, restaurant);
}
