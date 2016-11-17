/* JavaScript完美运动框架 */
function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj,false)[name];
	}
}

function startMove(obj,json,fnEnd){
	clearInterval(obj.timer);
	obj.timer = setInterval(function (){
		var bStop = true;
		for(var attr in json){
			var curr = 0;
			if(attr == "opacity"){
				curr = Math.round(parseFloat(getStyle(obj,attr))*100);
			}else{
				curr = parseInt(getStyle(obj,attr));
			}
				
			var speed = (json[attr]-curr)/6;
			if(curr != json[attr])
				bStop = false;

			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(attr == "opacity"){
				obj.style.filter = 'alpha(opacity:'+(curr+speed)+')';
				obj.style.opacity = (curr+speed)/100;
			}else{
				obj.style[attr] = curr+speed+"px";
			}
		}
		if(bStop){
			clearInterval(obj.timer);
			if(fnEnd) fnEnd();
		}
	},30);
}