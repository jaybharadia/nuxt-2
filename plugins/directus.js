import { Directus } from "@directus/sdk";

const directus = new Directus("https://products.7span.in");

const getData = async () => {
  const pages = await directus.items("sw_pages").readByQuery({
    fields: ["*"],
  });
  console.log("🚀 ~ file: directus.js:7 ~ pages ~ pages:", pages);
};

getData();
