import { substract } from '../src/substract.ts';

describe('Substract', () => {
  it('should substract numbers', () => {
    expect(substract(5,3)).toEqual(2);
  });
});
