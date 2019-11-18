$(document).ready(function(){


	
	

		

	function h1_hide () {

		$(window).on("scroll",function(){
			var scrollT=$(this).scrollTop();
			if(scrollT > 0) $("#wrap > h1").addClass("hidden");
			if(scrollT == 0) $("#wrap > h1").removeClass("hidden");
		});
	}
	h1_hide();
	//gnb메뉴 
	function gnb () {
		$("#topBanner .cancel").on("click",function(){
			$("#topBanner").hide();
		});
		var $gnbLi = $("#gnb > li");
		var $subUl = $("#nav > #gnb > li > ul");
		$gnbLi.on("mouseenter",function(){
			$("#panel").stop().slideDown("normal");
			$subUl.stop().slideDown("normal");
		});
		$("#nav").mouseleave(function(){
			$("#panel").stop().slideUp("fast");
			$subUl.stop().hide();
		});
		$("#nav").find("#gnb a:first ,#gnb a:last").on("blur",function  () {
			setTimeout(function  () {
				if (!$("#nav").find("#gnb a").is(":focus")){
					$("#panel").slideUp("fast");
					$subUl.fadeOut("fast");
				}
			}, 10);
		});
	}
	gnb();

	//배너랜덤
	function top_banner_random(){
		var random_num = Math.floor((Math.random()*6)+1);
		var color_random = ["","#000000","#9b0000","#000000","#e16752","#000000","#aecedb"];
		var t1="닌자터틀 어둠의 히어로 6월 16일 대개봉";
		var t2="최종병기 활 끝까지 간다 제작진의 추격 스릴러 사냥 6월 29일 대개봉";
		var t3="인디펜던스 데이 리써전스 전율의 끝!다시,그날이 온다! 6월 22일 대개봉";
		var t4="톱스타 임신 스캔들 굿바이싱글 6월 29일 대개봉! 꿀잼 입소문 예약! 지금 바로 예매 Go";
		var t5="이식된 기억 속 테러범을 추적하라 크리미널 6월 23일 대개봉";
		var t6="제 54회 아카데미 4관왕 수상 작품,각본,음악,의상 제34회 칸 영화제 기독교심사위원장 수상 불의전차 6월 16일,국내 첫 스크린 개봉!";
		var alt_text = ["",t1,t2,t3,t4,t5,t6];
		$("#random_img").attr("src","images/han/topBannerImg"+ random_num + ".jpg").attr("alt",alt_text[random_num]);
		$("#topBanner").css("backgroundColor",color_random[random_num]);
		
	}
	top_banner_random();

	//메인슬라이더(
	function main_slide_banner(){
		var i=0;
		var index=0;
		var auto="";
		//$("#list_num>a").eq(0).find("img").attr("src","images/index_num_on.gif");
		$("#list_num>a").on("click",function(){
			
			index = $(this).index();
			console.log(index);
			$("#list_num>a").find("img").each(function(index, data){
				$(data).attr('src', $(data).attr('src').replace('on', 'off'));
				console.log($(data));
			});
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("off","on"));
			$("#banner li").fadeOut(500);
			var t=$("#banner li").eq(index).fadeIn(1000);
			i=index;
			console.log(t);
		});
		
		$(".left").on("click",function(){
			i--;
			if(i<0)
				i = $('#banner li').length-1;
			$("#list_num>a").eq(i).trigger("click");
			
		});
		$(".right").on("click",function(){
			i++;
			if(i>$("#banner li").length-1)
				i=0;
			$("#list_num>a").eq(i).trigger("click");
		});
		$(".play").on("click",function(){
			if(auto!="")
				clearInterval(auto);
			auto = setInterval(function(){
				$(".right").trigger("click");
			},3000);
			
		});
		$(".play").trigger("click");
		$(".stop").on("click",function(){
			clearInterval(auto);
		});
	}
	main_slide_banner()



	function boxoffice(){
		$(".movie2").on("mouseenter",function(){
			$(".slider").animate({marginTop:-170});
	    });

	    $(".movie2").on("mouseleave",function(){
			$(".slider").animate({marginTop:0});
	    });
		  /* movie2 */
		$('.movie2').on('mouseover',function(){
		    $('.movie2').find('.info').stop().animate({top:'200px'},500);
		})
		$('.movie2').on('mouseleave focusout',function(){
			$('.movie2').find('.info').stop().animate({top:'352px'},500);
		});
         
         /* movie3 */
		$('.movie3').on('mouseover',function(){
		    $('.movie3').find('.info').stop().animate({top:'200px'},500);
		})
		$('.movie3').on('mouseleave focusout',function(){
			$('.movie3').find('.info').stop().animate({top:'352px'},500);
		});
         
         /* movie4 */
		$('.movie4').on('mouseover',function(){
		    $('.movie4').find('.info').stop().animate({top:'200px'},500);
		})
		$('.movie4').on('mouseleave focusout',function(){
			$('.movie4').find('.info').stop().animate({top:'352px'},500);
		});
         
         /* movie5 */
		$('.movie5').on('mouseover',function(){
		    $('.movie5').find('.info').stop().animate({top:'200px'},500);
		})
		$('.movie5').on('mouseleave focusout',function(){
			$('.movie5').find('.info').stop().animate({top:'352px'},500);
		});
         
	}
	boxoffice();

	/* ==================================content2버튼=============================== */
	function index_slider_movseOn(){

	var i = false;
	
		$(".info > ul > li:first-child a").on("click", function(){
			if(!i){
				$(this).find("img").attr("src",$(this).find("img").attr("src").replace("off","on"));
				i = true;
			}
			else{
				$(this).find("img").attr("src",$(this).find("img").attr("src").replace("on","off"));
				i = false;
			}
			
			return false;
		});
		
		$(".info > ul > li:last-child").on("mouseover focusin", function(){
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("off","on"));
		});	
		
		$(".info > ul > li:last-child").on("mouseleave focusout", function(){
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("on","off"));
		});	
	
	}	
	index_slider_movseOn();



	//예매페이지-----------------------------//
	

	//ol리스트 만들기
	function ol_make(){
		var movie_name = ["워크래프트:전쟁의서막","아가씨","정글북","컨저링2","곡성","미비포유","싱스트리트","엑스맨:아포칼립스","앵그리버드 더무비","계춘할망","썸니아"];
		var movie_name2 = ["워크래프트:전쟁의서막","아가씨","정글북","컨저링2","곡성","미비포유","싱스트리트","엑스맨:아포칼립스","앵그리버드 더무비","계춘할망","썸니아"];
		var $movieSort = $("#check_order a");

		$movieSort.eq(0).on("click",function(){
			$("#re_movie_list > li").remove();
			for(var i=0;i<movie_name.length;i++){
				if(movie_name[i] == "워크래프트:전쟁의서막" || movie_name[i] == "정글북" || movie_name[i] == "미비포유" || movie_name[i] == "엑스맨 : 아포칼립스")
					$("#re_movie_list").append("<li><a href='#step2_jump'><img src='/~student0906/project_2nd/images/han/icon_12_new.gif' alt='12세 미만 관람불가'>"+movie_name[i]+"</a></li>");
				else if(movie_name[i] == "컨저링2" || movie_name[i] == "곡성" || movie_name[i] == "싱스트리트" || movie_name[i] == "계춘할망" || movie_name[i] == "썸니아")
					$("#re_movie_list").append("<li><a href='#step2_jump'><img src='/~student0906/project_2nd/images/han/icon_15_new.gif' alt='15세 미만 관람불가'>"+movie_name[i]+"</a></li>");
				else if(movie_name[i] == "아가씨")
					$("#re_movie_list").append("<li><a href='#step2_jump'><img src='/~student0906/project_2nd/images/han/icon_red_new.gif' alt='청소년 관람불가'>"+movie_name[i]+"</a></li>");
				else 	
					$("#re_movie_list").append("<li><a href='#step2_jump'><img src='/~student0906/project_2nd/images/han/icon_all_new.gif' alt='전체이용가'>"+movie_name[i]+"</a></li>");
			}
		});	
		//console.log($movieSort.index());
		$movieSort.eq(1).on("click",function(){
			$("#re_movie_list > li").remove();
			var sort_movie = movie_name2.sort();
			console.log(sort_movie);
			for(var i=0;i<sort_movie.length;i++){
				if(sort_movie[i] == "워크래프트:전쟁의서막" || sort_movie[i] == "정글북" || sort_movie[i] == "미비포유" || sort_movie[i] == "엑스맨 : 아포칼립스")
					$("#re_movie_list").append("<li><a href='#step2_jump'><img src='/~student0906/project_2nd/images/han/icon_12_new.gif' alt='12세 미만 관람불가'>"+sort_movie[i]+"</a></li>");
				else if(sort_movie[i] == "컨저링2" || sort_movie[i] == "곡성" || sort_movie[i] == "싱스트리트" || sort_movie[i] == "계춘할망" || sort_movie[i] == "썸니아")
					$("#re_movie_list").append("<li><a href='#step2_jump'><img src='/~student0906/project_2nd/images/han/icon_15_new.gif' alt='15세 미만 관람불가'>"+sort_movie[i]+"</a></li>");
				else if(sort_movie[i] == "아가씨")
					$("#re_movie_list").append("<li><a href='#step2_jump'><img src='/~student0906/project_2nd/images/han/icon_red_new.gif' alt='청소년 관람불가'>"+sort_movie[i]+"</a></li>");
				else 	
					$("#re_movie_list").append("<li><a href='#step2_jump'><img src='/~student0906/project_2nd/images/han/icon_all_new.gif' alt='전체이용가'>"+sort_movie[i]+"</a></li>");
			}
		});
		
		
	}
	ol_make();
	//자동으로 날짜선택 배치
	function date_make(){
		var t = new Date();
		var visit_year = t.getFullYear();
		var visit_month = t.getMonth()+1;
		var next_month = visit_month+1;
		var today = t.getDate();
		$("#check_date").html(visit_year+"."+visit_month+"월");
		var lastDay = (new Date(visit_year,visit_month, 0)).getDate();
		var next_date = (new Date(visit_year,visit_month+1,1)).getDate();
		$("#check_month > .order").append("<li><a href='#step3_jump'>"+visit_month+"월"+"</a></li>");
		var j=0;
		for(var i=0;i<7;i++){
			if((today+i)>lastDay){
				$("#date_list").append("<li><a href='#step3_jump'>"+next_month+"월"+(next_date+j)+"일"+"</a></li>");
				j++;
			}
			else{
				if(today+i == today)
					$("#date_list").append("<li><a href='#step3_jump'>오늘("+(today+i)+"일)"+"</a></li>");
				else if(today+i == today+1)
					$("#date_list").append("<li><a href='#step3_jump'>내일("+(today+i)+"일)"+"</a></li>");
				else
					$("#date_list").append("<li><a href='#step3_jump'>"+(today+i)+"일"+"</a></li>");
			}
		}
		
	}
	date_make();

	//지역고르기 아코디언 기능
	function seat_accordian(){
		var $dl = $("#seater_list dl");
		var $all_dt = $dl.find("dt");
		var $all_dd = $dl.find("dd");
		$all_dd.slideUp("fast");
		//$all_dd.eq(0).show();
		$all_dt.click(function(){
			var dt = $(this);
			var dd = dt.next();
			if(dd.css("display") == "block"){
				dd.slideUp("fast");
			}else{
				$all_dd.slideUp("fast");
				dd.slideDown("fast");
			}
		});
		/*$("#seater_list dl dt a,#seater_list dl dd ul li a").on("click",function(){
			return false;
		});*/
		return false;
	}
	seat_accordian();
	
	//극장시간배치
	function detail_sel(){
		var watch_time = ["07:40","09:00","09:20","10:50","12:15","12:20","13:50","16:00","18:00","19:40","21:45","22:50"];
		for(var i=0;i<watch_time.length;i++){
			for(var j=0;j<watch_time.length;j++){
				$("#detail_time > li").eq(i).find("ul").append("<li><a href='#re_btn'>"+watch_time[j]+"</a></li>");
			}
			
		}
	}
	detail_sel();
	//클릭시이미지전환
	function mouse_click(){
		$("#check_order > a,#check_order2 > a").on("click",function(){
			$("#check_order > a,#check_order2 > a").removeClass("order");
			$(this).addClass("order");
			$("#check_order > a,#check_order2 > a").find("img").attr("src","../../images/han/check_btn.gif");
			$(this).find("img").attr("src","../../images/han/check_btn_on.gif");
		});
		$("#check_order > a").eq(0).trigger("click");
		return false;
	}
	mouse_click()
	//클릭시 포커스
	/*function sel_focus(){
		//$("#check_movie > li").eq(0).addClass("sel_focus");
		$("#sel_contents > li").eq(0).find("p").addClass("click_focus");
		$("#check_movie").on("click",function(){
			var $now_sel = $(this);
		});
	}*/
	//sel_focus();
	//선택한 영화제목 보이기
	function sel_movie(){
		$("#re_movie_list").on("click",function(e){
			var $target = $(e.target);
			var $tagName = $target.context.nodeName;
			var $lowerCase = $tagName.toLowerCase();
			var $watch_sel = $("#sel_contents > li > p").eq(0);
			console.log($lowerCase);
			//var $bor_focus = $("#check_movie > li");
			$("#re_movie_list > li").removeClass("choice").find("a").removeClass("a_choice");
			if($lowerCase == "li"){
				var $movie_text = $target.find("a").text();
				$watch_sel.html($movie_text);
				$target.addClass("choice").find("a").addClass("a_choice");
			}else if($lowerCase == "a"){
				var $movie_text = $target.text();
				console.log($movie_text);
				$watch_sel.html($movie_text);
				$target.addClass("a_choice").parent().addClass("choice");
			}else if($lowerCase == "img"){
				var $movie_text = $target.parent().text();
				console.log($movie_text);
				$watch_sel.html($movie_text);
				$target.parent().addClass("a_choice").parent().addClass("choice");
			}
			/*console.log($bor_focus.hasClass("sel_focus"));
			if($bor_focus.hasClass("sel_focus")){
				$bor_focus.removeClass("sel_focus");
				$bor_focus.eq(1).addClass("sel_focus");
			}else($bor_focus.hasClass("sel_focus")=="false")
				$bor_focus.eq(0).addClass("sel_focus");*/
			return false;
		});
		
	}
	sel_movie();

	function poster_append(){
		
	}
	poster_append();

	//날짜선택하기
	function sel_date(){
		$("#check_month > .order > li").find("a").addClass("set_month");
		$("#date_list").on("click",function(e){
			var $t = $(e.target);
			var $tagName = $t.context.nodeName;
			var $lowerCase = $tagName.toLowerCase();
			$("#date_list >li").removeClass("on").find("a").removeClass("on_text");
			if($lowerCase == "li"){
				$t.addClass("on").find("a").addClass("on_text");
				var $date_text = $t.text();
			}else{
				$t.addClass("on_text").parent().addClass("on");
				var $date_text = $t.parent().text();
			}
			$("#sel_contents > li").eq(1).find("p").html($date_text).css("color","#3399ff").css("font-weight","bold");
			return false;
		});
	}
	sel_date()

	function sel_seater(){
		$("#seater_list > dl > dd > ul").on("click",function(e){
			var $t = $(e.target);
			var $tagName = $t.context.nodeName;
			var $lowerCase = $tagName.toLowerCase();
			$("#seater_list > dl > dd > ul").find("li").removeClass("seat_on").find("a").removeClass("seat_text");
			if($lowerCase == "li"){
				$t.addClass("seat_on").find("a").addClass("seat_text");
				var $date_text = $t.text();
			}else{
				$t.addClass("seat_text").parent().addClass("seat_on");
				var $date_text = $t.parent().text();
			}

			$("#sel_contents > li").eq(2).find("p").html($date_text).css("color","#3399ff").css("font-weight","bold");
		});
	}
	sel_seater();

	function sel_time(){
		$("#detail_time > li > ul > li").on("click",function(e){
			var $t = $(e.target);
			var $plex = $t.parent().parent().prev("h4").text();
			console.log($plex);
			var $tagName = $t.context.nodeName;
			var $lowerCase = $tagName.toLowerCase();
			$("#detail_time > li > ul > li").find("a").removeClass("sel_time");
			if($lowerCase == "a"){
				$t.addClass("sel_time");
				var $date_text = $t.text();
				
			}
			
			$("#sel_contents > li").eq(3).find("p").html($plex+" "+$date_text).css("color","#3399ff").css("font-weight","bold");
			return false;
		});
	}
	sel_time();
	

	function no_next(){
		var $t = $("#sel_contents > li > p");
		console.log($t);
		$("#re_btn").unbind("click").bind("click",function(){
			$t.each(function(i,data){
				var $t = $(data).text();
				if($t == "영화를 선택해주세요" || $t == "날짜를 선택해주세요" || $t == "상영관를 선택해주세요" || $t == "시간를 선택해주세요"){
					alert("예매사항을 모두 선택해주세요"+i);
					
				}
				console.log(data);
			});
			
		});
		
	}
	no_next();
	function skip_fun(){
		$("#check_movie .jump").on("click",function  () {
			var tgEle=$(this).attr("href");

			$(tgEle).attr("tabIndex",0).focus();
			$("html, body").stop().animate({scrollTop:0});	//수치는 홈페이지에 맞게

			$(tgEle).on("blur",function  () {
				$(this).removeAttr("tabIndex");
			});

			return false;
		});
	}
	skip_fun();

	//관람명수 선택
	function visit_people_num(){

		var default_num = 0;
		var price = 0;
		$("#num_right_Btn").on("click",function(){
			if(default_num < 8){
				default_num++;
				price = default_num*11000;
				$("#adult_num").html(default_num);
				$("#price_check > p").html(default_num+"매");
				$("#price_check_num").html(price+"원");
				var $a = $("#price_check_num").text();
				$("#total_price").html($a);
			}
		});
		$("#num_left_Btn").on("click",function(){
			if(default_num > 0){
				default_num--;
				price = default_num*11000;
				console.log(default_num);
				$("#adult_num").html(default_num);
				$("#price_check > p").html(default_num+"매");
				$("#price_check_num").html(price+"원");
				var $a = $("#price_check_num").text();
				$("#total_price").html($a);
			}
		});
		$("#num_right_Btn2").on("click",function(){
			if(default_num < 8){
				default_num++;
				price = default_num*9000;
				console.log(default_num);
				$("#youth_num").html(default_num);
				$("#price_check > p").html(default_num+"매");
				$("#price_check_num").html(price+"원");
				var $a = $("#price_check_num").text();
				$("#total_price").html($a);
			}
		});
		$("#num_left_Btn2").on("click",function(){
			if(default_num > 0){
				default_num--;
				price = default_num*9000;
				console.log(default_num);
				$("#youth_num").html(default_num);
				$("#price_check > p").html(default_num+"매");
				$("#price_check_num").html(price+"원");
				var $a = $("#price_check_num").text();
				$("#total_price").html($a);
			}
		});
		$("#num_right_Btn3").on("click",function(){
			if(default_num < 8){
				default_num++;
				price = default_num*9000;
				console.log(default_num);
				$("#vip_num").html(default_num);
				$("#price_check > p").html(default_num+"매");
				$("#price_check_num").html(price+"원");
				var $a = $("#price_check_num").text();
				$("#total_price").html($a);
			}
		});
		$("#num_left_Btn3").on("click",function(){
			if(default_num > 0){
				default_num--;
				price = default_num*9000;
				console.log(default_num);
				console.log(price);
				$("#vip_num").html(default_num);
				$("#price_check > p").html(default_num+"매");
				$("#price_check_num").html(price+"원");
				var $a = $("#price_check_num").text();
				$("#total_price").html($a);
			}
		});
		
		
	}
	visit_people_num();

	//극장좌석선택표만들기
	function seat_maker(){
		var $seat_append = $("#seat_sel_click_num");
		var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]; 
		for(var i=0;i<13;i++){
			$seat_append.append("<li><a href='#' class='alphabet'>"+alphabet[i]+"</a></li>");
			for(var j=1;j<=18;j++){
				if(j==7 || j==13){
					$seat_append.append("<li><a href='#re_section' class='auto_margin'>"+j+"</a></li>");
				}else if(i==8){
					$seat_append.append("<li><a href='#re_section' class='auto_margin2'>"+j+"</a></li>");
				}else{
					$seat_append.append("<li><a href='#re_section'>"+j+"</a></li>");
				}
			}
			
		}
	}
	seat_maker();

	//좌석 알파벳위치는 a태그 기능 비활성화
	function false_a(){
		$("#seat_sel_click_num li a.alphabet").click(function(){
			return false;
		});
		
	}
	false_a();

	//좌석표 선택 기능
	function seat_choice(){
		var $seat_append_li = $("#seat_sel_click_num > li");
		var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]; 
		

		
			$seat_append_li.click(function(e){
				$seat_append_li.find("a").removeClass("click_seat");
				var $t = $(e.target);
				var $index = $t.parent().index();
				var $li_col = parseInt($index/19);
				var $check_num = $t.text();
				$("#your_seat").html(alphabet[$li_col]+$check_num);
				$t.addClass("click_seat");
			});
	}
	seat_choice();

	

	

	
	/* ===============================예지 - 영화상세페이지 슬라이더 =============================== */

