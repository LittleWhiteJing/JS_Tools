<html>
<head>
	<title>�û�ע��</title>
	<script type = "text/javascript">
		//����Ajax�������
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
		
		//����Ajaxȫ�ֱ���
		var myXmlHttpRequest="";
		
		//����û�������
		function checkName(){
			
			//����Ajax�������
		    myXmlHttpRequest=getXmlHttpObject();
			//�ж��Ƿ񴴽��ɹ�
			if(myXmlHttpRequest){
				//����url��data
				var url="registerproc.php";
				var data="username="+$("username").value;
				
				//����post��ʽ
				myXmlHttpRequest.open("post",url,true);
				myXmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				//ָ���ص�����
				myXmlHttpRequest.onreadystatechange=process;
				//��������
				myXmlHttpRequest.send(data);
			}
		}
		
		//����ID��ȡdom����
		function $(id){
			return document.getElementById(id);
		}
		
		//ָ���ص�����
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
		��&nbsp;��&nbsp;��:<input type = "text" name = "username" id = "username" onkeyup = "checkName();">
		<input type = "text" style = "border-width:0;color:red" id = "myres">
		<br>
		�û�����:<input type = "password" name = "password"><br>
		�����ʼ�:<input type = "text" name = "email"><br>
		<input type = "submit" value = "ע��">
	</form>
</body>
</html>