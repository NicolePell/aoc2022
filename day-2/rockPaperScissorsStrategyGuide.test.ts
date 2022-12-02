import { PART_ONE_SCORES, PART_TWO_SCORES, testRockPaperScissorsStrategy } from './rockPaperScissorsStrategyGuide';

describe('day 2', () => {
  describe('part 1', () => {
    test('calculates the score for a round correctly for example input', () => {
      expect(testRockPaperScissorsStrategy('day-2/example.txt', PART_ONE_SCORES)).toEqual(15);
    });
  });

  describe('part 2', () => {
    test('calculates the score for a round correctly for example input', () => {
      expect(testRockPaperScissorsStrategy('day-2/example.txt', PART_TWO_SCORES)).toEqual(12);
    });
  });
});
