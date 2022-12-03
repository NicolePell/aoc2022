import { parseTextFile } from '../parseTextFile';

export const rucksuckReorganisation = (path: string) => {
  return parseTextFile(path)
    .split('\n')
    .filter((val) => val !== '')
    .flatMap((rucksack) => {
      const middle = rucksack.length / 2;
      const compartmentOne = rucksack.split('').splice(0, middle);
      const compartmentTWo = rucksack.split('').splice(middle);

      return [...new Set(compartmentOne.filter((item) => compartmentTWo.includes(item)))];
    })
    .reduce((previousValue, currentItem) => {
      return previousValue + letterScore[currentItem];
    }, 0);
};

export const findGroupBadgeAuthenticityStickers = (path: string) => {
  return parseTextFile(path)
    .split('\n')
    .filter((val) => val !== '')
    .reduce((groups: string[][], elf, currentIndex) => {
      const chunkIndex = Math.floor(currentIndex / 3);

      if (!groups[chunkIndex]) {
        groups[chunkIndex] = [];
      }
      groups[chunkIndex].push(elf);

      return groups;
    }, [])
    .flatMap((group) => {
      const elfOne = group[0].split('');
      const elfTwo = group[1].split('');
      const elfThree = group[2].split('');

      const same = elfOne.filter((item) => elfTwo.includes(item));
      return [...new Set(same.filter((item) => elfThree.includes(item)))];
    })
    .reduce((previousValue, currentItem) => {
      return previousValue + letterScore[currentItem];
    }, 0);
};

const letterScore: { [key: string]: number } = {
  ['a']: 1,
  ['b']: 2,
  ['c']: 3,
  ['d']: 4,
  ['e']: 5,
  ['f']: 6,
  ['g']: 7,
  ['h']: 8,
  ['i']: 9,
  ['j']: 10,
  ['k']: 11,
  ['l']: 12,
  ['m']: 13,
  ['n']: 14,
  ['o']: 15,
  ['p']: 16,
  ['q']: 17,
  ['r']: 18,
  ['s']: 19,
  ['t']: 20,
  ['u']: 21,
  ['v']: 22,
  ['w']: 23,
  ['x']: 24,
  ['y']: 25,
  ['z']: 26,
  ['A']: 27,
  ['B']: 28,
  ['C']: 29,
  ['D']: 30,
  ['E']: 31,
  ['F']: 32,
  ['G']: 33,
  ['H']: 34,
  ['I']: 35,
  ['J']: 36,
  ['K']: 37,
  ['L']: 38,
  ['M']: 39,
  ['N']: 40,
  ['O']: 41,
  ['P']: 42,
  ['Q']: 43,
  ['R']: 44,
  ['S']: 45,
  ['T']: 46,
  ['U']: 47,
  ['V']: 48,
  ['W']: 49,
  ['X']: 50,
  ['Y']: 51,
  ['Z']: 52,
};
