<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script>
(function(){
	$('create').click(function(){
		var vo = {
			name: '둘리',
			email: 'dooly@gmail.com',
			password: '1234',
			gender: 'male'
		}
		
		$.ajax*=({
			url: '/ch08/api/user',
			type: 'post',
			contentType: 'application/json',
			data: JSON.stringify(vo),
			success: function(response){
				console.log(response);
			}
		})
	});
});


(function(){
	$('read').click(function(){
		$.ajax*=({
			url: '/ch08/api/user',
			type: 'get',
			contentType: 'application/json',
			data: JSON.stringify(vo),
			success: function(response){
				console.log(response);
			}
		})
	});
	
(function(){
	$('update').click(function(){
		var vo = {
			name: '둘리',
			email: 'dooly@gmail.com',
			password: '1234',
			gender: 'male'
		}
		
		$.ajax*=({
			url: '/ch08/api/user/10',
			type: 'put',
			contentType: 'application/json',
			data: JSON.stringify(vo),
			success: function(response){
				console.log(response);
			}
		})
	});
});

(function(){
	$('delete').click(function(){
		
		$.ajax*=({
			url: '/ch08/api/user/10',
			type: 'delete',
			dataType: 'json',
			contentType: 'application/x-www-form-urlencoded',
			data: 'password=1234',
			success: function(response){
				console.log(response);
			}
		})
	});
});

});

</script>
</head>
<body>
	<h1>Ajax Test: Restful API</h1>
	<button id="create">[C]reate(post)</button>
	<br><br>
	<button id="read">[R]ead(get)</button>
	<br><br>
	<button id="update">[U]pdate(put)</button>
	<br><br>
	<button id="delete">[D]elete(delete)</button>
	<br><br>
	<div id = 'data'></div>
</body>
</html>