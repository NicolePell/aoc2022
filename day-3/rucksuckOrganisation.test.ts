import { findGroupBadgeAuthenticityStickers, rucksuckReorganisation } from './rucksuckReorganisation';

describe('DAY 3', () => {
  describe('PART 1', () => {
    test('Example', () => {
      expect(rucksuckReorganisation('day-3/example.txt')).toBe(157);
    });
  });

  describe('PART 2', () => {
    test('Example', () => {
      expect(findGroupBadgeAuthenticityStickers('day-3/example.txt')).toBe(70);
    });
  });
});
