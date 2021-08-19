$(document).ready(function(){

    onlyPCanimation()
    $( window ).resize( function() {
        onlyPCanimation();
    });

    function onlyPCanimation(){
        // 메인화면크기 fix
        var winWidth = $(window).width();
        var winHeight = $(window).height();

        if (winWidth < 1180){
            $("#MainIconWrap").css("display",'none');
            $('.MacBookWrap').css("display",'none');
        } else {
            $("#MainIconWrap").css("display",'block');
            $('.MacBookWrap').css("display",'block');
            $("#MainIconWrap").css("width",winWidth-20);
            $("#MainIconWrap").css("height",winHeight);
            $(window).on("resize",function(){
                $("#MainIconWrap").css("width",winWidth-20);
                $("#MainIconWrap").css("height",winHeight);
            });
        }
    }


    /* 맨위로 버튼 */
    function GoTopBtn(){

        $(window).scroll(function(){
            if($(this).scrollTop() > 200){
                $(".GoTopBtn").fadeIn();
            } else {
                $(".GoTopBtn").fadeOut();
            }
        });

        $(".GoTopBtn").click(function(){
            $("html, body").animate({scrollTop:0},400);
        });
    }
    GoTopBtn();

    /* 이전페이지 버튼 */
    function GoBackBtn(){

        $(window).scroll(function(){
            if($(this).scrollTop() > 200){
                $(".GoBackBtn").fadeIn();
            } else {
                $(".GoBackBtn").fadeOut();
            }
        });

        $(".GoBackBtn").click(function(){
            window.history.back();
        });
    }
    GoBackBtn();


    /* 포폴페이지 간격 */
    function LiMarginR(){
        $('.WebWrap ul.WebList li').each(function(){
            if(($(this).index())%2==1){
                $(this).css("margin-right","0");
            } else {
                $(this).css("margin-right","1.5%");
            }
        });
    }
    LiMarginR();

    /* 포폴페이지 마우스오버 */
    function PortMouseOver(){
        $('.WebList li').mouseover(function(){
            $(this).children('div').children('.portMask').css('left',0);
            $(this).mouseleave(function(){
                $(this).children('div').children('.portMask').css('left',-578);
            });
        });
    }
    PortMouseOver();

});

