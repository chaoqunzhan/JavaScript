// 判断是否是闰年
function isBissextile(year)
{
	var year;
	var Bissextile=false;
	if(year%4==0){
		Bissextile=true;
	}
	if(year%100!=0&&year%4==0){
		Bissextile=true;
	}
	return Bissextile;
	// document.write(year+"<br/>");
}


//计算month月份的天数
function numofmonth(month){
	// alert(1);
	month=month-1;
	var numOfMonth;
	if(month==0||month==2||month==4||month==6||month==7||month==9||month==11){
		numOfMonth=31;}
	else if(month==3||month==5||month==8||month==10){
		numOfMonth=30;
	}
	else if(isBissextile(currYear)){               //判断当前年份是否是闰年
		numOfMonth=29;
	}
	else{
		numOfMonth=28;
	}
	return numOfMonth;
	// allDay=allDay+numOfMonth;
	document.write(numOfMonth+"<br/>");
}

function calAllDay(year,month,day,currYear,currMonth,currDay){
	// var numOfT=(currYear-year)/4;
	// var numOfT=Math.floor(numOfT);        //numOfT为年份经过的4年周期数
	// var Yearflag=(currYear-year)%4;		  //用Yearflag表示年份除以4的余数
	// var allDay=numOfT*(365*3+366);
	// var leftyear=currYear-Yearflag;        //leftyear表示除去整数周期后的年份
	var allDay=0;
	for(year;year<currYear;year++){         //算出整数年的天数
		if(isBissextile(year)){
			allDay=allDay+366;
		}
		else{
			allDay=allDay+365;
		}
	}
	// alert(currMonth);
	if(month<currMonth){                 
		for(month;month<currMonth;month++){	
			allDay=allDay+numofmonth(month);
		}

		if(day<currDay){
			allDay=allDay+(currDay-day);
		}
		else{
			allDay=allDay-(day-currDay);
		}
	}
	else{
		allDay=allDay-day+currDay;
		// alert(currMonth);
		month=month-1;
		for(month;month>currMonth-1;month--){	
			allDay=allDay-numofmonth(month);
		}
	}
	allDay=allDay+1;
	document.write(allDay);	
		
}