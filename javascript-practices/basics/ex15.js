/*
 Date 객체 함수: Date.prototype.*  
 */


// 현재 시간
var now = new Date();
console.log(now);

// 2022년 7월 4일 
d1 = new Date(2022, 6/* month-1 */, 4);
console.log(d1);

// 2022년 7월 4일 13:06:40 
d2 = new Date(2022, 6/* month-1 */, 4, 13, 6, 40);
console.log(d2);

// 객체 메서드
console.log(
    "년도: " + (d2.getYear() + 1900) + '\n' +
    "월: " + (d2.getMonth() + 1) + '\n' +
    "일: " + (d2.getDate()) + '\n' +
    "시: " + (d2.getHour()) + '\n' +
    "분: " + (d2.getMinutes()) + '\n' +
    "초: " + (d2.getSeconds() )+ '\n' +
    "밀리초: " + (d2.getMilliseconds())
);

