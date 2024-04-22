import { parse } from "csv-parse";
import fs from "fs";

export const convert = (pathToCsv, outputFilePath) => {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(pathToCsv);
    const data = [];
    let columns = [];

    readStream
      .pipe(parse({ delimiter: ",", from_line: 1, to_line: 1 }))
      .on("data", (row) => {
        columns = [...row];
      })
      .on("end", () => {
        getData(readStream, columns, data, outputFilePath)
          .then(() => resolve({ data }))
          .catch((err) => reject({ error: err, isError: true }));
      })
      .on("error", (err) => reject({ error: err, isError: true }));
  });
};

const getData = (readStream, columns, data, outputFilePath) => {
  return new Promise((resolve, reject) => {
    readStream
      .pipe(parse({ delimiter: ",", from_line: 2 }))
      .on("data", (row) => {
        const obj = {};

        for (let i = 0; i < row.length; i++) {
          obj[columns[i]] = row[i];
        }

        data.push(obj);
      })
      .on("end", () => {
        const writableStream = fs.createWriteStream(outputFilePath);

        writableStream.write(JSON.stringify(data, null, 2));

        writableStream.end();

        writableStream.on("finish", () => resolve());
        writableStream.on("error", (err) => reject(err));
      })
      .on("error", (err) => reject(err));
  });
};
