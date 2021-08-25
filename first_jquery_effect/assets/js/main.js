(function ($)
  { "use strict"
  
/* 1. Preloder (готовый код, можно использовать в любом проекте) */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });

/* 2. Sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
      }
    });

  // Scroll Up
    $('#back-top a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  

})(jQuery);

// slide

var mySwiper = new Swiper ('.swiper-container', {
  direction : 'horizontal',
  spaceBetween : 0,
  slidesPerView: 1,
  speed: 800,
  loop : true,
  stopOnLastSlide : false,
  autoplay : {
      delay: 2000
  }
})


//Paralax

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

//tabs

$('.nav-item').on('click', function(e) {
  e.preventDefault()
  var currTab = $(this).index()

  $('.nav-item').removeClass('active')
  $(this).addClass('active')
  

  $('.tab-pane').removeClass('active show')
  $('.tab-pane').eq(currTab).addClass('active show')

})

$(document).ready(function (){
  $("#nav-tab").click(function (){
      $('html, body').animate({
          scrollTop: $("#nav-tabContent").offset().top
      }, 1000);
  });
});

//Modal
$('.header-btn').on('click', function() {
    $('.modal-wrapper').fadeIn()
})

$('.form-modal__close').on('click', function() {
  $('.modal-wrapper').fadeOut()
})

$('.modal-wrapper').on('click', function() {
  $('.modal-wrapper').fadeOut()
})

$('.modal-wrapper').children().on('click', function(e) {
  e.stopPropagation()
})

$('.thanks-window').on('click', function() {
    $('.thanks-window').fadeOut()
})


// Hamburger

$('.slicknav_btn').on('click', function() {
  $('.mobile-menu').slideToggle()
})

$('.mobile-menu__close').on('click', function(){
  $('.mobile-menu').slideToggle()
})

$('.submenu').on('click', function(){
  $('.mobile-submenu').slideToggle()
})

//Validate
    $('[data-submit]').on('click', function(e){
        e.preventDefault()
        $(this).parent('form').submit()
    })

    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value)
        },
        "Please check your input."
    );

function valEl(el) {
    el.validate({
        rules: {
            name: {
               required: true,
               regex : "[A-Za-z]{1,32}"
            },
            email: {
                required: true,
                email: true
            },
            phone: {
              digits : true,
              required: true,
              minlength: 10,
              maxlength: 11,
              regex: "[0-9]+"
          }
        },
        message: {
            phone: {
                required: 'Field is required',
                regex: 'Enter your phone properly'
            },
            name: {
                required: 'Field is required',
                regex: 'Enter your name properly'
            },
            email: {
                required: 'Field is required',
                regex: 'Enter your email properly'
            }
        },

        submitHandler: function(form) {
            $('#preloader-active').fadeIn()
            let $form = $(form)
            let $formId = $(form).attr('id')
            switch ($formId) {
                case 'modalForm':
                    $.ajax({
                        type: 'POST',
                        url: $form.attr('action'),
                        data: $form.serialize()
                    })
                        .done(function () {
                            console.log('OK')
                        })
                        .fail(function () {
                            console.log('Fail')
                        })
                        .always(function () {
                            setTimeout(function () {
                                $form.trigger('reset')
                            })
                            setTimeout(function () {
                                $('#preloader-active').fadeOut()
                            }, 1400)
                            setTimeout(function () {
                                $('.thanks-window').fadeIn()
                            }, 1000)
                        })
                    break
                case 'mainForm':
                    $.ajax({
                        type: 'POST',
                        url: $form.attr('action'),
                        data: $form.serialize()
                    })
                        .done(function () {
                            console.log('ok')
                        })
                        .fail(function () {
                            console.log('Fail')
                        })
                        .always(function () {
                            console.log('Always')
                            setTimeout(function () {
                                $form.trigger('reset')
                                $('.modal-wrapper').fadeOut()
                            }, 1000)
                            setTimeout(function () {
                                $('#preloader-active').fadeOut()
                            }, 1400)
                            setTimeout(function () {
                                $('.thanks-window').fadeIn()
                            }, 1000)
                        })
                    break
            }
            return false
        }
    })
}
$('.js-form').each(function (){
    valEl($(this))
})

