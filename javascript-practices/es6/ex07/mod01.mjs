/*
 unnamed export
 - default keyword를 사용한다. 
 
*/

// const add = function(a,b){
//     return a+b;
// }
// export default add;

export default function(a,b){
    return a+b;
}

// error
// 주의: 이름 없이 export 되기 때문에 하나만 export 가능하다. 
// export default function(a,b){
//     return a-b;
// }