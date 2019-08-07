window.onload = function (){
	var index    = 0;
	var pBox     = document.getElementById('box');
	var boxWidth = pBox.offsetWidth - 20;
	var imgBox   = pBox.children[0];
	var dotObj   = pBox.children;

	currentDot(imgBox);							//生成圆点按钮
	dotObj[2].children[0].className = 'dot current';

	// 左右页码
	var left  = pBox.children[1].children[0];
	var right = pBox.children[1].children[1];

	//赋值事件
	imgBox.onmouseover = stop;
	imgBox.onmouseout  = startUp;
	pBox.children[1].onmouseover   = stop;
	pBox.children[1].onmouseout    = startUp;

	function stop(){               //图片轮播计时器停止
		clearInterval(timer);
	};
	function startUp(){            //启动
		timer = setInterval(scroll,3000);
	}

	//左右页码的点击事件赋值回调函数
	left.onclick = function (){
		//边界检测
		if(index == 0){
			index = imgBox.children.length-1;
			imgBox.style.left = - index*boxWidth + 'px';
		}
		index--;
		animate(imgBox,-index*boxWidth,1);
		isShow(dotObj[2],index,'dot','current',true);
	}
	right.onclick = function (){
		scroll();
	}
	
	// 自动轮播
	var timer = setInterval(scroll,3000);
	function scroll (){
		//边界检测
		if(index == imgBox.children.length-1){
			imgBox.style.left = 0;
			            index = 0;
		}
		index++;
		animate(imgBox,-index*boxWidth,1);
		isShow(dotObj[2],index,'dot','current',true);
	}
}