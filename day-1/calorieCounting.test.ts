import { calorieCounting } from './calorieCounting';

describe('part one', () => {
  test('calorieCounting example', () => {
    const elfFood = calorieCounting('day-1/example.txt');

    expect(elfFood).toEqual(24000);
  });

  test('calorieCounting input', () => {
    const elfFood = calorieCounting('day-1/input.txt');

    expect(elfFood).toEqual(71023);
  });
});

describe('part two', () => {
  test('top three elves calorieCounting summed example', () => {
    const elfFood = calorieCounting('day-1/example.txt', 3);

    expect(elfFood).toEqual(45000);
  });

  test('calorieCounting input', () => {
    const elfFood = calorieCounting('day-1/input.txt', 3);

    expect(elfFood).toEqual(206289);
  });
});
