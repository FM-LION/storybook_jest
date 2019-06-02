describe('scope closure', () => {

    it('Closure ?', () => {
        function foo() {
            var a = 2;
        
            function bar() {
                expect(a).toEqual(2);
            }
        
            bar();
        }
        
        foo();
    });

    it('Closure!', () => {
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

    it('setTimeout', (done)=> {
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

    it('IIFE', () => {
        var a = 2;

        (function IIFE(){
            expect(a).toEqual(2);
        })();
    });

    it('Loops + Closure', (done) => {
        jest.useFakeTimers();
        for (var i=1; i<=5; i++) {
            setTimeout( function timer(){
                expect(i).toEqual(6);
                done();
            }, i*1000 );
        }
        jest.runAllTimers();
    });

    it('Loops + Closure IIFE', (done) => {
        jest.useFakeTimers();
        for (var i=1; i<=5; i++) {
            (function(){
                setTimeout( function timer(){
                    expect(i).toEqual(6);
                    done();
                }, i*1000 );
            })();
        }        jest.runAllTimers();
    });

    it('Loops + Closure IIFE var j', (done) => {
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


    it('Revealing Module', () => {
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

    it('Modern Modules', ()=> {
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