function in_img_slider () {


	var img_wd = $(".in_img_list li img").width();
	var img_ht = $(".in_img_list li img").height();
	$(".in_img_list").width($(".in_img_list li").width()*$(".in_img_list li").size())
	$(".in_img_list li:last").prependTo(".in_img_list");
	$(".in_img_list").css({
		"margin-left":-img_wd,
	});

	$(".in_next").click(function(){
        $(".in_next").hide();
        $(".in_img_list").animate({
            marginLeft : parseInt($(".in_img_list").css("margin-left"))-img_wd+"px"
        },function(){
            $(".in_img_list li:first").appendTo(".in_img_list");
            $(".in_img_list").css("margin-left",-img_wd)
            $(".in_next").show();
        })
    });

    $(".in_prev").click(function(){
        $(".in_prev").hide();
        $(".in_img_list").animate({
            marginLeft : parseInt($(".in_img_list").css("margin-left"))+img_wd+"px"
        },function(){
            $(".in_img_list li:last").prependTo(".in_img_list");
            $(".in_img_list").css("margin-left",-img_wd)
            $(".in_prev").show();
        });
    });

    var timer = setInterval(function(){
                $(".in_next").click();
            },3000);    
    $(".in_container").on("mouseenter",function(){
        clearInterval(timer)
    }).on("mouseleave",function(){
        timer = setInterval(function(){
                    $(".in_next").click();
                },3000); 
	});

}

