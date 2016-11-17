/**
 * 根据id获取DOM对象
 * @param  id 元素的id 
 * @return    id对应的DOM对象
 */
function getById(id){
	return document.getElementById(id);
}

/**
 * 根据class获取DOM对象
 * @param  oParent  父元素对象
 * @param  sClass   子元素类名
 * @return aResult  某类对象数组
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
 * 根据标签获取DOM对象
 * @param  oParent 父元素对象
 * @param  name    子元素标签名
 * @return arr     DOM对象数组
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
 * 获取元素的属性
 * @param  obj  元素对象
 * @param  name 属性名称
 * @return      属性内容
 */
function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj,false)[name];
	}
}

/**
 * 获取元素相对页面顶部的距离
 * @param  oDiv  元素对象
 * @return tDis  元素相对页面顶部距离
 */
function getTopDis(oDiv){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var tDis = document.documentElement.clientHeight - oDiv.offsetHeight + scrollTop;
	return tDis;
}

/**
 * 获取元素相对页面左部的距离
 * @param  oDiv  元素对象
 * @return lDis  元素相对页面左部距离
 */
function getLeftDis(oDiv){
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
	var lDis = document.documentElement.clientWidth - oDiv.offsetWidth + scrollLeft;
	return lDis;
}

/**
 * 获取元素相对页面的坐标
 * @param  ev     事件对象
 * @return json   x坐标,y坐标
 */
function getPos(ev){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var scrollTLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
	return {x:ev.clientX+scrollTLeft,y:ev.clientY+scrollTop};
}

/**
 * 绑定事件和对象
 * @param  obj  元素对象 
 * @param  ev   绑定事件
 * @param  fn   绑定函数
 */
function addEvent(obj,ev,fn){
	if(obj.attachEvent){
		obj.attachEvent("on"+ev,fn);
	}else{
		obj.addEventListener(ev,fn,false);
	}
}

/**
 * 设置cookie并制定过期时间
 * @param  name  cookie名称
 * @param  value cookie内容
 * @param  iDay  cookie过期时间
 */
function setCookie(name ,value ,iDay){
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+iDay);
	document.cookie = name+'='+value+';expires='+oDate;
}

/**
 * 获取相应的cookie的值(不存在时返回空字符串)
 * @param  name  cookie名称
 * @return       cookie内容
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
 * 删除相应的cookie
 * @param  name  cookie名称
 * @return null  无返回值
 */
function removeCookie(name){
	setCookie(name,1,-1);
}

/**
 * 创建AJAX引擎对象
 * @return  xmlHttpRequest ajax引擎对象
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
 * 通过POST方式传递数据
 * @param  url     请求的url
 * @param  data    发送的数据
 * @param  fnSucc  请求成功后调用的函数(参数为返回内容)
 * @param  fnFaild 请求失败后调用的函数(参数为HTTP状态码)
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
 * 通过GET方式传递数据
 * @param  url     请求的url
 * @param  fnSucc  请求成功后调用的函数(参数为文件内容)
 * @param  fnFaild 请求失败后调用的函数(参数为HTTP状态码)
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
