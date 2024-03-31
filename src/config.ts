import { IConfig, ParseMode } from "./types";

// Get the id by typing \:emojiName: in discord
export const tagEmojis: Record<string, string> = {
  m: "<:maidoton:1223943979557715999>",
  l: "<:laktoositon:1223943978307682386>",
  vl: "<:vahalaktoosinen:1223943982887735328>",
  k: "<:kananmunaton:1223943963648594022>",
  n: "<:naudanlihaton:1223943980446912593>",
  g: "<:gluteiniton:1223943947223830539>",
  s: "<:sianlihaton:1223943981881102446>",
  ve: "<:vegaaninen:1223943984649470042>",
  veg: "<:vegaaninen:1223943984649470042>",
};

export const config: IConfig = {
  restaurants: [
    // Kumpula
    {
      name: "Chemicum",
      endpoint: "https://www.lounaat.info/lounas/unicafe-chemicum/helsinki",
      parseMode: ParseMode.LOUNAAT_INFO,
    },
    {
      name: "Exactum",
      endpoint: "https://www.lounaat.info/lounas/unicafe-exactum/helsinki",
      parseMode: ParseMode.LOUNAAT_INFO,
    },
    {
      name: "Physicum",
      endpoint: "https://www.lounaat.info/lounas/unicafe-physicum/helsinki",
      parseMode: ParseMode.LOUNAAT_INFO,
    },

    // Helsingin keskusta
    {
      name: "Portaali",
      endpoint:
        "https://www.lounaat.info/lounas/unicafe-cafe-portaali/helsinki",
      parseMode: ParseMode.LOUNAAT_INFO,
    },
    {
      name: "Kaisa",
      endpoint:
        "https://www.lounaat.info/lounas/unicafe-well-kaisa-talo/helsinki",
      parseMode: ParseMode.LOUNAAT_INFO,
    },
    {
      name: "Kaivopiha",
      endpoint:
        "https://www.lounaat.info/lounas/unicafe-ylioppilasaukio/helsinki",
      parseMode: ParseMode.LOUNAAT_INFO,
    },
    {
      name: "Metsatalo",
      endpoint: "https://www.lounaat.info/lounas/unicafe-metsatalo/helsinki",
      parseMode: ParseMode.LOUNAAT_INFO,
    },
    {
      name: "Olivia",
      endpoint: "https://www.lounaat.info/lounas/unicafe-olivia/helsinki",
      parseMode: ParseMode.LOUNAAT_INFO,
    },
    {
      name: "Porthania",
      endpoint: "https://www.lounaat.info/lounas/unicafe-porthania/helsinki",
      parseMode: ParseMode.LOUNAAT_INFO,
    },
    {
      name: "Rotunda",
      endpoint: "https://www.lounaat.info/lounas/unicafe-rotunda/helsinki",
      parseMode: ParseMode.LOUNAAT_INFO,
    },
    {
      name: "Sockom",
      endpoint: "https://www.lounaat.info/lounas/unicafe-soc-kom/helsinki",
      parseMode: ParseMode.LOUNAAT_INFO,
    },
    {
      name: "Topelias",
      endpoint:
        "https://www.lounaat.info/lounas/unicafe-pesco-vege-topelias/helsinki",
      parseMode: ParseMode.LOUNAAT_INFO,
    },

    // Meilahti
    {
      name: "Meilahti",
      endpoint: "https://www.lounaat.info/lounas/unicafe-meilahti/helsinki",
      parseMode: ParseMode.LOUNAAT_INFO,
    },

    // Viikki
    {
      name: "Biokeskus3",
      endpoint: "https://www.lounaat.info/lounas/unicafe-biokeskus/helsinki",
      parseMode: ParseMode.LOUNAAT_INFO,
    },
    {
      name: "Infokeskus",
      endpoint: "https://www.lounaat.info/lounas/unicafe-infokeskus/helsinki",
      parseMode: ParseMode.LOUNAAT_INFO,
    },
    {
      name: "Tahka",
      endpoint: "https://www.lounaat.info/lounas/unicafe-tahka/helsinki",
      parseMode: ParseMode.LOUNAAT_INFO,
    },
    {
      name: "Viikuna",
      endpoint: "https://www.lounaat.info/lounas/unicafe-viikuna/helsinki",
      parseMode: ParseMode.LOUNAAT_INFO,
    },
  ],
};
