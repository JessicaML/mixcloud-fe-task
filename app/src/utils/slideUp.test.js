import removeOrReplaceNotif from './slideUp';

describe('removeOrReplaceNotif', () => {
  let value = '23';
  const data = {
    2: ['x', 'y', 'z'],
    3: ['t', 'u', 'v'],
  };

  describe('when the value.length 2 is provided', () => {
    it('returns an array of combinations from each number in the value', () => {
      expect(removeOrReplaceNotif(value, data)).toEqual(['xt', 'xu', 'xv', 'yt', 'yu', 'yv', 'zt', 'zu', 'zv']);
    });
  });

  describe('when the value.length is more than 2', () => {
    beforeEach(() => {
      value = '243';
    });

    it('returns null', () => {
      expect(removeOrReplaceNotif(value, data)).toEqual(null);
    });
  });

  describe('when the value.length is less than 2', () => {
    beforeEach(() => {
      value = '2';
    });
    it('returns null', () => {
      expect(removeOrReplaceNotif(value, data)).toEqual(null);
    });
  });
});