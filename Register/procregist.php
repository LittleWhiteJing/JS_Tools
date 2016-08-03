<?php
	header("Content-Type:text/xml;charset=utf-8");
	header("Cache-Control:no-cache");
	$username=$_POST['username'];
	$info = "";
	if($username == "deepblue"){
		$info.="<res><mes>用户名不可用!</mes></res>";
	    //$info = '{"res":"该用户不可用!","id":"a001","year":"2016-03-20"}';	
	}
	
	else{
		$info.="<res><mes>用户名可以用!</mes></res>";
		//$info = '[{"res":"该用户可以用!"},{"res":"该用户不可以使用!"}]';
	}
	echo $info;
?>