in_img_slider ();

/* ===============================//예지 - 영화상세페이지 슬라이더 =============================== */


/* ===============================**예지** - 영화상세페이지 별점 =============================== */

var starRating = function(){
var $star = $(".star-input"),
    $result = $star.find("output>b");
	
  	$(document)
	.on("focusin", ".star-input>.input", 
		function(){
   		 $(this).addClass("focus");
 	})
		 
   	.on("focusout", ".star-input>.input", function(){
    	var $this = $(this);
    	setTimeout(function(){
      		if($this.find(":focus").length === 0){
       			$this.removeClass("focus");
     	 	}
   		}, 100);
 	 })
  
    .on("change", ".star-input :radio", function(){
    	$result.text($(this).next().text());
  	})
    .on("mouseover", ".star-input label", function(){
    	$result.text($(this).text());
    })
    .on("mouseleave", ".star-input>.input", function(){
    	var $checked = $star.find(":checked");
    		if($checked.length === 0){
     	 		$result.text("0");
   		 	} else {
     	 		$result.text($checked.next().text());
    		}
  	});
};

starRating();


/* ===============================//**예지** - 영화상세페이지 별점 =============================== */


/* ===============================//**예지** - 영화상세페이지 댓글달기 =============================== */

function in_commend_add () {

	var in_d = new Date();

	var in_year = in_d.getFullYear();
	var in_month = in_d.getMonth()+1;
	var in_day = in_d.getDate();

	var in_date = in_year+"."+in_month+"."+in_day;

	

	$(".in_enter").on("click", function () {
		var in_commend = $("#in_review").val();
		var in_userid = "dldpwl07**";
		var in_star_val = $("#a").text();

		if(in_commend=="") in_commend="멋진영화 잘 감상했습니다.";
		

		var in_result='<tr><td>평점 : '+in_star_val+'점</td>';
				in_result+='<td>'+in_commend+'</td>';
				in_result+='<td>'+in_date+'</td>';
				in_result+='<td>'+in_userid+'</td>';
				in_result+='</tr>';

		$('#in_review_box>tbody').append(in_result);
				
			$('.in_star_val').val("0");
			$('#in_review').val("");
			$('#in_review').focus();
			$("#a").text("0");

		
			

	});
}

