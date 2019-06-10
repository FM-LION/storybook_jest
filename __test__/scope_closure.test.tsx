describe('scope closure', () => {

    it('1. 算閉包嗎?', () => {
        function foo() {
            var a = 2;
        
            function bar() {
                expect(a).toEqual(2);
            }
        
            bar();
        }
        
        foo();
    });

    it('2. 這是閉包!', () => {
        function foo() {
            var a = 2;
        
            function bar() {
                expect(a).toEqual(2);
            }
        
            return bar;
        }
        
        var baz = foo();
        
        baz();
    });

    it('3. 這也是閉包!', () => {
        function foo() {
            var a = 2;
        
            function baz() {
                expect(a).toEqual(2);
            }
        
            bar( baz );
        }
        
        function bar(fn) {
            fn(); // look ma, I saw closure!
        }

        foo();
    });

    it('4. 這也是閉包!', () => {
        var fn;
        function foo() {
            var a = 2;

            function baz() {
                console.log( a );
            }

            fn = baz; // assign `baz` to global variable
        }

        function bar() {
            fn(); // look ma, I saw closure!
        }

        foo();

        bar(); // 2
    });

    it('5. setTimeout', (done)=> {
        function wait(message) {
            jest.useFakeTimers();
            setTimeout( function timer(){
                expect(message).toEqual("Hello, closure!");
                done();
            }, 1000 );
            jest.runAllTimers();
        } 
        wait( "Hello, closure!" );
    })

    /*
    it('6. jQuery Event', ()=> {
        function setupBot(name,selector) {
            $( selector ).click( function activator(){
                console.log( "Activating: " + name );
            } );
        }
        
        setupBot( "Closure Bot 1", "#bot_1" );
        setupBot( "Closure Bot 2", "#bot_2" );
    })
    */
    

    it('7. IIFE', () => {
        var a = 2;

        (function IIFE(){
            expect(a).toEqual(2);
        })();
    });

    it('8. Loops + Closure', (done) => {
        jest.useFakeTimers();
        for (var i=1; i<=5; i++) {
            setTimeout( function timer(){
                expect(i).toEqual(6);
                done();
            }, i*1000 );
        }
        jest.runAllTimers();
    });

    it('9. Loops + Closure IIFE', (done) => {
        jest.useFakeTimers();
        for (var i=1; i<=5; i++) {
            (function(){
                setTimeout( function timer(){
                    expect(i).toEqual(6);
                    done();
                }, i*1000 );
            })();
        }       
        jest.runAllTimers();
    });

    it('10. Loops + Closure IIFE var j', (done) => {
        jest.useFakeTimers();
        for (var i=1; i<=5; i++) {
            (function(){
                var j = i;
                setTimeout( function timer(){
                    console.log(j);
                    expect(j).toEqual(j);
                    done();
                }, i*1000 );
            })();
        }        
        jest.runAllTimers();
    });

    it('11. Loops + Closure IIFE pass i', () => {
        for (var i=1; i<=5; i++) {
            (function(j){
                setTimeout( function timer(){
                    console.log( j );
                }, j*1000 );
            })( i );
        }
    });

    it('12. Loops + Closure IIFE pass i', () => {
        for (var i=1; i<=5; i++) {
            let j = i; // yay, block-scope for closure!
            setTimeout( function timer(){
                console.log( j );
            }, j*1000 );
        }
    });

    it('13. Loops + Closure IIFE pass i', () => {
        for (let i=1; i<=5; i++) {
            setTimeout( function timer(){
                console.log( i );
            }, i*1000 );
        }
    });


    it('14. Revealing Module', () => {
        function CoolModule(id) {
            function identify() {
                console.log( id );
            }
        
            return {
                identify: identify
            };
        }
        
        var foo1 = CoolModule( "foo 1" );
        var foo2 = CoolModule( "foo 2" );
        
        foo1.identify(); // "foo 1"
        foo2.identify(); // "foo 2"
    });

    it('15.Modern Modules', ()=> {
        var MyModules = (function Manager() {
            var modules = {};
        
            function define(name, deps, impl) {
                for (var i=0; i<deps.length; i++) {
                    deps[i] = modules[deps[i]];
                }
                modules[name] = impl.apply( impl, deps );
            }
        
            function get(name) {
                return modules[name];
            }
        
            return {
                define: define,
                get: get
            };
        })();

        MyModules.define( "bar", [], function(){
            function hello(who) {
                return "Let me introduce: " + who;
            }
        
            return {
                hello: hello
            };
        });

        MyModules.define( "foo", ["bar"], function(bar){
            var hungry = "hippo";
        
            function awesome() {
                console.log( bar.hello( hungry ).toUpperCase() );
            }
        
            return {
                awesome: awesome
            };
        } );
        
        var bar = MyModules.get( "bar" );
        var foo = MyModules.get( "foo" );
        
        console.log(
            bar.hello( "hippo" )
        ); // Let me introduce: hippo
        
        foo.awesome(); // LET ME INTRODUCE: HIPPO
    })

    /*
    it('Future Modules', () => {
        function hello(who) {
            return "Let me introduce: " + who;
        }
        
        export hello;
    })*/
})