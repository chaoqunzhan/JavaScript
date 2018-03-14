function subtOnClick2141()
{
	var xqpk,renshu;
	xqpk=eval(document.getElementById('xqpk')).value;
	renshu=eval(document.getElementById('renshu')).value;
	var xiqngqi,puke,
	puke=renshu/2-xqpk;
	xiangqi=xqpk-puke;
	alert("有象棋"+xiangqi+"副,"+"有扑克"+puke+"副");
}	

function subtOnClick234()
{
	var chengji;
	chengji=eval(document.getElementById('chengji')).value;
	if(chengji>=90) 
		{
			isExcellence=true;
		}
	else isExcellence=false;	

	if(isExcellence)
		{alert("优秀");}
	else alert("不优秀");
}

function subtOnClick243()
{
	var sideA,sideB,sideC;
	sideA=eval(document.getElementById('sideA')).value;
	sideB=eval(document.getElementById('sideB')).value;
	sideC=eval(document.getElementById('sideC')).value;
	if(sideA+sideB>sideC&&sideB+sideC>sideA&&sideC+sideA>sideB)
		{istringle=true;}
	else istringle=false;

	if(istringle)
		{alert("可以构成三角形");}
	else alert("不能构成三角形");
}

function subtOnClick25(top,bottom,height)
{
	this.top=top;
	this.bottom=bottom;
	this.height=height;
	this.getarea=function()
	{
		var area;
		area=(this.top+this.bottom)*this.height/2;
		return area;
	}
}


function subtOnClick34()
{
	var res=4&5;
	document.write("4&5="+res+"<br/>");
	var res=3|6;
	document.write("3|6="+res+"<br/>");
	var res=3^12^3;
	document.write("3^12^3="+res+"<br/>");
	var res=8<<5;
	document.write("8<<5="+res+"<br/>");
	var res=128>>3;
	document.write("128>>3="+res+"<br/>");
	var res=-128>>>2;
	document.write("-128>>>2="+res+"<br/>");
}


//***********************3.5其他运算符***********************//
function Circle(r)
{
	this.radius=r;
}

function Rectangle(a,b)
{
	this.sideA=a;
	this.sideB=b;
}

function computerArea(obj)
{
	var area;
	if(obj instanceof Circle)
	{
		var typeStr=typeof obj;
		document.write("<br/>typeof obj="+typeStr);
		document.write("<br/>obj是圆形对象的实例，半径为："+obj.radius);
		area=3.14*obj.radius*obj.radius;
		document.write("<br/>这圆形的面积是："+area);
	}
	else if(obj instanceof Rectangle)
	{
		var typeStr=typeof obj;
		document.write("<br/>typeof obj="+typeStr);
		document.write("<br/>obj是矩形对象的实例，长为："+obj.sideA+"宽为："+obj.sideB);
		area=sideA*sideB;
		document.write("<br/>这个矩形的面积是："+area);
	}
	return area;
}

function isRunYear()
{   var year,boo;
	year=eval(document.getElementById('year')).value;
	if(year%400==0) 
		{boo=true;}
	else if(year%4==0&&year%100!=0)
		{boo=true;}
	else 
		{boo=false;}
	return boo;
}

function dayNum()
{
	var month,num,year;
	boo=isRunYear();
	year=eval(document.getElementById('year')).value;
	month=eval(document.getElementById('month')).value;
	switch(month)
	{
		case '1':
		case '3': 
		case '5': 
		case '7': 
		case '8': 
		case '10': 
		case '12':
			num=31;
			break;
		case '4': 
		case '6': 
		case '9': 
		case '11': 
			num=30;
			break;
		case '2':
			if(boo)
				{
				    num=29;
				}	
			else {num=28;}
	}
	if(boo)
		alert(year+"是:"+"闰年"+'\n'+month+"月的天数是:"+num+"天");
	else
	{
		alert(year+"不是:"+"闰年"+'\n'+month+"月的天数是:"+num+"天");
	}
}


/********************************斐波那契数列*****************************************/
function fibSum()
{
	var n,sum=0;
	var f1=0;f2=1,i=3;
	n=eval(document.getElementById('n')).value;
	if(n==1)
	{sum=0;}
	else if(n==2)
	{sum=1;}
	else if(n>=3)
	{
		while(i<=n)
		{
			fn=f1+f2;
			sum=sum+fn;
			f1=f2;
			f2=fn;
			i++;
		}
		sum=sum+1;
	}
	else{sum=-1;}

	if(sum==-1)
		{alert('请重新输入正整数1！！！'+sum)}
	else
		{
		document.write("斐波那契数列的前"+n+"项和是:"+sum);
		}
}

function printFib()
{
	var n1;
	n1=eval(document.getElementById('n1')).value;
	if(n1>=0)
	{
		var f1=0,f2=1,fn=0;
		document.write('斐波那契数列的前n项如下:<br/>')
		for(i=1;i<=n1;i++)
		{
			document.write(fn);
			f1=f2;
			f2=fn;
			fn=f1+f2;
			document.write("<br/>");	
		}
	}
	else
	{
		alert('请重新输入正整数！！！')
	}	

	// for(variable in document)
	// {
	// 	document.write(variable+"<br/>");
	// }
}