/**
 * callback 지원 비동기 함수 사용법
 * 
 */

const {asynFn01} = require('./async-fns');

// test: success
asynFn01('params', (error, result) => {
    if(error){
        console.error(error);
        return;
    }

    console.log(result);
});

// test: fail
asynFn01(null, (error, result) => {
    if(error){
        console.error(error);
        return;
    }

    console.log(result);
});

console.log('wait .....');