/**
 * Arrow Function
 * 
 */

const power = function(x){
    return x*x;
}

const nums = [1,2,3,4,5];
nums.forEach(function(e){
    process.stdout.write(`${e}: ${power(e)}\t`);
})


// arrow 사용
// ex1
console.log("\n=======================================");
nums.forEach(function(e){

    // const result = (function(x) {
    //     return x*x;
    // })(e);

    // const result = ((x) => {
    //     return x*x;
    // })(e);

    const result = (x => x*x)(e);


    process.stdout.write(`${e}: ${result}\t`);
});


// ex2: 값 처럼 대입할 수 있다.
console.log("\n=======================================");
nums.forEach(function(e){
    //const result = (x => x*x)(e);

    process.stdout.write(`${e}: ${(x => x*x)(e)}\t`);  // 대입
});


// ex3: 직접 만들어보자! 
console.log("\n=======================================");
nums.forEach(e => process.stdout.write(`${e}: ${(x => x*x)(e)}\t`));


// function을 지우고 => 를 사용
// 파라미터 값이 1개면 괄호 제거
// return 할 값을 => 의 우측에 위치하도록 수정



// ex4: this를 어휘상에서 바인딩할 수 있다. 
const dooly = {
    name: '둘리',
    friends: ['또치', '도우너', '마이콜'],
    printFriends: function(){
        this.friends.forEach(friend => {
            console.log(`${friend}의 친구 ${this.name}`);

        });
    }
}

dooly.printFriends();