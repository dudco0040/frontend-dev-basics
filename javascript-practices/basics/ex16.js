/*
 자바스크립트 함수 : function 타입의 객체 
 */


// 함수를 생성(정의) 방법 
//1. 
function f1(a,b){
    return a+b;
}

console.log(typeof(f1), f1(10, 20));

//2. 추천!!
var f2 = function(a,b){
    return a+b;
}

console.log(typeof(f2), f2(10, 20));

//3.
var f3 = new Function('a', 'b', 'return a + b');
console.log(typeof(f3), f3(10, 20));


//4. 익명(Anonymous) 함수
setTimeout(function(){
    console.log("time out!");
}, 1000);

//5. 즉시 실행 함수 - 라이브러리를 초기화하기 위해 변
var s = (function(a,b){
    return a+b;
})(10,20);

console.log(s);  // 바로 호출



// 가변 파라미터 
var sum = function() {
    // arguments

    // 구현 1
    // for(var i = 0; i < arguments.length; i++){
    //     sum += arguments[i];
    // }

    // 구현2 error
    console.log(arguments instanceof(Array));
    // arguments.forEach(function(e) {
    //    sum += e;
    // })
    return sum;
}

console.log(sum(1,2));
console.log(sum(1,2,3,4,5));
console.log(sum(1,2,3,4,5,6,7,8,9,10));