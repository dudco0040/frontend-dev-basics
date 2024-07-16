/**
 * promise 지원 비동기 함수 사용법 2: async ~ await
 * 
 */
const {asynFn02} = require('./async-fns');

// test: success
const fn = async (param) => {
    try{
        const result = await asynFn02(param);
        console.log(result);
    } catch(err) {
        console.error(err);
    }

}

// test: fail
// asynFn02(null)
//     .then((result)=> console.log(result))
//     .catch((error)=> console.log(error));

fn("param");
fn(null);
console.log('wait .....');
