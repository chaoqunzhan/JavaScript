$(document).ready(function(){

	// $("button").click(function(){
	var index=4;
	setInterval(function(){
		index--;
		if(index<0){index=3}
		var prec=index-1;
		if(prec<0){prec=3}
		$("img:eq("+index+")").animate({left:'1000px'},"slow");
		$("img:eq("+prec+")").animate({left:'0px'},0);
	},2000);
    
  // });
});