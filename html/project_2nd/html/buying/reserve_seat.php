<!DOCTYPE HTML>
<html lang="ko">
<head>
<meta charset="utf-8">
<title>영화예매페이지 좌석선택</title>
<!--viewport:화면 비율, 확대, 축소와 관련됨/모바일,반응형웹 필수-->
<meta name="viewport" content="width=device-width, 
initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densityDpi=medium-dpi"/>
<link rel="apple-touch-icon" href="../../images/han/app_img.png" /><!--아이폰 바로가기 아이콘--><!--권장-->
<link rel="shortcut icon" href="../../images/han/app_img.png" /><!--안드로이드폰 바로가기 아이콘--><!--권장-->
<!--<link rel="apple-touch-icon-precomposed" href="" />아이폰과 안드로이드폰 함께 바로가기 아이콘 설정(같이쓸때, 생략가능)-->
<link rel="stylesheet" href="../../css/common.css" />
<!--스타일시트 보다 아래쪽에 respond.js파일을 선언한다(서버에서만 동작한다.local에서는 소용없다.)-->
<!--[if lt IE 9]>
	<script type="text/javascript" src="../../js/html5.js"></script>
	<script type="text/javascript" src="../../js/respond.min.js"></script>
<![endif]-->
<script type="text/javascript" src="../../js/jquery-1.12.4.min.js"></script>
<script type="text/javascript" src="../../js/common.js"></script>


</head>
<body>
	<div id="skip">
		<a href="#re_section">본문 바로가기</a>
	</div>
	<header id="header">
		<?php
			include('../header.html');
		?>
	</header>
	<div id="empty_zone">

	</div>
	<section id="re_section">
		<h2>영화별 예매<span><a href="../../index.html">홈</a> > 영화별 예매 > 좌석선택</span></h2>
		<article id="people_select">
			<h3>좌석선택</h3>
			<div id="seat_skip"><a href="#footer">좌석선택 건너띄기</a></div>
			<div id="check_people">
				<h4 class="clear">인원선택</h4>
				<ul>
					<li>
						<h5>성인</h5>
						<p>성인 1매 11,000원</p>
						<div class="num_control">
							<a href="#header" id="num_left_Btn" class="num_left_Btn"><img src="../../images/han/left_btn.jpg" alt="한명 감소 버튼"></a>
							<p id="adult_num">0</p>
							<a href="#header" id="num_right_Btn" class="num_right_Btn"><img src="../../images/han/right_btn.jpg" alt="한명 추가 버튼"></a>
							<p class="people">명</p>
						</div>
					</li>
					<li>
						<h5>청소년</h5>
						<p>청소년 1매 9,000원</p>
						<div class="num_control">
							<a href="#header" id="num_left_Btn2" class="num_left_Btn"><img src="../../images/han/left_btn.jpg" alt="한명 감소 버튼"></a>
							<p id="youth_num">0</p>
							<a href="#header" id="num_right_Btn2" class="num_right_Btn"><img src="../../images/han/right_btn.jpg" alt="한명 추가 버튼"></a>
							<p class="people">명</p>
						</div>
					</li>
					<li>
						<h5>우대</h5>
						<p>우대 1매 9,900원</p>
						<div class="num_control">
							<a href="#header" id="num_left_Btn3" class="num_left_Btn"><img src="../../images/han/left_btn.jpg" alt="한명 감소 버튼"></a>
							<p id="vip_num">0</p>
							<a href="#header" id="num_right_Btn3" class="num_right_Btn"><img src="../../images/han/right_btn.jpg" alt="한명 추가 버튼"></a>
							<p class="people">명</p>
						</div>
					</li>
				</ul>
				<div id="price_check">
					<h5>금액</h5>
					<p>0매</p>
					<div id="price_check_num">0원</div>
				</div>
			</div>
		</article>
		<article id="seat_explain">
			<h3>좌석표시그림 설명영역</h3>
			<p><img src="../../images/han/sel_img.jpg" alt=""><span>선택좌석</span></p>
			<p><img src="../../images/han/re_complete.jpg" alt=""><span>예약만료</span></p>
		</article>
		<article id="seat_sel_click">
			<h3>좌석클릭 선택영역</h3>
			<div class="seat_screen">screen</div>
			<ul id="seat_sel_click_num"></ul>
			<div class="seat_entryway">입구</div>
			<div class="seat_exit">출구</div>
		</article>
		<article id="reserve_total_layer">
			<h3>최종예매정보</h3>
			<table>
				<caption>예매 최종정보 안내</caption>
				<tr>
					<th>영화</th>
					<td>
						<div><img src="../../images/han/movie_poster.jpg" alt=""></div>
						<p><img src="../../images/han/icon_12_new.gif" id="empty_control" alt="12세 미만 관람불가">엑스맨 : 아포칼립스</p>
					</td>
				</tr>
				<tr>
					<th>날짜</th>
					<td>
						<p>2016/06/10</p>
					</td>
				</tr>
				<tr>
					<th>상영관</th>
					<td>
						<p>여의도점</p>
					</td>
				</tr>
				<tr>
					<th>상영관</th>
					<td>
						<p>여의도점</p>
					</td>
				</tr>
				<tr>
					<th>시간</th>
					<td>
						<p>O관 10:50 ~ 13:25</p>
					</td>
				</tr>
				<tr>
					<th>좌석</th>
					<td>
						<p id="your_seat">F7</p>
					</td>
				</tr>
				<tr>
					<th>금액</th>
					<td>
						<p id="total_price">11,000원</p>
					</td>
				</tr>
			</table>
			<div id="reserve_pay"><a href="#">결제하기</a></div>
		</article>
		<article id="customer_check">
			<h3>선택한 사항</h3>
			<ul id="sel_contents" class="clear">
				<li>
					<h4>선택영화</h4>
					<p>엑스맨 : 아포칼립스</p>
				</li>
				<li>
					<h4>날짜선택</h4>
					<p>10일(오늘)</p>
				</li>
				<li>
					<h4>상영관선택</h4>
					<p>여의도점</p>
				</li>
				<li>
					<h4>시간선택</h4>
					<p>O관 10:50 ~ 13:25</p>
				</li>
			</ul>
		</article>
	</section>
	<footer id="footer">
		<?php
			include('../footer.html');
		?>
	</footer>
</body>
</html>
