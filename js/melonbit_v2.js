$(document).ready(function(){

    $('ul.layout_select li').click(function(){
		$("ul.layout_select li").removeClass("current");
		$('.main-tab-content').fadeOut();
		$(this).addClass("current");
		var tab_id = $(this).attr('data-tab');
		$("#"+tab_id).fadeIn();
	})

	$('ul.market_list_tab li').click(function(){
		$("ul.market_list_tab li").removeClass("active");
        $(this).addClass("active");
		$('.tab-content').hide();
		
		var tab_id = $(this).attr('data-tab');
		$("#"+tab_id).show();
	})

    
    $('ul.market_list_today_tab li').click(function(){
		$("ul.market_list_today_tab li").removeClass("active");
		$('.market_list_today').hide();
		$(this).addClass("active");
		var tab_id = $(this).attr('data-tab');
		$("#"+tab_id).show();
	})

    var $panel = $(".market_ticker_wrap").find("ul");
 
    var itemWidth = $panel.children().outerWidth(); // 아이템 가로 길이
    var itemLength = $panel.children().length;      // 아이템 수

    // var tickerbox_width = $(".market_ticker_wrap ul li").outerWidth()-2;
    // console.log(tickerbox_width);
    // $(".ticker-box").css("width",tickerbox_width);
    // $( window ).resize(function(){
    //     $(".ticker-box").css("width",tickerbox_width);
    // ​});

    // Auto 롤링 아이디
    var rollingId;

    auto();

    // 배너 마우스 오버 이벤트
    $panel.mouseover(function() {
        clearInterval(rollingId);
    });

    // 배너 마우스 아웃 이벤트
    $panel.mouseout(function() {
        auto();
    });

    // 이전 이벤트
    $("#prev").on("click", prev);

    $("#prev").mouseover(function(e) {
        clearInterval(rollingId);
    });

    $("#prev").mouseout(auto);

    // 다음 이벤트
    $("#next").on("click", next);

    $("#next").mouseover(function(e) {
        clearInterval(rollingId);
    });

    $("#next").mouseout(auto);

    function auto() {

        // 2초마다 start 호출
        rollingId = setInterval(function() {
            start();
        }, 2000);
    }

    function start() {
        $panel.css("width", itemWidth * itemLength);
        $panel.animate({"left": - itemWidth + "px"}, function() {

            // 첫번째 아이템을 마지막에 추가하기
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");

            // 첫번째 아이템을 삭제하기
            $(this).find("li:first").remove();

            // 좌측 패널 수치 초기화
            $(this).css("left", 0);
        });
    }

    // 이전 이벤트 실행
    function prev(e) {
        $panel.css("left", - itemWidth);
        $panel.prepend("<li>" + $panel.find("li:last").html() + "</li>");
        $panel.animate({"left": "0px"}, function() {
            $(this).find("li:last").remove();
        });
    }

    // 다음 이벤트 실행
    function next(e) {
        $panel.animate({"left": - itemWidth + "px"}, function() {
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            $(this).find("li:first").remove();
            $(this).css("left", 0);
        });
    }



    //coin_info
    $(".coin_info_btn").click(function(){
        $(this).toggleClass("active");
        $(".coin_info_wrap").fadeToggle('fast');
    })

    $('.dropdown-toggle').dropdown();

    //nav-search btn
    $(".nav_search_btn").click(function(){
        var fontIcon = $(this).find("i")
        if($(fontIcon).hasClass("fa-search")){
            $(fontIcon).removeClass("fa-search").addClass("fa-times");
            $(".nav_search_btn").addClass("active");
            $(".nav_search_wrap").fadeIn();
        } else{
            $(fontIcon).removeClass("fa-times").addClass("fa-search");
            $(".nav_search_btn").removeClass("active");
            $(".nav_search_wrap").fadeOut();
        }
        
    });
    

    //수수료 안내 박스
    $(".question-btn").click(function(){
        $(this).addClass("active");
        if($(this).hasClass("buy")){
            $(".charge-question-box").css("top","-135px").css("left","-258px");
            $(".charge-question-box").fadeToggle();
        } else{
            $(".charge-question-box").css("top","270px").css("left","-258px");
            $(".charge-question-box").fadeToggle();
        }
    });

    //금액 경고창
    $(".form-control.buy").focus(function(){
        $(".group-select-warning.buy").show();
    });
    $(".form-control.buy").blur(function(){
        $(".group-select-warning.buy").hide();
    });
    $(".form-control.sell").focus(function(){
        $(".group-select-warning.sell").show();
    });
    $(".form-control.sell").blur(function(){
        $(".group-select-warning.sell").hide();
    });    

    // 수량 슬라이더
    $('.flat-slider').slider({
        orientation: 'horizontal',
        range:       false,
        value:      17
    });

    //sub-ticker
    $(".market_sub_ticker_more").click(function(){
        $(".market_left_top1").toggleClass("overflowH");
    });

    //main-ticker
    $(document).click(function(e){
        var container = $(".ticker_dropdown_wrap");
        if (!container.is(e.target) && container.has(e.target).length === 0){
            $(container).removeClass("hover");
        }else{
            $(container).addClass("hover");
        }
    });


    //opt 상세보기
    // $(".userinfo_more_btn").click(function(){
    //     $(".otp_reset_table").toggleClass("click");
    //     $(".otp_reset_btn").toggleClass("click");
    //     $(".userinfo_more_btn.close").toggleClass("click");
    // });

    //입출금 탭

    $('ul.wallet_tab_item li').click(function(){
		$("ul.wallet_tab_item li").removeClass("selected");
		$('.wallet_tab_content').fadeOut();
		$(this).addClass("selected");
		var tab_id = $(this).attr('data-tab');
		$("#"+tab_id).fadeIn();
    })
    
    //datepicker 
    //위치가 자꾸 위로나옴 아래로 조정해야함
    $('.date').datepicker({
        format: "yyyy-mm-dd",
        language: "kr",
        
    });


    // if($(".datepicker-dropdown").css("display") == "block"){
    //     $(".datepicker-form-btn").addClass("active");
    // } else {
    //     $(".datepicker-form-btn").removeClass("active");
    // }

    $('.notice_inside_content').on( 'keyup', 'textarea', function (e){
        $(this).css('height', 'auto' );
        $(this).height( this.scrollHeight );
    });
    $('.notice_inside_content').find( 'textarea' ).keyup();

    $('.faq_list p').on( 'keyup', 'textarea', function (e){
        $(this).css('height', 'auto' );
        $(this).height( this.scrollHeight );
    });
    $('.faq_list p').find( 'textarea' ).keyup();


    
        $(".faq_list p").hide();
        // $("ul > li:first-child a").next().show();
        $("ul.faq_list li a").click(function(){
            $(this).next().slideToggle(300);
            $(this).find(".faq-t").toggleClass("faq-o");
            $(this).toggleClass("text-blue");
            // $(this).next().slideDown(300);
            $("ul.faq_list li a").not(this).next().slideUp(300);
            $("ul.faq_list li a").not(this).find(".faq-t").removeClass("faq-o");
            $("ul.faq_list li a").not(this).removeClass("text-blue");
            return false;
        });
        //$("ul.faq_list li a").eq(0).trigger("click");

        // input file
        var fileTarget = $('.filebox .upload-hidden');

        fileTarget.on('change', function(){
            if(window.FileReader){
                var filename = $(this)[0].files[0].name;
            } else {
                var filename = $(this).val().split('/').pop().split('\\').pop();
            }

            $(this).siblings('.upload-name').val(filename);
        });

        var plength = $(".investment_txid").length;
        var boxheight = $(".sub_investment_box").height();

        if (plength <= 4){
            var resultheight = boxheight/plength;
            $(".investment_txid").css("height",resultheight).css("line-height",resultheight+"px");
        } else {
            $(".investment_txid").css("height","70px").css("line-height","70px");
        }

        

});