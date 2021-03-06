$(function() {
  var slider = $('.slider__container').jcarousel({
      // Базовые настройки скрипта пишутся здесь
      wrap: 'circular',
      animation: {
        duration: 800,
        easing:   'linear',
        complete: function() {
        }
      }
  });
    
   
    
// Пагинация слайдера
    $('.nav_icons')
        .jcarouselPagination({
            item: function(page) {
            return '<a class="nav-icons__first" href="#' + page + '">' + page + '</a>';
            
            }
        }) 
        .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('nav-icons__second').removeClass('nav-icons__first');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('nav-icons__second').addClass('nav-icons__first');
    });

    
    var classSlide = $('.nav_icons > a');
    var firstSlide = classSlide[0];
    firstSlide.classList.add('nav-icons__second');
        
    
// Автопрокрутка слайдера
  $('.contSlide').jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: true
  });
    
  
});//END FUNCTION