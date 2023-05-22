import axios from "axios";
import fs from "fs";

const url = "";

await axios.get(url, { responseType: 'arraybuffer' })
  .then ((response) => {
    const image = Buffer.from(response.data, 'binary');
    const convert = image.toString('base64');
    fs.writeFile("file.txt", convert, (error) => {
        if (error) {
          console.error(error);
        }
    });
  })
  .catch((error) => {
    console.error(error);
  })
;