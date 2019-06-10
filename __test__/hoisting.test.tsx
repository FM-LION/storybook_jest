import { number } from "prop-types";

describe('hoisting', () => {
    it('1. a 輸出 2', () => {
        //reveived => expected
        a = 2;
        var a;
        expect(a).toEqual(2);
    });

    it('2. a 輸出 undefined', () => {
        expect(a).toEqual(undefined);
        var a = 2;
    });

    it('3. (1)的結果如同', () => {
        var a;
        a = 2;
        expect(a).toEqual(2);
    });

    it('4. (2)的結果如同', () => {
        var a;
        expect(a).toEqual(undefined);
        a = 2;
    });

    it('5. a 在 foo function 輸出為 undefined', () => {
        foo();
        function foo() {
            expect(a).toEqual(undefined);
            var a = 2;
        }
        
    });

    it('6. (5)的結果如同', () => {
        function foo() {
            var a;
            expect(a).toEqual(undefined);
            a = 2;
        }
        
        foo();
    });


    it('7. foo 用賦值的方式給function內容', () => {
         // foo() not ReferenceError, but TypeError!
        let result;
        try {
            result = foo();
        } catch (error) {
            result = () => {
                throw new TypeError();
            };
        }
        expect(result).toThrow(TypeError);
        var foo = function bar() {
            // ... dosomthing
        };
    });

    it('8. (7)延伸 TypeError 與 ReferenceError', () => {
        // foo() TypeError
        let fooResult;
        try {
            fooResult = foo();
        } catch (error) {
            fooResult = () => {
                throw new TypeError();
            };
        }
        expect(fooResult).toThrow(TypeError);

        // bar() //ReferenceError
        const bar = () => {
            throw new ReferenceError();
        }
        expect(bar).toThrow(ReferenceError);

        var foo = function bar() {
            // ... dosomthing
        };
    });

    /*
    it('9. 在 function宣告 bar', () => {
        var foo;

        foo(); // TypeError
        bar(); // ReferenceError

        foo = function() {
            var bar = ...self...
            // ...
        }
    });
    */

   /*
   it('10. Functions First', () => {
        foo(); // 1
        var foo;
        function foo() {
            console.log(1);
        }
        foo = function() {
            console.log(2);
        };
    })
    */

    /*
   it('11. Functions First', () => {
        function foo() {
            console.log( 1 );
        }

        foo(); // 1

        foo = function() {
            console.log( 2 );
        };
    })
    */

   /*
   it('12. While multiple/duplicate var declarations are effectively ignored, subsequent function declarations do override previous ones.', () => {
        foo(); // 3

        function foo() {
            console.log( 1 );
        }

        var foo = function() {
            console.log( 2 );
        };

        function foo() {
            console.log( 3 );
        }
    })
    */
    

   /*
   it('13. avoid declaring functions in blocks', () => {
        foo(); // "b" (result TypeError)
        var a = true;
        if (a) {
            function foo() { console.log( "a" ); }
        } else {
            function foo() { console.log( "b" ); }
        }
    });
    */

    /*
    it('final test', () => {
        function hoistFunction() {
            foo(); // 2

            var foo = function() {
                console.log(1);
            };

            foo(); // 1

            function foo() {
                console.log(2);
            }

            foo(); // 1
        }

        hoistFunction();

    })
    */   
});