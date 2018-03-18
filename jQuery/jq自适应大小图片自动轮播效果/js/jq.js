// $(function()
// {
// 	//当用户单击一个id为imageOptions的a元素时
// 	$("#imageOptions a").click(function()
// 			{
// 			//找到所有的img元素，并获取它的src属性，这个属性包含了图像的位置
// 			// var imageSource=$(this).children("img").attr("src");
// 			var image=new Array(3);
// 			image[0]="images/bg1.jpg";
// 			image[1]="images/bg2.jpg";
// 			image[2]="images/bg3.jpg";
// 			var imageSource=image[1];var i=0;
// 			setInterval(function(){
// 				i++;
// 				var j=i%3;
// 				var imageSource=image[j];
// 				showImage(imageSource);	
// 			},5000);
// 			//找到id为loader的元素，增加其css类为loading。
// 			$("#loader").addClass("loading");
// 			//样式包含了一个背景和一个gif告诉用户正在加载
// 			$("h3").remove();
// 			//showImage是自己编写的一个函数，用于显示选中的图片，这个函数的参数为选中的图片的URL
			
// 			return false;
// 			});
// });


$(document).ready(function()
{
	var image=new Array(3);
	image[0]="images/bg1.jpg";
	image[1]="images/bg2.jpg";
	image[2]="images/bg3.jpg";
	var imageSource=image[1];
	var i=0;
	setInterval(function(){
		i++;
		if(i==3){i=0;}
		var imageSource=image[i];
		showImage(imageSource);	
	},4000);
});
function showImage(src)
{
	//方法中包装loader的图像元素，首先将它淡出，然后去除
	$("#loader img").fadeOut(2000).remove();
	// setTimeout("remove("#loader img");",2000);
	//然后获取创建新图像元素
	var largeImage=new Image();
	//设置此图像为传入的URL
	$(largeImage).attr("src",src).css("width","500px")
		.load(function()
		{
			//实现动态淡入效果，首先将图片隐去
			$(largeImage).hide();
			//去除loader的gif，然后将largeImage加入到loader中
			$("#loader").removeClass("loading").append(largeImage);
			//用fadeIn方法平滑地将图片淡入显示出来
			$(largeImage).fadeIn(2000);});

		}