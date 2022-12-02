import fs from "fs";

export function parseTextFile(path: string) {
  return fs.readFileSync(path, {encoding: 'utf8', flag: 'r'});
}
