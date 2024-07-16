/**
 * promise 지원 비동기 함수 사용법 1: ~ then ~ catch 
 * then: success -> result
 * catch: fail -> error
 */
const {asynFn02} = require('./async-fns');

// test: success
asynFn02("param")
    .then((result)=> console.log(result))
    .catch((error)=> console.log(error));

// test: fail
asynFn02(null)
    .then((result)=> console.log(result))
    .catch((error)=> console.log(error));


console.log('wait .....');