import { campCleanup } from './campCleanup';

describe('DAY 4', () => {
  describe('PART 1', () => {
    test('Example', () => {
      expect(campCleanup('day-4/example.txt')).toBe(2);
    });

    test('Input', () => {
      expect(campCleanup('day-4/input.txt')).toBe(515);
    });
  });

  xdescribe('PART 2', () => {
    test('Example', () => {
      expect(campCleanup('day-4/example.txt')).toBe(false);
    });

    test('Input', () => {
      expect(campCleanup('day-4/input.txt')).toBe(false);
    });
  });
});
