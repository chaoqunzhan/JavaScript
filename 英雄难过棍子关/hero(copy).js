
function pillar(){
    var obj=arrayList();
    var w=obj.w;
    var sleft=obj.sleft;
            param='<div class=\"well\" style=\"left:0px;\"></div>';              // 第一根柱子对象
            param+='<div class=\"well\" style=\"left:'+sleft[0]+'px;\"></div>';  // 第二根柱子对象
            param+='<div class=\"well\" style=\"left:'+sleft[1]+'px;\"></div>';  // 第三根柱子对象
            param+='<div class=\"well\" style=\"left:'+sleft[2]+'px;\"></div>';  // 第四根柱子对象     
    document.write(param);     //随机生成柱子的间隔
    var i=0;
    f(w,sleft,i);      //后续的动画
}

//随机生成柱子间距
function arrayList(){  
    var wh=50; 
    var w=new Array(3);    //柱子间距
    var sleft=new Array(3);    //柱子位置设置
    for(var i=0;i<3;i++){
        w[i]=parseInt(Math.random()*200)+100;
    }
    sleft[0]=w[0]+wh;
    sleft[1]=w[0]+w[1]+wh*2;
    sleft[2]=w[0]+w[1]+w[2]+wh*3;
    return {
        w:w,
        sleft:sleft
    };
}



function f(w,sleft,i){
    //棍子的伸长特效
  
    if(i==0){
        bang_sleft=50;
    }
    else{
        bang_sleft=sleft[i-1]+50;
    }

    $(".bang").css({"width":"0","left":bang_sleft+"px"});
    // alert(i)

    $(".bang").css({"transform":"rotate(-90deg)"});      //初始化棍子样式
     var stop=true;
    $("button").mousedown(function(){
        if(stop){
            var sickH=1000;
            $(".bang").animate({"width":sickH+"px"},2500)
        }
    });
    //棍子停止变长
    $("button").mouseup(function(){
        if(stop){
            // var sickH=100;
            $(".bang").stop();
        
            stop=false;
            var bangH=$(".bang").width();    //读出棍子的长度
            
            var t=setTimeout (function(){
                $(".bang").css({"transform":"rotate(0deg)"})  //棍子倒下

                //判断是否成功过关
                if(bangH>=w[i]&&bangH<=w[i]+50){
                    // alert("succeed");
                    $(".men").animate({"left":bangH+bang_sleft+"px"},2500,function(){
                        $(".show-box").animate({"left":-sleft[i]+"px"},1000,function(){
                            i++;
                            stop=true;
                            f(w,sleft,i);
                            if(i==3){
                                alert("succeed")
                            };
                        });    
                    });    //人走，窗口动
                }
                else {
                    
                    $(".men").animate({"left":bangH+bang_sleft+"px"},2500)    //人掉下去
                    $(".men").animate({"top":"600px"},1000)     
                    setTimeout(function(){alert("failure")},3500);
                }
            },500)
        }    
    });
};



// function next(){
//     i++;
//     f(w,sleft,i);
//     if(i==3){
//         alert("succeed")
//     }
// }