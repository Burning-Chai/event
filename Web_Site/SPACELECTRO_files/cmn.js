
/* ===================================================================
読み込み時に実行
=================================================================== */
$(function(){
	
	 setTimeout(function() {
        $("#logo2").fadeIn("1000");
		$("#logo2").addClass("animation-target2");
		
    }, 2000);
	  // テキストボックスにフォーカス時、フォームの背景色を変化
$(".focusAnime").hover(
  function () {
    $(this).addClass("animation-target");
	
  },
  function () {
	  var target = this;
	 setTimeout(function() {
        $(target).removeClass("animation-target");
    }, 2000);
  }
);
	
	
	//--------------------------
	
	$(window).load(
	function(){
		//----load画面を消す
		
		$("#loading").fadeOut("1000");
		$("#top_inner_Wrap").attr("style","");
		
	}
);
	
	
});

/* ===================================================================
画面スクロール時に実行
=================================================================== */
$(function(){
  //$('.effect img').css("display","none");
  $(window).scroll(function (){
    $(".effect").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $("img",this).addClass("animation-target2");
        //$("img",this).fadeIn("1000");
      } else {
        $("img",this).removeClass("animation-target2");
		//$("img",this).fadeOut("1000");
      }
    });
  });
});


/* ===================================================================
画面サイズ変更時に実行
=================================================================== */

var timer = false;
$(window).resize(function() {
    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
		slide("null");
    }, 500);
});



//------niconico_iphone
function disnone_fc2(){
	setTimeout(function(){
		$("#fc2_footer").css("display","none");
		},100);
};


//----------画面サイズにコンテンツを合わせる
function SetSize(target){
	var Height = window.innerHeight;
	var Width = window.innerWidth;
	 $(target).height(Height);
	 $(target).width(Width);
}


/*------------------------------------------------------
SNS設定
-------------------------------------------------------*/

function sns () {

		$('#sns').socialShare({
			social: 'twitter,facebook,google',
			whenSelect: true,
			selectContainer: '.shareSelector',
			blur: false
		});
	};
/*------------------------------------------------------
menu表示
-------------------------------------------------------*/
function show_menu(){
		if(navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("Android") != -1  ){ 
	$("h1").show();
	//$("#menu").show();
	
	}else{
	
	$("h1").slideDown();
	//$("#menu").slideDown();
	
	}
}





/* ===================================================================

 スムーススクロール

=================================================================== */

