describe('scope closure', () => {
    it('Loops + Closure ', async () => {
        for (var i=1; i<=5; i++) {
            await setTimeout( function timer(){
              expect(i).toEqual(633);
            }, i*1000 );
        }
    });
})