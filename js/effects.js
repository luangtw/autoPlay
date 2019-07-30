/*!
 * 封装
 * effects.js v1.00
 * www.czl.com
 */

/* 
 * animate 函数
 * imgBoxObj     图片的外框,图片的父元素
 * target        target是计算的理论值，每次调用animate()便传入一个target，表示将要到达目的的位置(left)，到达位置便停止函数
 * 				 设置一个index，表示图片索引，target 的值等于index*图片宽度
 * speed   轮播时间
 * 
 * 使用条件：图片box必须设置position
 */  
function animate(imgBoxObj,target,speed){
	clearInterval(imgBoxObj.timer);
	var widthImg    = imgBoxObj.children[0].offsetWidth;
	var currentLeft = imgBoxObj.offsetLeft;                   //对象当前处于的位置(left)

    imgBoxObj.timer   = setInterval(function(){
    	/* 
    	 * status 设置一种状态 往左还是往右  
	     * currentLeft是实际的left距离 target是理论目标left(传参)  
	     * 真实小于理论 从左往右滑动 真实大于理论 从右往左滑动
    	 */
    	var status = currentLeft>target?true:false;   //往左 递减  往右 递增  即 往左实际大于理论 往右反之  true 表示往左 false 表示往右
 		
		if(status){
			currentLeft -= widthImg / 80;    //左播放
		}
		else {
			currentLeft += widthImg / 80;    //右播放
		}

		if(status?currentLeft>target:currentLeft<target){        //如果当前位置不是目标位置则定位
			imgBoxObj.style.left = currentLeft + 'px';
		}
		else {
			clearInterval(imgBoxObj.timer);
			imgBoxObj.style.left = currentLeft + 'px';
		}
	},12.5*speed);
}

/*
 * 生成小按钮
 * 
 */

function currentDot (nodeObj){
	var childNode = nodeObj.children;
	var dotBox    = document.createElement('div'); 
	var pBox      = nodeObj.parentNode;
		dotBox.className = 'dotBox';
		pBox.appendChild(dotBox);
		for(var i=0;i<=childNode.length-2;i++){
			var node = document.createElement('div');
				node.className = 'dot';
				dotBox.appendChild(node);
		}
}
/* 
 *选定按钮背景切换函数
 *obj        选项的父元素对象
 *index      索引
 *className  添加的类
 *pi(可选)   是否用于轮播图 值true 或false
 
 * 使用本函数必须给每个选项指定索引
 * 轮播图使用必须在最后加上第一张图片，既是比图片总数多一张
 */

function isShow(obj,index,classAge,className,pi){       //圆点展示变化
	for(var i = 0;i<obj.children.length;i++){
		if(i == index){
			obj.children[i].className = classAge+' '+className;
		}
		else {
			obj.children[i].className = classAge;
		}
		if(pi == true && index == obj.children.length){
			obj.children[0].className = classAge+' '+className;
		}
	}
}

// 遍历子元素
function siblings(id){
	let xNodeObject  = document.getElementById(id);
	var nodes = [];
	while(xNodeObject = xNodeObject.nextSibling){
		if(xNodeObject.nodeType == 1){
			nodes.push(xNodeObject);
		}
	}
	xNodeObject = document.getElementById(id);
	while(xNodeObject = xNodeObject.previousSibling){
		if(xNodeObject.nodeType == 1){
			nodes.push(xNodeObject);
		}
	}
	return nodes;		
}
/* 
 * id   元素对象 
 */

/*
 * 图片居中函数，无论调用的是什么比例的图片，总让图片不改变比例居中
 
 * idBox   图片框元素id
 *
 *
 */

//图片居中
function centeredImg (idBox){
	var imgBox = document.getElementById(idBox);
	var img    = imgBox.children[0];
	var imgBoxWidth  = imgBox.offsetWidth;
	var imgBoxHeight = imgBox.offsetHeight;
	var imgWidth     = img.naturalWidth;
	var imgHeight    = img.naturalHeight;

	var imgPoportion    = imgWidth / imgHeight;
	var imgBoxPoportion = imgBoxWidth / imgBoxHeight;
	//假如box宽高比大于img宽高比
	if(imgBoxPoportion > imgPoportion){
		img.style.width = imgBoxWidth;
		let imgNewHidth = img.offsetHeight;
		img.style.marginTop = - (imgNewHidth - imgBoxHeight) / 2 + 'px';
	}
	//假如box宽高比小于img宽高比
	else {
		img.style.height = imgBoxHeight;
		let imgNewWidth = img.offsetWidth;
		img.style.marginLeft = - (imgNewWidth - imgBoxWidth) / 2 + 'px';
	}
	imgBox.style.overflow = 'hidden';
}

// 进度条
function bar(id,num){
	var barObj = document.getElementById(id);
	var barShow = barObj.children[0];
	barShow.style.width = num + "%";
	console.log();
}