<?php
	header("Content-Type:text/html;charset=utf-8");
	header("Cache-Control:no-cache");
	
	//获取城市信息
	$cities = $_POST['city'];
	
	$res = "[";
	
	//拼接json字符串
	for($i=0;$i<count($cities);$i++){
		if($i == count($cities)-1){
			$res.='{"cityname":"'.$cities[$i].'","price":"'.rand(500,1500).'"}]'; 
		}
		else{
			$res.='{"cityname":"'.$cities[$i].'","price":"'.rand(500,1500).'"},';
		}
	}
	//返回json字符串
	echo $res;
	
?>