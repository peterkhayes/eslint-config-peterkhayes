import fs from 'fs/promises';

async function loadFile() {
  const filename = String(process.env.FILENAME);
  const result = await fs.readFile(filename);
  console.log(result.toString());
}

loadFile().then(() => {});
