/******************************************************************
 * 共通部分
******************************************************************/

/* autocompleteのオフ
-----------------------------------------------------------------*/

if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0) {
  $('input').attr('autocomplete', 'off');
}

/* スムーズスクロール
-----------------------------------------------------------------*/
(function ($) { $(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
}); })(jQuery);


/* 背景固定
-----------------------------------------------------------------*/

var state = false;
var scrollpos;
$('.navToggle').on('click', function(){
  $('.globalMenuSp').toggleClass('open');
  if(state == false) {
    scrollpos = $(window).scrollTop();
    $('body').addClass('fixed').css({'top': -scrollpos});
    state = true;
  } else {
    $('body').removeClass('fixed').css({'top': 0});
    window.scrollTo( 0 , scrollpos );
    state = false;
  }
});

/* サイドバー・お問い合わせ表示
-----------------------------------------------------------------*/

$(function() {
  var sideBar = $('#headerNav');    
  sideBar.hide();
  //スクロールが950に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 950) {
        sideBar.fadeIn();
      } else {
        sideBar.fadeOut();
      }
  });
});

$(function() {
  var sideBar = $('#headerNavSp');    
  sideBar.hide();
  //スクロールが668に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 668) {
        sideBar.fadeIn();
      } else {
        sideBar.fadeOut();
      }
  });
});

$(function() {
  var topContact = $('#topContactSp');    
  topContact.hide();
  //スクロールが668に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 668) {
        topContact.fadeIn();
      } else {
        topContact.fadeOut();
      }
  });
});



window.onscroll = function () {
  var check = window.pageYOffset ;       //現在のスクロール地点 
  var docHeight = $(document).height();   //ドキュメントの高さ
  var dispHeight = $(window).height();    //表示領域の高さ

  if(check > docHeight-dispHeight-600){   
      $('.contact').fadeOut(800);	
      $('.contact-wrap .contact').fadeOut(800);	

  }else{
      $('.contact').fadeIn(800);	
      $('.contact-wrap .contact').fadeIn(800);	
  }
};



/* ハンバーガーメニュー
-----------------------------------------------------------------*/

$(function() {
	$('.navToggle').click(function() {
		$(this).toggleClass('active');
			if ($(this).hasClass('active')) {
        $('.globalMenuSp').addClass('active');
        $('.fadeArea').css({ opacity: 0 });
        $('.fadeArea').each(function(i) {
          // 遅延させてフェードイン
          $(this).animate({'opacity': 1}, 1400);  
        });
			} else {
				$('.globalMenuSp').removeClass('active');
			}
	});
});



/* タブ切り替え
-----------------------------------------------------------------*/

$(document).ready(function() {
  //初期表示
  $(".tabContent").hide();//全ての.tabContentを非表示
  $(".tab-box p:first-child").addClass("is-active").fadeIn();//tabs内最初のliに.activeを追加

  //料金表初期表示
  $(".tab-box.tri p:first-child").removeClass("is-active").fadeIn();//料金表のみ最初のliの.activeを削除
  $(".tab-box.tri p:nth-child(2)").addClass("is-active").fadeIn();//料金表のみ真ん中のliに.activeを追加

  //タブクリック時
  $(".tab-box p").click(function() {
       $(".tab-box p").removeClass("is-active");//.activeを外す
       $(this).addClass("is-active");//クリックタブに.activeを追加
       $(".tabContent").hide();//全ての.tab_contentを非表示
       var activeTab = $(this).find("a").attr("href");//アクティブタブコンテンツ
       $(activeTab).fadeIn(800);//アクティブタブコンテンツをフェードイン
       return false;
  });

  if (location.hash && $(location.hash + '_handle')) {
    $(location.hash + '_handle').trigger('click');
    $(window).scrollTop($(location.hash).offset().top);

  } else {
    $(".tabContent:first").show();//最初の.tab_contentを表示
    $("#jquery-ui-tabs #tab1").hide();//料金表のみ最初のタブ内容を非表示
    $("#jquery-ui-tabs #tab2").show();//料金表のみ真ん中のタブ内容を初期表示
  
  }
});



/*
$(function () {
  $('.tabContent').hide();
  $('.tabContent').eq(0).show();
  $('.tabBtn').eq(0).addClass('is-active');
  $('.tabBtn').each(function () {
    $(this).on('click', function () {
      var index = $('.tabBtn').index(this);
      $('.tabBtn').removeClass('is-active');
      $(this).addClass('is-active');
      $('.tabContent').hide();
      $('.tabContent').eq(index).show();
    });
  });
});
*/

/* TOPへ戻るボタン
-----------------------------------------------------------------*/

(function ($) { $(function () {
  var pagetop = $('.pagetop');

  /*

  // 最初は非表示
  pagetop.hide();

  // 480pxスクロールしたらフェード表示
  var VISIBLE_SCROLL_TOP = 480;
  $(window).scroll(function () {
      if ($(this).scrollTop() > VISIBLE_SCROLL_TOP) {
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });

  */

  // クリックされた時の動作
  pagetop.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500); //0.5秒かけてトップへ移動
      return false;
  });
}); })(jQuery);


/* 横から画像がスライドしてくるアニメーション
-----------------------------------------------------------------*/

( function() {
  const image = document.querySelectorAll( '.img-wrap' );
  
  const observer = new IntersectionObserver( function( entries ) {
      entries.forEach( function( entry ) {
          if( entry.intersectionRatio > 0 ) {
              entry.target.classList.add( 'img-animation' );
          } else {
              entry.target.classList.remove( 'img-animation' );
          }
      });
  });
  
  Array.prototype.forEach.call( image, function( img ) {
      observer.observe( img );
  });
})();