in_commend_add ();

/* ===============================//**예지** - 영화상세페이지 댓글달기 =============================== */


/* ===============================**예지** - 현재상영작 탭메뉴 =============================== */

    function tabs(tabName){


        var tabA = $("#"+tabName+">li>h2>a");
        var tabDiv = $("#"+tabName+">li>div");
        tabDiv.hide();

        tabA.on("click focus",function(){
            if(tabA.target){
                $(tabA.target).parent().next().hide();
                $(this).parent().next().show();	
                imgOut(tabA.target);
                imgOver(this);
            }else{
                $(this).parent().next().show();	
                imgOver(this);
            }
            tabA.target = this;
        });
        function imgOver(t){				
            $(t).css("background","#fff");
        }
        function imgOut(t){
            $(t).css("background","#e8e8e8");			
        }
        $(".tab_first>h2>a").trigger("click");
        tabA.eq(0).mouseenter();
    }

	tabs('tab01');


/* ===============================//**예지** - 현재상영작 탭메뉴 =============================== */


/* 글자수 구하기 */

          
		
        function in_text_num () {
                 
               $('#in_review').keyup(function(){
                     var data= $(this).val().length;
                           $('.in_textarea_re').html(data);
                             });  
		}

		in_text_num ();


/* 현재상영작 무비슬라이드 ============================================ */

    function pre_mv_slider () {
     
            $("#pre_content_wrap > ul > li").each(function(index){
               // console.log(index+". test<br/>")
                if(index!=0) {
                    $($(this)).on('mouseover',function(){
                        $($(this)).find('.pre_info').stop().animate({top:'200px'},500);
                    })
                    $($(this)).on('mouseleave focusout',function(){
                        $($(this)).find('.pre_info').stop().animate({top:'320px'},500);
                    })
                }
            });
	}

	pre_mv_slider();