function scroll_ancer(){
   // #で始まるアンカーをクリックした場合に処理
   /**/
	$('a[href^=#]').click(function(){
		var speed = 1000;
		var zoomWidth = window.innerWidth/1200;
		var href= $(this).attr("href");
		
		var target = $(href == "#" || href == "" ? 'html' : href);
		
		var position = (target.offset().top)*zoomWidth;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
	
};





/* ===================================================================

 スライドショー

=================================================================== */

function init_slide (){
	$("#carouselinner")
    .hover(function(){
        $(this).addClass("on");
    },function(){
        $(this).removeClass("on");
    });
};


function slide (flag) {
	
	var cont_width = parseInt($("#contentsWrap").width());
	$(".slide_pa").width(cont_width);
	$(".slide_pa").height(cont_width);
	
	$("#carouselinner").css("width",cont_width*$("#carouselinner li.slide_pa").size()+"px");
	$("#carouselinner").css("margin-left",-cont_width+"px");
	
	
	//スライドの高さを取得
	/*
	setTimeout(function(){
		var slide_height = parseInt($("#carouselinner li.slide_pa:first").height());
		$("#carouselleft_bg,#carouselright_bg,#carouselright_bg img,#carouselleft_bg img").height(slide_height);
	},4000);
	*/

	
	
	
	
	if(flag == "load_page"){
		$("#carouselinner li.slide_pa:last").prependTo("#slide");
	
	
		var slide_count = parseInt($(".slide_cont").length);
	slide_count = 0 + parseInt(slide_count); 
	var slide_num = slide_count -1;
	
	var next = 0;
	var prev = 0;
	

	
	
	
	for (i = 0; i < slide_count; i = i +1){
		var src = $(".slide_pa .package:eq("+i+") img").attr("src");
		
		var target_src = "<img class='reflect' src='" + src + "' >";
		$("#slide_list").append("<li class = 'slide_list_cont'>" + target_src + "</li>");
	}
	$("#slide_list li.slide_list_cont:first").appendTo("#slide_list");
	
	$(".slide_list_cont").eq(0).addClass("active");
	
	
	
		$(".slide_list_cont").click(function(){
		next = parseInt($(".slide_list_cont").index(this));
		var count = next - prev;
		
		
		
		if(count >= 0){
			
			for (i = 0; i < count; i = i +1){
						right_slide();
			}
			
		}else{
			count = count*-1;
			for (i = 0; i < count; i = i +1){
					left_slide();
			}
			
		}
		prev = parseInt($(".slide_list_cont").index(this));
		
		$(".slide_list_cont").removeClass("active");
		$(".slide_list_cont").eq(prev).addClass("active");
		
		});
	
	
	$("#carouselleft").click(function(){
		
		if(prev == 0){
			prev = slide_num;
		}else{
			prev --;
		}
		$(".slide_list_cont").removeClass("active");
		$(".slide_list_cont").eq(prev).addClass("active");
		
		
		left_slide();
	})

	$("#carouselright").click(function(){
		
		if(prev == slide_num){
			prev = 0;
		}else{
			prev ++;
		}
		$(".slide_list_cont").removeClass("active");
		$(".slide_list_cont").eq(prev).addClass("active");
		
		right_slide();
	})
	
	}
	
	
	
};

function left_slide(){
	
		$("#carouselinner li.slide_pa").removeClass("active");
	
		var cont_width = parseInt($("#contentsWrap").width());
		$("#carouselright,#carouselleft").hide();
		$("#carouselinner").animate({
			marginLeft : parseInt($("#carouselinner").css("margin-left"))+cont_width+"px"
		},"slow","swing" , 
		function(){
			$("#carouselinner").css("margin-left",-cont_width+"px");
			$("#carouselinner li.slide_pa:last").prependTo("#slide");
			$("#carouselright,#carouselleft").show();
		})
		
		 setTimeout(function() {
		$("#carouselinner li.slide_pa").addClass("active");
    }, 1500);


	
}

function right_slide(){
	
	$("#carouselinner li.slide_pa").removeClass("active");


				var cont_width = parseInt($("#contentsWrap").width());
		$("#carouselright,#carouselleft").hide();
		$("#carouselinner").animate({
			marginLeft : parseInt($("#carouselinner").css("margin-left"))-cont_width+"px"
		},"slow","swing" , 
		function(){
			$("#carouselinner").css("margin-left",-cont_width+"px");
			$("#carouselinner li.slide_pa:first").appendTo("#slide");
			$("#carouselright,#carouselleft").show();
		})
		 setTimeout(function() {
		$("#carouselinner li.slide_pa").addClass("active");
    }, 1500);
		
	
}



function slide_timer(){
		
	
	    setInterval(function(){
		if(! $( '#carouselinner' ).is( ':animated' )   ) {
			//top
			/**/
			
			if(!$( '#carouselinner' ).is( '.on' )){
				
				if(navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("Android") != -1  ){ 
				}else{
				$("#carouselleft").click();
				}	
			}
		}

	    },2000);//setInterval終わり
};

//urlパラメーター取得

function GetQueryString() {
            if (1 < document.location.search.length) {
                // 最初の1文字 (?記号) を除いた文字列を取得する
                var query = document.location.search.substring(1);
 
                // クエリの区切り記号 (&) で文字列を配列に分割する
                var parameters = query.split('&');
 
                var result = new Object();
                for (var i = 0; i < parameters.length; i++) {
                    // パラメータ名とパラメータ値に分割する
                    var element = parameters[i].split('=');
 
                    var paramName = decodeURIComponent(element[0]);
                    var paramValue = decodeURIComponent(element[1]);
 
                    // パラメータ名をキーとして連想配列に追加する
                    result[paramName] = decodeURIComponent(paramValue);
                }
                return result;
            }
            return null;
        }
		/*
function slide_url_move(){
	var url_para = GetQueryString();
	
	for (i = 0; i < url_para["slide"]; i = i +1){
		$("#carouselright").click();
	}
}
*/




