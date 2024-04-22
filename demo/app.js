import path from "path";
import { convert } from "../src/index.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const readFilePath = path.resolve(__dirname, "data/anime.csv");
const writeFilePath = path.resolve(__dirname, "data/anime.json");

convert(readFilePath, writeFilePath)
  .then((result) => console.log("Conversion successful!", result))
  .catch((err) => console.error("Conversion error!", err));