/* fade-delay
-----------------------------------------------------------------*/

/******************************************************************
 * TOPMVアニメーション
******************************************************************/
(function($) {
  $(function() {
    var EffectTime = 600;
    var DelayTime = 600;
    var animateFlg = false;
    $('.delay .fade-delay').css({ opacity: 0 });

    function fadein() {
      var scMiddle = $(window).scrollTop() + $(window).height() - 60;
      if (!$('.delay').length) return;
      var listPos = $('.delay').offset().top;
      if ( !animateFlg && listPos < scMiddle ) {
        animateFlg = true;
        $('.fade-delay').each( function(index) {
          $(this).delay(DelayTime * index).animate({'opacity': 1}, EffectTime);
        });
      }
    }

    ( function() {
      const image = document.querySelectorAll( '.img-wrap' );
      
      const observer = new IntersectionObserver( function( entries ) {
          entries.forEach( function( entry ) {
              if( entry.intersectionRatio > 0 ) {
                  entry.target.classList.add( 'img-animation' );
                // ターゲット要素の監視を停止
                observer.unobserve( entry.target );
              } else {
                  entry.target.classList.remove( 'img-animation' );
              }
          });
      });
      
      Array.prototype.forEach.call( image, function( img ) {
          observer.observe( img );
      });
    })();
    

    if ($('html.front').length) {
      var disableAnimation = $.cookie("access");
      var animTargetElements = [
        '.animmv__first-logo img', '.animmv__white-circle', '.animmv__second-logo', '.animmv__navToggle',
        '.animmv__illust', '.animmv__intro', '.animmv__scroll', '.animmv__contact', '.animmv__catchcopy'
      ];

      if (disableAnimation) {
        // アニメーション無効時
        for (i = 0; i < animTargetElements.length; i++) {
          $(animTargetElements[i]).addClass('_animated');
        }
        animateCatchcopy(false);
        
      } else {
        // アニメーション有効時
        for (i = 0; i < animTargetElements.length; i++) {
          $(animTargetElements[i]).addClass('_animating');
        }

        setTimeout(function() {
          animateCatchcopy(true);
        }, 2800)
      }
    
      setTimeout(function() {
        if (! disableAnimation) {
          for (i = 0; i < animTargetElements.length; i++) {
            $(animTargetElements[i]).removeClass('_animating');
            $(animTargetElements[i]).addClass('_animated');
          }
        }

        $('html').removeClass('front');

        $(window).on('scroll load', fadein);

        $(window).on('scroll', function() {
          if ($(window).scrollTop() > $(window).height()) {
            $('.animmv__inner').css('display', 'none');
          } else {
            $('.animmv__inner').css('display', 'block');
          }
        });
      }, disableAnimation ? 0 : 4500);

    } else if ($('.transition-anim').length) {
      setTimeout(function() {
        $('.transition-anim').addClass('_anim');
      }, 200);

      setTimeout(function() {
        $('.mv-sub p').addClass('_anim');
      }, 1100);

      setTimeout(function() {
        $('.mv-sub h2').addClass('_anim');
      }, 1300);

      setTimeout(function() {
        $('.main-body').addClass('_anim');
        $('.delay .fade-delay').css({ opacity: 0 });
        fadein();
        $(window).on('scroll load', fadein);
      }, 1600);
    } else {
      fadein();
      $(window).on('scroll load', fadein);
    }
  });


  /**
   * MVキャッチコピーを1文字ずつ表示
   */
  function animateCatchcopy(animation) {
    $('.animmv__catchcopy ').css('opacity', 1);

    var $copy = $('.animmv__catchcopy p')
      , html = $copy.html().trim().replace(/\r?\n/g, '')
      , chars = [];

    // <span>で囲われた文字は1文字としてカウント
    // <br>は一つ前の文字と合わせて1文字としてカウント
    while(html.length) {
      var m = html.match('^((<span class="dot">.</span>)|(<br( class="[^>]+")?>)|(.))(.*)');
      if (m[3]) {         // <br>
        chars[chars.length-1] += m[3]
      } else if (m[2]) {  // <span>, その他文字
        chars.push(m[2]);
      } else {
        chars.push('<span>' + m[5] + '</span>');
      }
      html = m[6];
    }

    // 初期化
    $copy.html(chars.join(''));

    var charTags = $copy.find('span');

    if (animation) {
      function showChar(list, index) {
        list.eq(index).css('opacity', 1);
        if (index < list.length - 1) {
          setTimeout(function() {
            showChar(list, index+1)
          }, 100);
        }
      }
  
      setTimeout(function() {
        showChar(charTags, 0);
      }, 100)

    } else {
      charTags.css('opacity', 1);
    }
  }
})(jQuery);

if (!window.console){
  window.console = {
      log : function(msg){
          // do nothing.
      }
  };
}


/* jQuery Cookie
-----------------------------------------------------------------*/

$(function(){
  $(window).on('load', function(){
    $.cookie("access",$('body').addClass('access'));
  })
});



/******************************************************
 * MW WP Form 各種input表示調整
 ******************************************************/
jQuery(function($) {
  // 電話番号入力欄をtype="tel"に変更(スマホで数字入力を出す)
  var telInputs = document.querySelectorAll( '.mw_wp_form .input-tel' );
  Array.prototype.forEach.call( telInputs, function( input ) { input.type = 'tel'; } );
});