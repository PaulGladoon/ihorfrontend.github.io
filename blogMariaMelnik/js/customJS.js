	var mouse_x = $(window).width()/2;
	var mouse_y = $(window).height()/4;
   

	var k1, k2;
		fieldW = 1990;
		fieldH = 1450;

    $(function() {
        adaptPage();
        var interval = setInterval("adaptField(mouse_x, mouse_y);", 80);
    });

    function adaptField(x, y) {
        $(".wrapper").css({transform: "translate3d("+x*k1*(-1.25)+"px, "+y*k2*(-2.9)+"px, 0px)"});
    };

    function adaptPage() {
        var windowWidth = $(window).width();
		var windowHeight = $(window).height();
            k1 = (fieldW - windowWidth)/windowWidth;
            k2 = (fieldH - windowHeight)/windowHeight
        $('.wrapper').css({width: fieldW, height: fieldH});
        $('body').css({width: windowWidth, height: windowHeight});
        
    };

        ns4 = (document.layers)? true:false
		ie4 = (document.all)? true:false

        function init() {
            if (ns4) {document.captureEvents(Event.MOUSEMOVE);}
			    document.onmousemove=mousemove;
			}
			function mousemove(event) {
			    
			    if (document.attachEvent != null) {
			        mouse_x = window.event.clientX;
			        mouse_y = window.event.clientY;
			    } else if (!document.attachEvent && document.addEventListener) {
			        mouse_x = event.clientX;
			        mouse_y = event.clientY;
			    }
			    status="x = " + mouse_x + ", y = " + mouse_y;
			}
			  init();

       

			
		