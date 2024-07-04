/*
변수의 스코프(Scope)

1. 자바스크립트는 코드에서 변수의 범위를 알 수 있다.(정적 스코프)
2. 자바스크립트는 전역 범위가 있다.
3. ES6 이전(<=ES5)
    - 자바와 같은 블록 범위를 지원하지 않는다.
    - 함수 범위만 지원
    - var 키워드를 사용해야 함수 범위를 가진다.
4. ES6 이후(ES2015~ ES2024)
*/

// 함수 범위만 가지는 var
var i = 20;
var f = function(){
    var i = 10;
    j = 100;

    console.log(i);
    
    j = j - i;
}

f(); // 함수 호출
console.log(i); // 함수 호출이 끝나면 사라짐 - function 함수 안에서 정의된 변수가 아닌 밖에 설정된 i값을 반환 
console.log(j);

console.log("=== var 키워드는 함수 블록에서만 범위를 만든다. ===");
if(90 + 10  == 100){
    var k = 10;
} 

console.log(k);
// console.log(x); // not defined