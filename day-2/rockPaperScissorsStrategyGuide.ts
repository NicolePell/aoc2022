import { parseTextFile } from '../parseTextFile';

enum GameChoices {
  ROCK = 1,
  PAPER = 2,
  SCISSORS = 3,
}
type ScoreCombinations = { [key: string]: number };

const WIN_POINTS = 6;
const DRAW_POINTS = 3;
export const PART_ONE_SCORES: ScoreCombinations = {
  ['A X']: DRAW_POINTS + GameChoices.ROCK,
  ['A Y']: WIN_POINTS + GameChoices.PAPER,
  ['A Z']: GameChoices.SCISSORS,
  ['B X']: GameChoices.ROCK,
  ['B Y']: DRAW_POINTS + GameChoices.PAPER,
  ['B Z']: WIN_POINTS + GameChoices.SCISSORS,
  ['C X']: WIN_POINTS + GameChoices.ROCK,
  ['C Y']: GameChoices.PAPER,
  ['C Z']: DRAW_POINTS + GameChoices.SCISSORS,
};

export const PART_TWO_SCORES: ScoreCombinations = {
  ['A X']: GameChoices.SCISSORS, //lose
  ['A Y']: DRAW_POINTS + GameChoices.ROCK, //draw
  ['A Z']: WIN_POINTS + GameChoices.PAPER, //win
  ['B X']: GameChoices.ROCK,
  ['B Y']: DRAW_POINTS + GameChoices.PAPER,
  ['B Z']: WIN_POINTS + GameChoices.SCISSORS,
  ['C X']: GameChoices.PAPER,
  ['C Y']: DRAW_POINTS + GameChoices.SCISSORS,
  ['C Z']: WIN_POINTS + GameChoices.ROCK,
};

export const testRockPaperScissorsStrategy = (path: string, scoreCombinations: ScoreCombinations) => {
  return parseTextFile(path)
    .split('\n')
    .filter((val) => val !== '')
    .reduce((previousValue, currentValue) => {
      return previousValue + scoreCombinations[currentValue];
    }, 0);
};
