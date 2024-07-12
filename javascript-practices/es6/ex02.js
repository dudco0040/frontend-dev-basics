/**
 * block 범위 만들기
 * let & count
 */


//let
try{
    if(true){
        const NUM = 10;
    }
    console.log(NUM);

} catch(e){
    console.error('errpor: ' + e);
}

// 2. 대입 에러 
try{
   const NUM = 20;
   NUM = 30;

} catch(e){
    console.error('errpor: ' + e);
}