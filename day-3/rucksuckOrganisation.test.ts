import { rucksuckOrganisation } from './rucksuckOrganisation';

describe('DAY 3', () => {
  describe('PART 1', () => {
    test('Example', () => {
      expect(rucksuckOrganisation('day-3/example.txt')).toBe(157);
    });
  });

  describe('PART 2', () => {
    test('Example', () => {
      expect(rucksuckOrganisation('day-3/example.txt')).toEqual(false);
    });

    test('Input', () => {
      expect(rucksuckOrganisation('day-3/input.txt')).toEqual(false);
    });
  });
});
