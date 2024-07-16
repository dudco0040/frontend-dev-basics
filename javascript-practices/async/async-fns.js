// callback 지원 비동기함수
exports.asynFn01 = function(param, callback){
    // 비동기 코드: 파일 시스템(file io), 네트워크 통신(fetch), SQL to DB, setTimer, ... , etc
    setTimeout(()=> {
        // 비동기 처리가 됐다고 치고 
        // 비동기 처리를 완료하고 처리된 결과를 넘겨줌 - 결과와 에러는 callback으로 처리해줄 것 
        // callback -> return error, result
        if(param !== null){
            //결과처리(success)
            callback(null, {result: 'success'});
        } else {
            // 에러처리(fail)
            callback(new Error('fail'), null);
        }
    }, 3000);
}

// promise 지원 비동기함수 
exports.asynFn02 = function(param){
    return new Promise((resolve, reject)=>{
        // 비동기 코드: 파일 시스템(file io), 네트워크 통신(fetch), SQL to DB, setTimer, ... , etc
        setTimeout(()=> {
            // 비동기 처리가 됐다고 치고 
            // 비동기 처리를 완료하고 처리된 결과를 넘겨줌 - 결과와 에러는 callback으로 처리해줄 것 
            // callback -> return error, result
            if (param !== null){
                //결과처리(success) - 비동기 처리가 성공 했을 때 
                resolve({result: 'success'});
            } else {
                // 에러처리(fail)
                reject(new Error('fail'));
            }
        }, 3000);
    });
}