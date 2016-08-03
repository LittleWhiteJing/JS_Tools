<html>
<head>
	<title>黄金价格</title>
	<meta http-equiv = "content-type" content = "text/css;charset=utf-8">
	<style>
		.fontsize{
			font-size:25px;
		}
	</style>
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
		
		//声明引擎全局变量
		var myXmlHttpRequest;
		
		//根据id获取dom对象
		function $(id){
			return document.getElementById(id);
		}
		
		//改变黄金价格函数
		function updateGoldPrice(){
			//创建Ajax引擎对象
			myXmlHttpRequest=getXmlHttpObject();
			
			//创建成功
			if(myXmlHttpRequest){
				//定义发送的url和data
				var url = "./goldchangeproc.php";
				var data = "city[]=ld&city[]=tw&city[]=dj";
				//开启post方式
				myXmlHttpRequest.open("post",url,true);
				myXmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				//指定回调函数
				myXmlHttpRequest.onreadystatechange=process;
				//发送数据
				myXmlHttpRequest.send(data);
			}
		}
		//回调函数
		function process(){
			//判断返回状态
			if(myXmlHttpRequest.readyState == 4){
				if(myXmlHttpRequest.status == 200){
					//解析json字符串
					var res_object = eval("("+myXmlHttpRequest.responseText+")");
					
					//设置dom对象中的值
					$('ld').innerText = res_object[0].price;
					$('tw').innerText = res_object[1].price;
					$('dj').innerText = res_object[2].price;
				}
			}
		}
		//设置定时器
		setInterval("updateGoldPrice()",5000);
		
	</script>
</head>
<body>
	<center>
		<h2>每隔5秒更新数据(以1000为基数计算涨跌)</h2>
	<table class = "fontsize" border = "1" cellspacing = "0">	
		<tr>
			<th>市场</th>
			<th>最新价格</th>
			<th>涨跌情况</th>
		</tr>
		<tr>
			<td>伦敦</td>
			<td id = "ld">788.7</td>
			<td>0</td>
		</tr>
		<tr>
			<td>台湾</td>
			<td id = "tw">854.0</td>
			<td>0</td>
		</tr>
		<tr>
			<td>东京</td>
			<td id = "dj">1791.3</td>
			<td>0</td>
		</tr>
		
    </table>	
	</center>
</body>
</html>