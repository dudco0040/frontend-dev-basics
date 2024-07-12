/**
 * named export 
 * 
 * 1. exports(require)와 비슷하다.
 *      export.a = ...
 *      export.b = ...
 * 
 * 2. import 하는 모듈에서 destrucring 할 수 있다.
 *       
 */

export const add = function() {
    return a + b;
}

export const subtract = function() {
    return a - b;
}