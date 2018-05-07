//随机生成柱子的间隔
function pillar(){
    var w=new Array(3);
    for(var i=0;i<3;i++){
        w[i]=parseInt(Math.random()*200);
    }
        var wh=50;
        // w=100;
        // alert(w);
            param='<div class=\"well\" style=\"left:0px;\"></div>';  // 第一根柱子对象
            second=wh+w[0];
            param+='<div class=\"well\" style=\"left:'+second+'px;\"></div>';  // 第一根柱子对象
            third=second+wh+w[1];
            param+='<div class=\"well\" style=\"left:'+third+'px;\"></div>';  // 第一根柱子对象
            forth=third+wh+w[2];
            param+='<div class=\"well\" style=\"left:'+forth+'px;\"></div>';  // 第一根柱子对象     
    document.write(param);
}





$(document).ready(function(){
    //棍子的伸长特效
  $("button").mousedown(function(){
    var stop=true;
    if(stop){
        var sickH=1000;
        $(".bang").animate({"width":sickH+"px"},2500)
    }
  });
  //棍子停止变长
  $("button").mouseup(function(){
    var stop=true;
    if(stop){
        var sickH=100;
        $(".bang").stop();
    }
  });


});

