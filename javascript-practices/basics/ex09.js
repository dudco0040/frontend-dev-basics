/*
자바스크립트 객체4 - prototype 기반의 상속과 오버라이딩: 자바스크립트 객체지향 프로그래밍
*/

var MyObject = function(name, age) {
    this.name = name;
    this.age = age;
};

MyObject.prototype.school = "bitacademy";
MyObject.prototype.course = "poscodx 8기";
MyObject.prototype.info = function() {
    console.log(this.school + ":" + this.course);
};

var o1 = new MyObject();
o1.info();
o1.school = 'poscodx';
o1.info();
