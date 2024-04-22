# csv-to-json

A simple csv to json converter 🤗.

> Disclaimer: The dataset in the demo folder has nothing to do with me. I downloaded it from kaggle.
> Here's the link: [View dataset on kaggle](https://www.kaggle.com/datasets/CooperUnion/anime-recommendations-database)

## Project structure

This is a very simple project. It contains two primary folders namely /src and /demo.

- src - contains project source code
- demo - contains a script to show the project working using an example

## Main features

- Converts csv data to an array of json objects
- Returns the array
- Write to a file as provided

## Usage

Run `npm install csv-to-json-writer` to install

## Example

```js
import path from "path";
import { convert } from "csv-to-json-writer";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const readFilePath = path.resolve(__dirname, "data/anime.csv");
const writeFilePath = path.resolve(__dirname, "data/anime.json");

convert(readFilePath, writeFilePath)
  .then((result) => console.log("Conversion successful!", result))
  .catch((err) => console.error("Conversion error!", err));
```

In this example as you can see you have to provide the path of both, the csv file and the output json file respectively.
