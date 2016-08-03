<html>
<head>
	<title>省市联动</title>
	<meta http-equiv = "content-type" content = "text/html;charset = utf-8">
	<script type = "text/javascript">
		//创建Ajax引擎对象
		function getXmlHttpObject(){
			
			var xmlHttpRequest;
			
			if(window.ActiveXObject){
				xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
			else{
				xmlHttpRequest = new XMLHttpRequest();
			}
			
			return xmlHttpRequest;
		}
		
		//根据ID获取Dom对象
		function $(id){
			return document.getElementById(id);
		}
		
		//定义全局Ajax对象
	    var myXmlHttpRequest = "";
		
		//获取城市信息
		function getCities(){
			//创建Ajax引擎对象
			myXmlHttpRequest = getXmlHttpObject();
			//判断是否创建成功
			if(myXmlHttpRequest){
				//指定url和data
				var url = "/showcitiesproc.php";
				var data = "provice="+$('provice').value;
				//开启post提交
				myXmlHttpRequest.open("post",url,true);
				myXmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				//指定回调函数
				myXmlHttpRequest.onreadystatechange=process;
				//发送数据
				myXmlHttpRequest.send(data);
			}
		}
		
		//定义回调函数
		function process(){
			
			if(myXmlHttpRequest.readyState == 4){
				if(myXmlHttpRequest.status == 200){
					//清空城市选项
					$('city').length = 0;
					//创建选项
					var myOption = document.createElement("option");
					//写入数值
					myOption.innerText = "---城市---";
					//添加选项
					$('city').appendChild(myOption);
					//获取返回的xml对象中的数据
					var cities = myXmlHttpRequest.responseXML.getElementsByTagName("city");
					//遍历数组输出省份对应的城市
					for(var i = 0;i<cities.length;i++){
						var city_name = cities[i].childNodes[0].nodeValue;
						var myOption = document.createElement("option");
						myOption.value = city_name;
						myOption.innerText = city_name;
						$('city').appendChild(myOption);
					}
				}
			}
		}
		
	</script>
</head>
<body>
	<select id = "provice" onchange = "getCities();">
		<option value = "">---省---</option>
		<option value = "zhejiang">浙江</option>
		<option value = "jiangsu">江苏</option>
	</select>
	<select id = "city">
		<option value = "">---城市---</option>
	</select>
	<select id = "country">
		<option value = "">---县城---</option>
	</select>
</body>
</html>