/* ====================================**무비스토리 위아래슬라이드** ============================================ */

    function sto_mv_slider () {
     
            $(".mv_slider > ul > li").each(function(index){
               // console.log(index+". test<br/>")
                    $($(this)).on('mouseover',function(){
                        $($(this)).find('.sto_info').stop().animate({top:'200px'},500);
                    })
                    $($(this)).on('mouseleave focusout',function(){
                        $($(this)).find('.sto_info').stop().animate({top:'270px'},500);
                    })
                
            });
	}

	sto_mv_slider();


	function sto_mv_slider2 () {
     
            $(".mv_slider2 > ul > li").each(function(index){
               // console.log(index+". test<br/>")
                    $($(this)).on('mouseover',function(){
                        $($(this)).find('.sto_info').stop().animate({top:'200px'},500);
                    })
                    $($(this)).on('mouseleave focusout',function(){
                        $($(this)).find('.sto_info').stop().animate({top:'270px'},500);
                    })
                
            });
	}

	sto_mv_slider2();


	function sto_mv_slider3 () {
     
            $(".mv_slider3 > ul > li").each(function(index){
               // console.log(index+". test<br/>")
                    $($(this)).on('mouseover',function(){
                        $($(this)).find('.sto_info').stop().animate({top:'200px'},500);
                    })
                    $($(this)).on('mouseleave focusout',function(){
                        $($(this)).find('.sto_info').stop().animate({top:'270px'},500);
                    })
                
            });
	}

	sto_mv_slider3();




