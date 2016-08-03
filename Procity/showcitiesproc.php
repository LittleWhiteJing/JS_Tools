<?php
	header("Content-Type:text/xml;charset=utf-8");
	header("Cache-Control:no-cache");
	
	//获取省份信息
	$provice = $_POST['provice'];
	
	$info = "";
	//取出对应的市
	if($provice == "zhejiang"){
		$info = "<provice><city>杭州</city><city>温州</city><city>宁波</city></provice>";
	}else if($provice == "jiangsu"){
		$info = "<provice><city>南京</city><city>苏州</city><city>徐州</city></provice>";
	}
	//返回xml格式字符串
	echo $info;
?>