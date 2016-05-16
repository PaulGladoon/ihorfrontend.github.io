$(function(){
    var $links = $('.windowTab');
    
    $('.boxForText > p', $links).each(function(i){
        if ( i != 0 ) $(this).hide(0);
    });
    
    
    $links.on('click','.menu a', function(e){
    e.preventDefault();
        var tabId = $(this).attr('href');  
        
        $('.menu a', $links).removeClass();
        $(this).addClass('active');
        
        
        $('.boxForText > p', $links).hide(0);
        $(tabId).show();
        
       
    });
});//END FUNCTION 

$(function(){
    var $helpText = $('.helpText');
    var $btn = $('#btn');
    
    $btn.on('click', function(){
        $helpText.fadeIn(500);   
    });
        $('.inlineBlock').hover(function(e){
            var $input = $(e.target);
            $input.siblings($helpText).fadeIn(500);
        },function(e){
            var $input = $(e.target);
            $input.siblings($helpText).fadeOut(500);
        
        });
    
    
    
  
                 
    });//END FUNCTION 