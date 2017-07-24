import { multiply } from '../src/multiply.ts';

describe('Multiply', () => {
  it('should multiply numbers', () => {
    expect(multiply(4,2)).toEqual(8);
  });
});
