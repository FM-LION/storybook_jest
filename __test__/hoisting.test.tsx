import { number } from "prop-types";

describe('hoisting', () => {
    it('undefined or ReferenceError: a is not defined ?? ', () => {
        //reveived => expected
        expect(a).toEqual(undefined);
        var a = 2;
    });
/*
    it('function', () => {
        foo();
        function foo() {
            expect(a).toEqual(undefined);
            var a = 2;
        }
        
    });

    it('not ReferenceError, but TypeError', () => {
        foo();
        var foo = function bar() {
        };
    });

    it('', () => {
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

    it('not ReferenceError, but TypeError', () => {
        foo();
        var foo = function bar() {
            // .... dosomthing
        };
    });

    it('TypeError && ReferenceError', () => {
        foo(); // TypeError
        bar(); // ReferenceError
        var foo = function bar() {
            // ... dosomthing
        };
    });
    
    it('call foo(), result 1 or 2 ?', () => {
        foo();
        var foo;
        function foo() {
            console.log(1);
        }
        foo = function() {
            console.log(2);
        };
    })
    
    it('call foo(), result 1 or 2 or 3 ?', () => {
        foo();
        function foo() {
            console.log( 1 );
        }
        var foo = function() {
            console.log( 2 );
        };
        function foo() {
            console.log( 3 );
        }
        foo()
    });

    it('avoid declaring functions in blocks', () => {
        foo(); // "b" (result TypeError)
        var a = true;
        if (a) {
            function foo() { console.log( "a" ); }
        } else {
            function foo() { console.log( "b" ); }
        }
    });
    */




});