/*
전역 객체(global object)

node: global
browser: window

*/
global.n = '둘리';
console.log(global.n, n);  // 마치 전역 범위에 있는 속성처럼 이용 가능

// node 지원 안함
var email = 'dooly@gmail.com';
console.log(global.email, email);
