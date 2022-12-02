import { playRockPaperScissors } from './playRockPaperScissors';

describe('day 2, part 1', () => {
  test('calculates the score for a round correctly for example input', () => {
    expect(playRockPaperScissors('day-2/example.txt')).toEqual(15);
  });

  test('calculates the score for a round correctly for given input', () => {
    expect(playRockPaperScissors('day-2/input.txt')).toEqual(9177);
  });
});
