/**
 * named export + unnamed export
 * 
 *       
 */

export const add = function() {
    return a + b;
}

export const subtract = function() {
    return a - b;
}

export {add, subtract};
export default{add, subtract};

