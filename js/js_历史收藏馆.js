// js 历史收藏馆：
//animate 函数  
function animate(obj,target,speed){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var currentLeft = obj.offsetLeft;
		var isLeft = currentLeft > target?true:false;	
		//移动
		if(isLeft){
			currentLeft -= 10;
		}
		else {
			currentLeft += 10;
		}

		if(currentLeft < target){
			console.log('实际小于理论'+currentLeft+' '+target);
		}
		else if(currentLeft > target){
			console.log('实际大于理论'+currentLeft+' '+target)
		}
		else if(currentLeft == target){
			console.log('实际等于理论'+currentLeft+' '+target)
		}
		else {
			console.log(currentLeft+' '+target);
		}
		//出现两个变量比较大小有四种情况的原因是：target 参数传了一个字符串 0px(别问我为什么会犯这种错误Q_Q...)

		if(isLeft?currentLeft>target:currentLeft<target){     //如果当前位置不是目标位置则定位
			obj.style.left = currentLeft + 'px';
		}
		else if(currentLeft<target){
			obj.style.ledt = currentLeft + 'px';
		}
		else {
			clearInterval(obj.timer);
			obj.style.left = currentLeft + 'px';
		}
	},speed);
	//2019-7-23 Edward 收录