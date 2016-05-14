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
});

$(function(){
    var $helpText = $('.helpText');
    var $btn = $('#btn');
    
    
    
    console.log($btn);
    
    
    
    $btn.on('click', function(){
     
        
        
        
    });
});