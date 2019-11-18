
/*
함수명:actionSlider
목적: 5장의 사진이든 film div를 이동시켜 보이는 영역에 나타나도록 하는 함수
*/
var times = 0;//사진카운트번호
var callfn;//setInterval함수할당

function actionSlider(){
	var dotnum = "dot" + (times+1);//현재의 dot div 아이디명
	var dotnumprev;//이전 dot div
	//film div를 개체로 생성
	var elem01 = document.getElementById("film");//사진슬라이드
	var elem02 = document.getElementById(dotnum);//해당 dot div
	var movesize = -478 * times;
	elem01.style.transition = "all 1s ease-in-out 0s";
	elem01.style.left = movesize + "px";
	
	//dot이미지 색깔변경
	if(times != 0)
	{
		dotnumprev = "dot" + times;	
	}
	else
	{
		dotnumprev = "dot5";//times값이 0일경우는 마지막 dot div에서 1번으로 온 경우
	}
	var elem03 = document.getElementById(dotnumprev);//이전dot div개체
	elem03.getElementsByTagName("img").item(1).style.opacity = "0";//안보이게
	
	elem02.getElementsByTagName("img").item(1).style.opacity = "1";//보이게
	
	if(times > 3)
	{
		times = 0;//초기화	
	}
	else
	{
		//times = times + 1;
		times += 1;//위의 식과 같음
	}
	
	
}

/*
함수명:goFrame
목적: dot div를 클릭했을때 해당되는 이미지의 위치로 이동시키는 함수
*/
function goFrame(param)
{
	clearInterval(callfn);//Interval함수해제
	//alert(param.getAttribute("id"));
	var framenum = 	param.getAttribute("id");//해당 아이디값을 할당
	framenum = framenum.substr(3,1);//"dot1" 같은 문자에서 4번째 1글자 가져옴
	//alert(framenum);
	
	//times 값을 클릭한 값으로 재설정
	var newfn = Number(framenum)-1;//times값과일치
	if(newfn+1 == 5){times=0;}
	else{times = newfn+1;}//times값이 기본+1이 되어 셋팅되므로
	
	var elem01 = document.getElementById("film");//사진슬라이드
	var elem02 = document.getElementById("dot"+framenum);//해당 dot div
	var movesize = -478 * (Number(framenum)-1);
	elem01.style.transition = "all 1s ease-in-out 0s";
	elem01.style.left = movesize + "px";
	
	
	//기존 선택된 dot div를 모두 흰색으로 변경
	for(var i=1; i<= 5;i++)
	{
		//alert(i+"/"+framenum);
		if(i == framenum){continue;}//현재클릭된 dot는 제외함.
		var elem03 = document.getElementById("dot"+i);
		elem03.getElementsByTagName("img").item(1).style.opacity = 0;//회색을 투명하게(흰색으로 보이게)
	}
	//for문에서 원하는 특정 순서를 넘어가야할 경우
	//continue 키워드를 사용한다.
	
	
	//dot div의 이미지변경
	elem02.getElementsByTagName("img").item(1).style.opacity = 1;
	
	
	
	
	
	//setInterval함수 재호출(5초후에)
	callfn = setInterval("actionSlider()", 5000);
}

/*
함수명:overdot
목적: dot div에 마우스가 오버될때 회색이미지가 보이도록 처리
*/
var overdot = function(param){
	var temp = param.getAttribute("id");
	temp = temp.substr(3,1);//id값 자르기(숫자만)
	var elem02 = document.getElementById("dot"+temp);//롤오버된 개체
	
	var newtimes = times;//기존times값을 할당
	if(newtimes == 0){newtimes = 5}
	if(newtimes != temp)//선택된 경우에는 작동하지 않도록 걸러냄
	{
		elem02.getElementsByTagName("img").item(1).style.opacity = 1;
	}
	
	



}

/*
함수명:outdot
목적: dot div에 마우스가 오버될때 회색이미지가 보이도록 처리
*/
var outdot = function(param){
	var temp = param.getAttribute("id");
	temp = temp.substr(3,1);//id값 자르기(숫자만)
	var elem02 = document.getElementById("dot"+temp);//롤오버된 개체
	
	var newtimes = times;//기존times값을 할당
	if(newtimes == 0){newtimes = 5}
	if(newtimes != temp)//선택된 경우에는 작동하지 않도록 걸러냄
	{
		elem02.getElementsByTagName("img").item(1).style.opacity = 0;
	}
	



}









window.onload = function(){
	callfn = setInterval("actionSlider()", 2500);
}





