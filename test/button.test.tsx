describe('測試', () => {
    it('2 + 2 = 4', () => {
      expect(2 + 2).toBe(4);
    });

    it('4 + 5 = 4', () => {
        expect(4 + 5).toBe(4);
    });

    it('object assignment', () => {
        const data = {one: 1};
        data['two'] = 2;
        expect(data).toEqual({one: 1, two: 2});
    });
});