
$(document).ready(function(){

	black_dim();

	$('.pub_vid_box').on("click", function() {


		var $this_dom = $(this);

		//클릭한 요소가 이미 재생중인지 표식클래스 남겨서 있으면 스크립트정지
		if( $this_dom.hasClass('vi_on') ){
			return
		}

		var option = {
			m_type:'',
			m_id: $this_dom.attr('m-id'),
			m_url: $this_dom.attr('m-url'),
			m_option: $this_dom.attr('m-option'),
			m_volume: $this_dom.attr('m-volume'),
			m_img: $this_dom.attr('m-img'),
			m_code_reset:function(){
				//pub_vid_box에 새로운 div로 감싸게 만들고 그 div에다가 id와 type를 기록해둔다.
				$('#'+this.m_id).wrap('<div class="pub_player_zone" v-id="'+this.m_id+'" style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:2;"></div>');
				$('.pub_vid_box').each(function(){
					var $this_vb = $(this);
					if( $this_vb.attr('m-type') == 'mp4' && $this_vb.hasClass('vi_on') ){
						jwplayer($this_vb.attr('m-id')).remove(); //jw적용된거 해제
					}
					$this_vb.removeClass('vi_on'); //실행중인 표식 클래스 삭제
				});
				$this_dom.addClass('vi_on'); //클릭한 영상 묶음에만 클래스 추가
				$('.pub_player_zone').each(function(){
					//.pub_player_zone 를 차례차례 돌면서 자식요소를 <div id=""></div> 로 덮어버린다.(영상 iframe 지우기용)
					var $this_pz = $(this);
					$this_pz.html('<div id="'+$this_pz.attr('v-id')+'"></div>');
				});
			},
			type_check:function(){
				if(this.m_url.indexOf('.mp4') != -1){ this.m_type='mp4'; }
				if(this.m_url.indexOf('youtube.com') != -1){ this.m_type='youtube'; }
				if(this.m_url.indexOf('naver.com') != -1){ this.m_type='naver'; }
			},
			type_mp4:function(){
				jwplayer.key = 'Y+64W/8MQ0gfzEjZ08kw15uLcI1FSms/ACsTThls+O0=';
				jwplayer(this.m_id).setup({
					file: this.m_url,
					image: this.m_img,
					width: '100%',
					height: (this.m_option.match('&audio=1') == '&audio=1') ? '40px': '100%',
					autostart: (this.m_option.match('&autoplay=1') == '&autoplay=1') ? false: true,
					repeat: (this.m_option.match('&repeat=1') == '&repeat=1') ? true: false,
					//aspectratio: '16:9',
					stretching: 'uniform',
					controls:(this.m_option.match('&controls=1') == '&controls=1') ? false : true,
					volume: this.m_volume
				});
			},
			type_youtube:function(){
				this.m_option+='amp;autoplay=1'
				$('#'+this.m_id).html("<iframe class='pub_iframe' style='position:absolute;top:0;left:0;width:100%;height:100%;' src='"+this.m_url+'?'+this.m_option+"' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'></iframe>");
			},
			type_naver:function(){
				this.m_option+='&isAutoPlay=true'
				$('#'+this.m_id).html("<iframe class='pub_iframe' style='position:absolute;top:0;left:0;width:100%;height:100%;' src='"+this.m_url+this.m_option+"' frameborder='no' scrolling='no' marginwidth='0' marginheight='0' allow='autoplay' allowfullscreen></iframe>");
			},
			init:function(){
				this.m_code_reset();
				this.type_check();
				if( this.m_type == 'mp4'){ this.type_mp4() }
				if( this.m_type == 'youtube'){ this.type_youtube() }
				if( this.m_type == 'naver'){ this.type_naver() }
				//eval('this.f_'+this.m_type);
			}
		};
		option.init();
	});
});

//현재페이지 내부의 .pub_vid_box 하나씩 접근해서 dim마스크 bg를 넣는다.
function black_dim(){
	$('.pub_vid_box').each(function(){
		var $this_vb = $(this);
		//$('#'+$this_vb.attr('m-id')).wrap('<div class="pub_player_zone" v-id="'+$this_vb.attr('m-id')+'" v-type="'+$this_vb.attr('m-type')+'" style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:2;"></div>');
		$this_vb.css('cursor','pointer');
		if( $this_vb.find('.black_dim').length == 0 ){
			$this_vb.append('<div class="black_dim" style="position:absolute;top:0;left:0;width:100%;height:100%;background:#333;opacity:0;filter:alpha(opacity=0)"></div>');
		}
	});
};

//영상 정지 및 초기화
function video_stop(){
	$('.pub_vid_box').each(function(){
		var $this_vb = $(this);
		if( $this_vb.attr('m-type') == 'mp4' && $this_vb.hasClass('vi_on') ){
			jwplayer($this_vb.attr('m-id')).remove(); //jw적용된거 해제
		}
		$this_vb.removeClass('vi_on'); //실행중인 표식 클래스 삭제
	});
	$('.pub_player_zone').each(function(){
		var $this_pz = $(this);
		$this_pz.html('<div id="'+$this_pz.attr('v-id')+'"></div>');
	});
};

