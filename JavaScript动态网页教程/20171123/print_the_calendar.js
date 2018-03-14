// 判断是否是闰年
function isBissextile(year)
{
	var Bissextile=false;
	if(year%4==0){
		Bissextile=true;
	}
	if(year%100!=0&&year%4==0){
		Bissextile=true;
	}
	return Bissextile;
}

//在网页中打印year和month月份的日历
function printCalendar(year,month){
	var aDate=new Date(year,month,1);   //创建year年month月1日的对象，并把实例的引用赋值给变量aDate
	var week=aDate.getDay();     //aDate调用getDay()获取星期的信息，0表示星期一
	//计算month月份的天数
	var numOfMonth;
	if(month==0||month==2||month==4||month==6||month==7||month==9||month==11){
		numOfMonth=31;}
	else if(month==3||month==5||month==8||month==10){
		numOfMonth=30;
	}
	else if(isBissextile(year)){
		numOfMonth=29;
	}
	else{
		numOfMonth=28;
	}


//创建一个打印日期的数组
	var dayArray=new Array(week+numOfMonth);      //打印空格，使得星期和日期能够对应
	for(var i=0;i<week;i++){
		dayArray[i]="";
	}

	for(var i=week,j=1;i<dayArray.length;i++,j++){     //打印相应的日期
		dayArray[i]=""+j;
	}

//打印日历表
	document.write("<table>");
	document.write("<tr><th colspan=7>"+year+"年"+(month+1)+"月</th></tr>");
	document.write("<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>");
	for(var i=0;i<dayArray.length;i+=7)            //i+=7等价于i=i+7,i+=7可以自动转换成左边的数值类型
		{
			document.write("<tr>");
			for(var j=i;j<dayArray.length&&j<i+7;j++){
				document.write("<td>"+dayArray[j]+"</td>");
			}
			document.write("</tr>");
		}
	document.write("</table>");
}
