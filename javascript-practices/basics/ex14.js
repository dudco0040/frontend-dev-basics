/*
URL 다루기  

 */

var url = "http://www.mysite.com/user?name=둘리&email=dooly@gmail.com";
// 바로 사용 X -> 파라미터 부분에 이스케이프 필요 name={} & email={}

// 1. escape: URL 전부를 encoding
var url2 = escape(url);
console.log(url2);

// 2. encodeURI: URL 전체 중 파라미터만 encoding 한다. url을 만들어두고 전체를 encoding 해야하는 경우 사용
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURIComponent: 값만 encoding 해야 하는 경우 사용
var url4 = encodeURI(url);
console.log(url4);  // 잘못된 예시

// 4. encodeURIComponent 옳은 사용 예시 
// 만들어야 할 URL : http://www.mysite.com/user?name=둘리&email=dooly@gmail.com

var url = "http://www.mysite.com/user";
var formData = {
    name: '둘리',
    email: 'dooly@gamil.com'
};

var toQueryString = function(o){
    var qs = [];
    for (prop in o){
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }

    return qs.join("&");
}

console.log(url + "?" + toQueryString(formData));