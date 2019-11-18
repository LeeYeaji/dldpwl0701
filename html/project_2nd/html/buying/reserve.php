<!DOCTYPE HTML>
<html lang="ko">
<head>
<meta charset="utf-8">
<title>영화예매페이지</title>
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
		<h2>영화별 예매<span>홈 > 영화별 예매</span></h2>
		<a href="reserve_seat.php" id="re_btn">다음</a>
		<article id="check_contents">
			<ul id="check_movie" class="clear" ondragstart="return false" >
				<li>
					<h3 id="step1">STEP 1 - 영화선택</h3>
					<div id="step1_jump"><a class="jump" href="#step2">영화선택 건너뛰기</a></div>
					<div id="check_order">
						<a href="#">예매순<img src="../../images/han/check_btn.gif" alt="예매순으로 보기"></a>
						<a href="#">가나다순<img src="../../images/han/check_btn.gif" alt="가나다순으로 보기"></a>
					</div>
					<ul id="re_movie_list"></ul>
				</li>
				<li>
					<h3 id="step2">STEP 2 - 날짜선택</h3>
					<div id="step2_jump"><a class="jump" href="#step3">날짜선택 건너뛰기</a></div>
					<div id="check_date"></div>
					<div id="check_month">
						<!--<h4>월선택</h4>
						<ul class="order"></ul>-->
						<ul id="date_list"></ul>
					</div>
				</li>
				<li>
					<h3 id="step3">STEP 3 - 상영관선택</h3>
					<div id="step3_jump"><a class="jump" href="#step4">상영관선택 건너뛰기</a></div>
					<div id="seater_list">
						<dl>
							<dt><a href="#">서울특별시</a></dt>
							<dd>
								<ul>
									<li><a href="#">잠실</a></li>
									<li><a href="#">강남</a></li>
									<li><a href="#">여의도</a></li>
									<li><a href="#">종로</a></li>
									<li><a href="#">신촌</a></li>
									<li><a href="#">강변</a></li>
								</ul>
							</dd>
							<dt><a href="#">경기도</a></dt>
							<dd>
								<ul>
									<li><a href="#">용인</a></li>
									<li><a href="#">성남 야탑</a></li>
									<li><a href="#">파주</a></li>
									<li><a href="#">인천 부평</a></li>
									<li><a href="#">수원역</a></li>
								</ul>
							</dd>
							<dt><a href="#">충청도</a></dt>
							<dd>
								<ul>
									<li><a href="#">천안 터미널</a></li>
									<li><a href="#">청주 성안길</a></li>
									<li><a href="#">대전 둔산</a></li>
								</ul>
							</dd>
							<dt><a href="#">강원도</a></dt>
							<dd>
								<ul>
									<li><a href="#">강원 강원대</a></li>
									<li><a href="#">춘천</a></li>
								</ul>
							</dd>
							<dt><a href="#">전라도</a></dt>
							<dd>
								<ul>
									<li><a href="#">익산 영등</a></li>
									<li><a href="#">광주 터미널</a></li>
									<li><a href="#">전주</a></li>
									<li><a href="#">여수역</a></li>
								</ul>
							</dd>
							<dt><a href="#">경상도</a></dt>
							<dd>
								<ul>
									<li><a href="#">부산 해운대</a></li>
									<li><a href="#">부산 서면</a></li>
									<li><a href="#">포항</a></li>
									<li><a href="#">대구 수성</a></li>
								</ul>
							</dd>
						</dl>
					</div>
				</li>
				<li>
					<h3 id="step4">STEP 4 - 시간선택</h3>
					<div id="step4_jump"><a class="jump" href="#re_btn">시간선택 건너뛰기</a></div>
					<div id="check_time">2016.06월</div>
					<ul id="detail_time">
						<li><h4>D관</h4><ul></ul></li>
						<li><h4>A관</h4><ul></ul></li>
						<li><h4>O관</h4><ul></ul></li>
						<li><h4>N관</h4><ul></ul></li>
					</ul>
				</li>
			</ul>
		</article>
		<article id="customer_check">
			<h3>선택한 사항</h3>
			<ul id="sel_contents" class="clear">
				<li>
					<h4>선택영화</h4>
					<p>영화를 선택해주세요</p>
				</li>
				<li>
					<h4>날짜선택</h4>
					<p>날짜를 선택해주세요</p>
				</li>
				<li>
					<h4>상영관선택</h4>
					<p>상영관을 선택해주세요</p>
				</li>
				<li>
					<h4>시간선택</h4>
					<p>시간을 선택해주세요</p>
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
