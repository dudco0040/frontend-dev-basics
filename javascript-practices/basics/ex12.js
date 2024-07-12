/*
Array 확장(prototype 기반의 확장)
예제: List 함수 추가
*/

Array.prototype.remove = function(index){
    this.splice(index, 1);
}

Array.prototype.insert = function(index, value){
    if(value instanceof Array){
        // for(var i = 0; i < value.length; i++){
        //     this.splice(index++, 0, value[i]);
        // }

        // 오류!
        // callback 함수 안의 this는 어휘상의 this와 일치하지 않는다.
        // value.forEach(function(e){
        //     console.log(this);
        //     this.splice(index++, 0, 2);
        // });

        value.forEach((e) => this.splice(index++, 0, e));   // best! => 함수: 어휘상의 this를 일치시킴, 간략하고 가독성이 좋다. 

        // 해결방법 1
        // var _this = this;  // array
        // value.forEach(function(e) {
        //     console.log(this);
        //     this.splice(index++, 0, e);
        // });

        // 해결방법 2
        
        

    } else {
        this.splice(index, 0, value);
    }
}

// List 함수 사용하기
var a = [1, 2, 4];
console.log(a);

a.insert(2,3);
console.log(a);

a.remove(2);
console.log(a);


o = {
    forEach: function(callback){
        for(p in this){
            callback(p);
        }
    }
}