/* ===============================예지 - **무비스토리 양옆슬라이더** =============================== */

function sto_mv_side_slider () {

			
	var eleWidth = $(".mv_slider ul li").innerWidth();					
	var state = false;					
	var direction = "left";	
	var bannerAuto;				
		
	function left(){		
		direction = "left";					
		$(".mv_slider > ul").animate({left:eleWidth*-1},300,"swing",function(){				
			$(this).children("li:first").insertAfter($(this).children("li:last"));
			$(this).css({left:33});
			state = false;				
		});			
	}			
	function right(){		
		direction = "right";										
		$(".mv_slider > ul > li:last").insertBefore($(".mv_slider > ul > li:first"));
		$(".mv_slider > ul").css({left:eleWidth*-1});
		$(".mv_slider > ul").animate({left:33},300,"swing",function(){				
			state = false;			
		});					
	}			
	$(".mv_slider .arrow_l").click(function(){
		if(!state){					
			state = true;
			left();
		}			
	});			
	$(".mv_slider .arrow_r").click(function(){
		if(!state){					
			state = true;
			right();
		}				
	});		
	

	/* content2 */

	var eleWidth2 = $(".mv_slider2 ul li").innerWidth();					
	var state2 = false;						
	var direction2 = "left";	
	var bannerAuto2;				
		
	function left2(){		
		direction2 = "left";					
		$(".mv_slider2 > ul").animate({left:eleWidth2*-1},300,"swing",function(){				
			$(this).children("li:first").insertAfter($(this).children("li:last"));
			$(this).css({left:33});
			state2 = false;				
		});			
	}			
	function right2(){		
		direction2 = "right";										
		$(".mv_slider2 > ul > li:last").insertBefore($(".mv_slider2 > ul > li:first"));
		$(".mv_slider2 > ul").css({left:eleWidth2*-1});
		$(".mv_slider2 > ul").animate({left:33},300,"swing",function(){				
			state2 = false;			
		});					
	}			
	$(".mv_slider2 .arrow_l").click(function(){
		if(!state2){					
			state2 = true;
			left2();
		}			
	});			
	$(".mv_slider2 .arrow_r").click(function(){
		if(!state2){					
			state2 = true;
			right2();
		}				
	});	
	


	/* content3 */

	var eleWidth3 = $(".mv_slider3 ul li").innerWidth();					
	var state3 = false;						
	var direction3 = "left";	
	var bannerAuto3;				
		
	function left3(){		
		direction3 = "left";					
		$(".mv_slider3 > ul").animate({left:eleWidth3*-1},300,"swing",function(){				
			$(this).children("li:first").insertAfter($(this).children("li:last"));
			$(this).css({left:33});
			state3 = false;				
		});			
	}			
	function right3(){		
		direction3 = "right";										
		$(".mv_slider3 > ul > li:last").insertBefore($(".mv_slider3 > ul > li:first"));
		$(".mv_slider3 > ul").css({left:eleWidth3*-1});
		$(".mv_slider3 > ul").animate({left:33},300,"swing",function(){				
			state3 = false;			
		});					
	}			
	$(".mv_slider3 .arrow_l").click(function(){
		if(!state3){					
			state3 = true;
			left3();
		}			
	});			
	$(".mv_slider3 .arrow_r").click(function(){
		if(!state3){					
			state3 = true;
			right3();
		}				
	});	
	
}

