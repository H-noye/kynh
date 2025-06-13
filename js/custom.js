$(function () {

    //header class on
    $(window).on('scroll', function () {
        //스크롤 된 양을 구함.
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });


    // 모바일 메뉴 토글버튼, 서브메뉴 이벤트
    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on')
    });
    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on') && $(this).next().is('ul')) {
            e.preventDefault();
            $('.gnb>ul>li ul').stop().slideUp();
            $(this).next().stop().slideToggle();
        };
    });

    // 모바일 메뉴 리사이즈 
    $(window).on('resize', function () {
        let ww = $(window).width();
        if (ww > 768) {
            $('.gnb').removeClass('on');
            $('.gnb>ul>li ul').removeAttr('style');
        }
    })

    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
    });

    const sup_slide = new Swiper('.sup_slide', {
        loop: true,
        slidesPerView: 4,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
        speed: 7000,
    });
})

$(function () {

    // 탭메뉴 버튼 이벤트
    $('.main_news .inner .tap_menu button').on('click', function () {
        let idx = $(this).index(); // 클릭한 것의 번호를 가져와서 저장하기
        console.log(idx)
        $('.main_news .inner .tap_menu button').removeClass('on');
        $(this).addClass('on');


        $('.main_news .bt>*').removeClass('on');
        $('.main_news .bt>*').eq(idx).addClass('on');
    });
})