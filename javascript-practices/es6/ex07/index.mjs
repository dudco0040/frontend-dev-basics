// import 하기

// mod01, mod02 unnamed export 모듈에서 import 할 때는 이름이 없이 넘어오기 때문에 반드시 이름을 지정해야한다.
import myFunction from './mod01.mjs';
import myObject from './mod02.mjs';

console.log(myFunction(10, 20));
console.log(myObject(10, 20));

// mod03
// 1) named export 모듈의 다수 객체 import 시, destrction 하기 
import {add, subtract} from './mod03.mjs';  // {} 안에 사용하 싶은 것만 골라거 사용 가능
console.log(subtract(20,10));

//2) named export는 import 대상이 다수이기 때문에 특정 이름을 지정할 수 있다. 
//대신 '*.as 이름"을 사용할 수 있다. 
import * as m from './mod03.mjs';
console.log(m.subtract(20,10));


import math, {add} from './mod04.mjs';
console.log(math.subtract(20,10));
console.log(math.add(20, 10));


