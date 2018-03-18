// created by caz21.top 2018-03-16

$(document).ready(function(){
	// right按钮设置  
	var num=0;
	$("#right").click(function(){right();});
	// left按钮设置
	$("#left").click(function(){left();});
	//自动轮播
	timer=setInterval(function(){right();},5000);

function right(){
	num++;
	var index=0;
	for(index;index<4;index++){
		var step=num+index-1;
		while(step<-1){step=step+4;}
		while(step>2){step=step-4;};
		if(step==-1){
			var time=0;
			// $("#display img:eq("+index+")").css("z-index",-1);
		}
		else{var time=1000}
			$("#display img:eq("+index+")").animate({left:800*(step)},time);	
			// setTimeout(function(){
			// 	$("#display img").css("z-index",0);
			// },1000)
	}
}

function left(){
	num--;
	var index=0;
	for(index;index<4;index++){
		var step=num+index-1;
		while(step>2){step=step-4;}
		while(step<-1){step=step+4;}
		if(step==2){
			var time=0;
			// $("#display img:eq("+index+")").css("z-index",-1);
		}
		else{var time=1000}
		$("#display img:eq("+index+")").animate({left:800*(step)},time);
	}	
}

})
