$(function() {
  $('.jcarousel').jcarousel({
      // Базовые настройки скрипта пишутся здесь
        wrap: 'circular',
      offset: 1
  });

//Кнопка PREV
  $('.jcarousel-prev')
  .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
  })
  .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
  })
  .jcarouselControl({
      target: '-=1'
  });

    
// Кнопка NEXT
  $('.jcarousel-next')
  .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
  })
  .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
  })
  .jcarouselControl({
      target: '+=1'
  });

    
// Пагинация слайдера
    $('.jcarousel-pagination')
        .jcarouselPagination({
            item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
            }
        })
        .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    });

    
// Автопрокрутка слайдера
  $('.jcarousel').jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: true
  });
    
  
});//END FUNCTION