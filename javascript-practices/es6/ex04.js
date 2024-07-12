/**
 * defualt parameter
 * 파라미터에 값을 주지 않아도 기본 값을 가진다. 
 * 
 */


const print = function(str, end='\n'){
    console.log(str.join(end));
}

print(['Always', 'with', 'me']);