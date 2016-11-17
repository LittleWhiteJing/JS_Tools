/**
 * ����id��ȡDOM����
 * @param  id Ԫ�ص�id 
 * @return    id��Ӧ��DOM����
 */
function getById(id){
	return document.getElementById(id);
}

/**
 * ����class��ȡDOM����
 * @param  oParent  ��Ԫ�ض���
 * @param  sClass   ��Ԫ������
 * @return aResult  ĳ���������
 */
function getByClass(oParent,sClass){
	var aResult = [];
	var aEle = oParent.getElementsByTagName("*");
	for(var i = 0; i<aEle.length;i++){
		if(aEle[i].className == sClass){
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}

/**
 * ���ݱ�ǩ��ȡDOM����
 * @param  oParent ��Ԫ�ض���
 * @param  name    ��Ԫ�ر�ǩ��
 * @return arr     DOM��������
 */
function getByTag(oParent,name){
	var aResult = [];
	var oBs = oParent.getElementsByTagName(name); 
	for(var i = 0; i < oBs.length; i++){
		aResult.push(oBs[i]);
	}
	return aResult;
}

/**
 * ��ȡԪ�ص�����
 * @param  obj  Ԫ�ض���
 * @param  name ��������
 * @return      ��������
 */
function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj,false)[name];
	}
}

/**
 * ��ȡԪ�����ҳ�涥���ľ���
 * @param  oDiv  Ԫ�ض���
 * @return tDis  Ԫ�����ҳ�涥������
 */
function getTopDis(oDiv){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var tDis = document.documentElement.clientHeight - oDiv.offsetHeight + scrollTop;
	return tDis;
}

/**
 * ��ȡԪ�����ҳ���󲿵ľ���
 * @param  oDiv  Ԫ�ض���
 * @return lDis  Ԫ�����ҳ���󲿾���
 */
function getLeftDis(oDiv){
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
	var lDis = document.documentElement.clientWidth - oDiv.offsetWidth + scrollLeft;
	return lDis;
}

/**
 * ��ȡԪ�����ҳ�������
 * @param  ev     �¼�����
 * @return json   x����,y����
 */
function getPos(ev){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var scrollTLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
	return {x:ev.clientX+scrollTLeft,y:ev.clientY+scrollTop};
}

/**
 * ���¼��Ͷ���
 * @param  obj  Ԫ�ض��� 
 * @param  ev   ���¼�
 * @param  fn   �󶨺���
 */
function addEvent(obj,ev,fn){
	if(obj.attachEvent){
		obj.attachEvent("on"+ev,fn);
	}else{
		obj.addEventListener(ev,fn,false);
	}
}

/**
 * ����cookie���ƶ�����ʱ��
 * @param  name  cookie����
 * @param  value cookie����
 * @param  iDay  cookie����ʱ��
 */
function setCookie(name ,value ,iDay){
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+iDay);
	document.cookie = name+'='+value+';expires='+oDate;
}

/**
 * ��ȡ��Ӧ��cookie��ֵ(������ʱ���ؿ��ַ���)
 * @param  name  cookie����
 * @return       cookie����
 */
function getCookie(name){
	var arr = document.cookie.split("; ");
	for(var i = 0; i < arr.length; i++){
		var arr2 = arr[i].split("=");
		if(arr2[0] == name){
			return arr2[1];
		}
	}
	return "";
}
/**
 * ɾ����Ӧ��cookie
 * @param  name  cookie����
 * @return null  �޷���ֵ
 */
function removeCookie(name){
	setCookie(name,1,-1);
}

/**
 * ����AJAX�������
 * @return  xmlHttpRequest ajax�������
 */
function getXmlHttpObject(){
	var xmlHttpRequest;
	if(window.ActiveXObject){
		xmlHttpRequest=new ActiveXObject("Microsoft.XMLHTTP");
	}else{
		xmlHttpRequest=new XMLHttpRequest();
	}
	return xmlHttpRequest;
}

/**
 * ͨ��POST��ʽ��������
 * @param  url     �����url
 * @param  data    ���͵�����
 * @param  fnSucc  ����ɹ�����õĺ���(����Ϊ��������)
 * @param  fnFaild ����ʧ�ܺ���õĺ���(����ΪHTTP״̬��)
 */
function proPostData(url,data,fnSucc,fnFaild){
	var oAjax = getXmlHttpObject();
	oAjax.open("POST",url,true);
	oAjax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	oAjax.onreadystatechange = function (){
		if(oAjax.readyState == 4){
			if(oAjax.status == 200){
				fnSucc(oAjax.responseText);
			}else{
				if(fnFaild){
					fnFaild(oAjax.status);
				}
			}
		}
	};
	oAjax.send(data);
}

/** 
 * ͨ��GET��ʽ��������
 * @param  url     �����url
 * @param  fnSucc  ����ɹ�����õĺ���(����Ϊ�ļ�����)
 * @param  fnFaild ����ʧ�ܺ���õĺ���(����ΪHTTP״̬��)
 */
function proGetData(url,fnSucc,fnFaild){
	var oAjax = getXmlHttpObject();
	oAjax.open("GET",url+"?t="+new Date().getTime(),true);
	oAjax.send();
	oAjax.onreadystatechange = function (){
		if(oAjax.readyState == 4){
			if(oAjax.status ==200){
				fnSucc(oAjax.responseText);
			}else{
				if(fnFaild){
				fnFaild(oAjax.status);
				}
			}
		}
	};
}
