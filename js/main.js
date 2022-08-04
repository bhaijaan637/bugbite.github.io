$(document).ready(function(){

  $('.mobile-icon').click(function(){
    $('.links-wrapper').toggleClass('show-menu');
    $('.top-bar').toggleClass('top-bg');
    $('.mobile-icon').toggleClass('icon-fc');
    $('.top-img').toggleClass('no-img');
    $('.top-img2').toggleClass('add-img');
    $('body').toggleClass('s-hide');
    // $('.top-img .top-img1').toggleClass('none-img');
    
  });

  $('.menubar .has-child a').click(function(){
    $(this).siblings('.menubar .menu-bar').addClass('open');

  });
  $('.menubar .bck-btn .bck').click(function(){
    $('.menubar .menu-bar').removeClass('open');
  });

//   $('secondary-btn').each(function(i) {
//     $(this).append('<i class="fas' + 'fa-angle-right ''"></i>')
// })


  $(window).width(function(){
      if ($(window).outerWidth() <= 1150) {
       $('.has-child a').on('click', function(e) {
       e.preventDefault();
       });
      }
    });
});

// Slider vedio
$(document).ready(function(){
$('.slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0px',
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 525,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ],
    });
      
    $(document).ready(function(){
    $('#filter-cele').niceSelect();
    });
});

$(document).ready(function(){
  var newsUpdateMaxHeight = 0;
  $('.news-updates .card-title').each(function(){
    if ($(this).height() > newsUpdateMaxHeight) {
      newsUpdateMaxHeight = $(this).height();
    }
  });
  if (newsUpdateMaxHeight > 0) {
    $('.news-updates .card-title').css('min-height', newsUpdateMaxHeight + 'px');
  }
});