
// 此方法还存在问题，后面继续改进2018-1-25
(function($) {

    $.fn.fullImages = function(fisher) {

        var fisher = $.extend({
            ImgWidth: null,
            ImgHeight: null,
            autoplay: null,
            fadeTime: null,
        },
        fisher)

        var count = $(this).find("img").length; 
        var nValue = 0;
        var oValue = 0;
        var _this = $(this);
       
	    _this.find("img:eq(0)").fadeIn("slow");

        //自动轮播效果
        var setIntervalImg = setInterval(function() {
            nValue++
            if (nValue == count-2) {
                nValue = 0;
            }
            _this.find(" img:eq(" + (nValue) + ")").fadeIn(fisher.fadeTime);
            _this.find(" img:eq(" + (oValue) + ")").fadeOut(fisher.fadeTime);
            oValue = nValue % count;
            // alert(nValue);
        },
        fisher.autoplay);

        //鼠标经过图片时，停止轮播效果
        // $("#bodyPage").hover(function(){
        //     clearInterval(setIntervalImg);
        // },function(){
        //     var setIntervalImg = setInterval(function() {
        //     nValue++
        //     if (nValue == count-2) {
        //         nValue = 0;
        //     }
        //     _this.find(" img:eq(" + (nValue) + ")").fadeIn(fisher.fadeTime);
        //     _this.find(" img:eq(" + (oValue) + ")").fadeOut(fisher.fadeTime);
        //     oValue = nValue % count;
        //     // alert(nValue);
        // },
        // fisher.autoplay);
        // });

        // 自适应bodyPage的高度
        resizeFun();
        $("#bodyPage").resize(function(e) {
            resizeFun();
        });
        function resizeFun(){

            var hValue=637/1920;
            var img_height=$(window).width()*hValue;
            _this.css("height",img_height);
            //自适应左右箭头的大小
            var prev_width=$(window).width()*0.05;
            _this.find("img.prev").css("width",prev_width);
            _this.find("img.next").css("width",prev_width);
            //自适应左右箭头的垂直居中
            var prev_height=$(window).width()*0.15;
            _this.find("img.prev").css("margin-top",prev_height);
            _this.find("img.next").css("margin-top",prev_height);
        }


        //左右按钮的特效
        $("img.next").hover(function(){
            $(".next").animate({"opacity":1},200);
            clearInterval(setIntervalImg);
        },function(){
            $(".next").animate({"opacity":0.2},500);
        });

        $("img.prev").hover(function(){
            $(".prev").animate({"opacity":1},200);
            clearInterval(setIntervalImg);
        },function(){
            $(".prev").animate({"opacity":0.2},500);
        });

        //左右按钮的切换效果    
        $("img.prev").stop(true,true).click(function(){
            // clearInterval(setIntervalImg);//用来中断自动轮播效果
            nValue--;
            nValue--;
            if(nValue==-2){nValue=1}
            var setIntervalImg = setInterval(function() {  
            nValue++; 
            if (nValue == count-2) {
                nValue = 0;
            }
            alert(nValue);
            _this.find(" img:eq(" + (nValue) + ")").fadeIn(fisher.fadeTime);
            _this.find(" img:eq(" + (oValue) + ")").fadeOut(fisher.fadeTime);
            oValue = nValue % count; 
           
        },
        fisher.autoplay);
        });










    };

} (jQuery));