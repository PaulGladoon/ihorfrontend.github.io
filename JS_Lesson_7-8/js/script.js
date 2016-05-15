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
    var $inlineBlock = $('[title]');
    var $helpText = $('.helpText');
    var $btn = $('#btn');
    
    $btn.on('click', function(){
        $helpText.fadeIn(1500);   
    });
        
    
    function stringToNumb(myArray){
        for(var i = 0; i < myArray.length; i++){
            console.log(myArray[i]);    
        }
    }
        stringToNumb($inlineBlock);
        console.log(stringToNumb);
      