<?php
	header("Content-Type:text/html;charset=utf-8");
	header("Cache-Control:no-cache");
	
	//��ȡ������Ϣ
	$cities = $_POST['city'];
	
	$res = "[";
	
	//ƴ��json�ַ���
	for($i=0;$i<count($cities);$i++){
		if($i == count($cities)-1){
			$res.='{"cityname":"'.$cities[$i].'","price":"'.rand(500,1500).'"}]'; 
		}
		else{
			$res.='{"cityname":"'.$cities[$i].'","price":"'.rand(500,1500).'"},';
		}
	}
	//����json�ַ���
	echo $res;
	
?>