/*
변수와 자료형(data type)

[기본 타입, primitive type]
- undefined
- number
- string
- boolean

[객체 타입, Object] ***
- object
    1. new 생성자함수 사용해서 생성
    Number() -> object 타입의 객체
    String() -> object 타입의 객체
    Boolean() -> object 타입의 객체
    Object() -> object 타입의 객체
    Arrsy() -> object 타입의 객 체
    Date() -> object 타입의 객체
    RegExp() -> object 타입의 객체
- function
*/

console.log("=== 기본타입(undefinde, number, string, boolean) ===");
var u;
var i = 10;
var s = 'hello world'
var b = true;

console.log("u:" + typeof(u));
console.log("i:" + typeof(i));
console.log("s:" + typeof(s));
console.log("b:" + typeof(b));

console.log("=== 객체타입(object) ===");
var i2 = new Number(10);
var s2 = new String("hello world");
var b2 = new Boolean(false);
var o = {};
var a = [];
var n = null;

console.log("i2:" + typeof(i2));
console.log("s2:" + typeof(s2));
console.log("b2:" + typeof(b2));
console.log("o:" + typeof(o));
console.log("a:" + typeof(a));
console.log("n:" + typeof(n));