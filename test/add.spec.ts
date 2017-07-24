import { add } from '../src/add.ts';

describe('Add', () => {
  it('should add numbers', () => {
    expect(add(1,2)).toEqual(3);
  });
});
