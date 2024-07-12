/*
 unnamed export
 - default keyword를 사용한다. 
 
*/

// export default {
//     add: function(a,b){
//         return a+b;
//     },
//     subtract: function(a,b){
//         return a-b;
//     }
// }

const add = function(a,b){
    return a+b;
};

const subtract = function(a,b){
    return a-b;
};

// export default{
//     add: add,
//     subtract: subtract
// };


// 생략 가능
export default{add, subtract};
