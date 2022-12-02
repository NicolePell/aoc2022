import { calorieCounting } from './calorieCounting';

describe('part one', () => {
  test('calorieCounting example', () => {
    const elfFood = calorieCounting('day-1/example.txt');

    expect(elfFood).toEqual(24000);
  });
});

describe('part two', () => {
  test('top three elves calorieCounting summed example', () => {
    const elfFood = calorieCounting('day-1/example.txt', 3);

    expect(elfFood).toEqual(45000);
  });
});
