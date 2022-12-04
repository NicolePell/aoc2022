import { campCleanupPartOne, campCleanupPartTwo } from './campCleanup';

describe('DAY 4', () => {
  describe('PART 1', () => {
    test('Example', () => {
      expect(campCleanupPartOne('day-4/example.txt')).toBe(2);
    });

    test('Input', () => {
      expect(campCleanupPartOne('day-4/input.txt')).toBe(515);
    });
  });

  describe('PART 2', () => {
    test('Example', () => {
      expect(campCleanupPartTwo('day-4/example.txt')).toBe(4);
    });

    test('Input', () => {
      expect(campCleanupPartTwo('day-4/input.txt')).toBe(883);
    });
  });
});
