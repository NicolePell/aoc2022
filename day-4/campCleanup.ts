import { parseTextFile } from '../parseTextFile';

export const campCleanup = (path: string) => {
  return parseTextFile(path)
    .split('\n')
    .filter((val) => val !== '')
    .map((pairs) => pairs.split(','))
    .map((pair) => pair.map((section) => section.split('-').map((section) => Number.parseInt(section))))
    .map((pair) => pair.map((section) => range(section[0], section[1])))
    .map((pair) => {
      const [sectionOne, sectionTwo]: number[][] = pair;

      const overlap = sectionOne.every((v) => sectionTwo.includes(v));
      const overlapTwo = sectionTwo.every((v) => sectionOne.includes(v));

      return overlap || overlapTwo ? 1 : 0;
    })
    .reduce((previousValue: number, currentValue: number) => {
      return previousValue + currentValue;
    }, 0);
};

const range = (start: number, stop: number, step = 1) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
