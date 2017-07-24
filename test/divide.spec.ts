import { divide } from '../src/divide.ts';

describe('Divide', () => {
  it('should divide numbers', () => {
    expect(divide(6,2)).toEqual(3);
  });
});
