;(function($){

  let cnt=0;

  // 헤더영역 스크립트 - 네비게이션(메인메뉴 & 서브메뉴)
  $('.main-btn').on({
    mouseenter: function(){
      $('.sub').fadeOut(0);
      $(this).next().fadeIn(300);
      
      $('.main-btn').removeClass('on');
      $(this).addClass('on');
    }
  });

  $('#nav').on({
    mouseleave: function(){
      $('.main-btn').removeClass('on');
      $('.sub').fadeOut(300);
    }
  });


  // 섹션1 메인슬라이드
  cnt=0;
  // 1. 메인슬라이드 함수
  function mainSlide(){
    $('.slide-wrap').animate({left: -1200*cnt }, 600, function(){
      cnt===3?cnt=0:cnt;
      $('.slide-wrap').animate({left: -1200*cnt }, 0);

      // if(cnt===3){
      //   cnt=0;
      //   $('.slide-wrap').animate({left: -1200*cnt }, 0);
      // }
    });
  }

  // 2. 다음카운트 함수
  function nextCount(){
    cnt++;
    mainSlide();
  }

  // 3. 자동타이머 함수
  function autoTimer(){
    setInterval(nextCount, 3000);
  }
  autoTimer();



  // 모달창 이벤트
  // 모달창 열기
  $('.modal-btn').on({
    click:function(e){
      e.preventDefault();
      $('.modal').fadeIn(300);
    }
  });

  $('.modal-close-btn').on({
    click:function(e){
      e.preventDefault();
      $('.modal').fadeOut(300);
    }
  });
  
})(jQuery);