import { parseTextFile } from '../parseTextFile';

export const calorieCounting = (path: string, numberOfElvesToCheck: number = 1) => {
  const data = parseTextFile(path);

  return data
    .split(`\n\n`)
    .map((elvesBags) => elvesBags.split(`\n`))
    .map((elfBag) =>
      elfBag
        .map((snackCalories) => {
          return Number.parseInt(snackCalories);
        })
        .filter((val) => !isNaN(val))
        .reduce((previousValue, currentValue) => {
          return previousValue + currentValue;
        }, 0)
    )
    .sort((a, b) => b - a)
    .slice(0, numberOfElvesToCheck)
    .reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);
};
