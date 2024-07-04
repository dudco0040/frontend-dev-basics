/* Lexical Scope */
var f1 = function() {
    var s = 'hello world';

    var inner = function(){
        console.log(s);
    }
    inner();
}

f1();

/* Closure */
var f2 = function(){
    var s = 'hello world';
    var inner = function(){
        console.log(s);
    }
    return inner;
}

var Closure = f2();