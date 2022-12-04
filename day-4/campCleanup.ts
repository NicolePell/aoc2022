import { parseTextFile } from '../parseTextFile';

export const campCleanupPartOne = (path: string) => {
  return getSections(path).map(calculateExactOverlaps()).reduce(calculateResult(), 0);
};

export const campCleanupPartTwo = (path: string) => {
  return getSections(path).map(calculateAllOverlaps()).reduce(calculateResult(), 0);
};

function calculateExactOverlaps(): (pair: number[][]) => 1 | 0 {
  return (pair: number[][]) => {
    const [sectionOne, sectionTwo]: number[][] = pair;

    const overlap = sectionOne.every((v) => sectionTwo.includes(v));
    const overlapTwo = sectionTwo.every((v) => sectionOne.includes(v));

    return overlap || overlapTwo ? 1 : 0;
  };
}

function calculateAllOverlaps(): (pair: number[][]) => 1 | 0 {
  return (pair: number[][]) => {
    const [sectionOne, sectionTwo]: number[][] = pair;

    const overlap = sectionOne.some((v) => sectionTwo.includes(v));
    const overlapTwo = sectionTwo.some((v) => sectionOne.includes(v));

    return overlap || overlapTwo ? 1 : 0;
  };
}

const range = (start: number, stop: number, step = 1) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

function getSections(path: string) {
  return parseTextFile(path)
    .split('\n')
    .filter((val) => val !== '')
    .map((pairs) => pairs.split(','))
    .map((pair) => pair.map((section) => section.split('-').map((section) => Number.parseInt(section))))
    .map((pair) => pair.map((section) => range(section[0], section[1])));
}

function calculateResult() {
  return (previousValue: number, currentValue: number) => {
    return previousValue + currentValue;
  };
}
