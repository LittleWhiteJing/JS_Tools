<html>
<head>
	<title>用户注册</title>
	<script type = "text/javascript">
		//创建Ajax引擎对象
		function getXmlHttpObject(){
			
			var xmlHttpRequest;
			
			if(window.ActiveXObject){
				xmlHttpRequest=new ActiveXObject("Microsoft.XMLHTTP");
			}
			else{
				xmlHttpRequest=new XMLHttpRequest();
			}
			return xmlHttpRequest;
		}
		
		//定义Ajax全局变量
		var myXmlHttpRequest="";
		
		//检查用户名函数
		function checkName(){
			
			//创建Ajax引擎对象
		    myXmlHttpRequest=getXmlHttpObject();
			//判断是否创建成功
			if(myXmlHttpRequest){
				//定义url和data
				var url="registerproc.php";
				var data="username="+$("username").value;
				
				//开启post方式
				myXmlHttpRequest.open("post",url,true);
				myXmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				//指定回调函数
				myXmlHttpRequest.onreadystatechange=process;
				//发送数据
				myXmlHttpRequest.send(data);
			}
		}
		
		//根据ID获取dom对象
		function $(id){
			return document.getElementById(id);
		}
		
		//指定回调函数
		function process(){
			if(myXmlHttpRequest.readyState==4){
				if(myXmlHttpRequest.status == 200){
				var obj = myXmlHttpRequest.responseXML
				var mes = obj.getElementsByTagName("mes");
				var res = mes[0].childNodes[0].nodeValue;
				$("myres").value = res;
				}
			}
		}
	</script>
</head>
<body>
	<form action="#" method="post">
		用&nbsp;户&nbsp;名:<input type = "text" name = "username" id = "username" onkeyup = "checkName();">
		<input type = "text" style = "border-width:0;color:red" id = "myres">
		<br>
		用户密码:<input type = "password" name = "password"><br>
		电子邮件:<input type = "text" name = "email"><br>
		<input type = "submit" value = "注册">
	</form>
</body>
</html>