sto_mv_side_slider();


/* ===============================//예지 - 무비스토리 슬라이더 =============================== */

/* ===============================예지 - 현재상영작 버튼 =============================== */

function slider_movseOn(){

	var i = false;
	
		$(".pre_info > ul > li:first-child a").on("click", function(){
			if(!i){
				$(this).find("img").attr("src",$(this).find("img").attr("src").replace("off","on"));
				i = true;
			}
			else{
				$(this).find("img").attr("src",$(this).find("img").attr("src").replace("on","off"));
				i = false;
			}
			
			return false;
		});
		
		$(".pre_info > ul > li:last-child").on("mouseover", function(){
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("off","on"));
		});	
		
		$(".pre_info > ul > li:last-child").on("mouseleave", function(){
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("on","off"));
		});	
	
}	
slider_movseOn();

/* ===============================//예지 - //현재상영작 버튼 =============================== */


/* ===============================예지 - 무비스토리 버튼 =============================== */

function sto_slider_movseOn(){

	var i = false;
	
		$(".sto_info > ul > li:first-child a").on("click", function(){
			if(!i){
				$(this).find("img").attr("src",$(this).find("img").attr("src").replace("off","on"));
				i = true;
			}
			else{
				$(this).find("img").attr("src",$(this).find("img").attr("src").replace("on","off"));
				i = false;
			}
			
			return false;
		});
		
		$(".sto_info > ul > li:last-child").on("mouseover", function(){
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("off","on"));
		});	
		
		$(".sto_info > ul > li:last-child").on("mouseleave", function(){
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("on","off"));
		});	
	
}	
sto_slider_movseOn();
	

	function md_findroom()  {
			
	var $room=$(".m_room1 ul li a");
	var $area=$(".m_area ul li a");
	var $detailDiv=$(".m_detailarea > div");
	var $detailLink=$(".m_detailarea > div a");
	var $mapDiv=$(".m_map > div")
	var $img=$(".m_img");

	$room.on("click",function(){
		
		$(".m_img").animate({marginLeft:150});
		
		//상세지역보이고 이미지 페이드아웃
		$area.on("click",function(){
			var d_area =$(this).parent().index();
			//console.log(d_area);
				
			$(".m_img").fadeOut(1000);	//다온큐브이미지 숨기기
			$detailDiv.hide().parent().next().children("div").hide();	//초기화
			$detailDiv.eq(d_area).show().parent().next().children("div").eq(d_area).show();	//클릭한 지역 보이기

			var num;
			var $tg;
			$detailLink.on({
				"click focus mouseenter":function  () {
					num=$(this).parent().index();
					$tg=$mapDiv.eq(d_area).find(">ul>li").eq(num).children("img");

					$tg.attr("src", $tg.attr("src").replace("icon.png","icon_on.png")).next().addClass("on");

					
				},
				"blur mouseleave":function  () {
					$tg.attr("src", $tg.attr("src").replace("icon_on.png", "icon.png")).next().removeClass("on");
				}
			});

			
		});//$area

		return false;
	});//$room
	};
	md_findroom();
	







	



});