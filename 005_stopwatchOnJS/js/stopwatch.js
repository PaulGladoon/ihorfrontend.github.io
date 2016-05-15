function stopWatchTimer(elem){// START Object
    
    var time = -10800000;// если поставить 0, то таймер будет сбрасиваться к 03:00:00.000
    var offset;
    var interval;
    this.timerOn = false;
    
//===============================    
    function update(){
        if(this.isOn){
            time += delta();
        }
        var formmattedTime = timeFormatter(time);
        elem.textContent = formmattedTime;
    }
    
    function delta(){
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    }
    
    function timeFormatter(timeInMilliSeconds){
        var time = new Date(timeInMilliSeconds);
        var hours = time.getHours().toString();
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();
        if(hours.length < 2){
            hours = '0' + hours;
        }
        if(minutes.length < 2){
            minutes = '0' + minutes; 
        }
         if(seconds.length < 2){
            seconds = '0' + seconds;  
        }
        while (milliseconds.length < 3){
            milliseconds = '0' + milliseconds;
        }
        return hours + ' : ' + minutes + ' : ' + seconds + ' . ' + milliseconds; 
    }
//=============================== 
    this.start = function(){
        if(!this.isOn){
            interval = setInterval(update.bind(this), 20);
            offset = Date.now();
            this.isOn = true;
            var splitBox = document.createElement('div');
                splitBox.classList.add('splitBox');
            
            var refreshContainer = document.querySelector('.innerTimer');
                refreshContainer.appendChild(splitBox);
       } 
    };
    
    this.stop = function(){
        if(this.isOn){
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };
    
    this.split = function(){
        if(this.isOn){
            var container = document.createElement('div');
            var splitTime = countClick + '. '+ timeFormatter(time);// Добавляю номер клика по сплиту
                container.innerHTML = splitTime;//Вставляет в блок сплит-время
                container.classList.add('splitTime');
            var splitText = document.querySelector('.splitBox');
                splitText.insertBefore(container, splitText.children[0]);
        }            
    };
    
    this.reset = function(){
        if(!this.isOn){   
            time = -10800000;// если поставить 0, то таймер будет сбрасиваться к 03:00:00.000
            update();
            var deletSplit = document.querySelector('.splitBox');
                deletSplit.parentNode.removeChild(deletSplit);
        }
    }; 
    
    
} ;// END Object
//================================
var timer = document.getElementById('timer');
var splitTime = document.querySelector('.splitTime');
var startPause = document.getElementById('startPause');
var reset = document.getElementById('reset');
var split = document.getElementById('split');
var watch = new stopWatchTimer(timer);
//================================
startPause.addEventListener('click', function(){
    if(watch.isOn){
        watch.stop();
        startPause.textContent = 'Resume';
    }else{
        watch.start();
        startPause.textContent = 'Stop';
    }
});
reset.addEventListener('click', function(){
    if(!watch.isOn){
        watch.reset();
        startPause.textContent = 'Start';
        countClick = 1;
    }
});

split.addEventListener('click', function(){
    
        watch.split();
        
        
} );
// Счетчик кликов по сплиту

var countClick = 1;
split.onclick = function(e){
    if(watch.isOn){
        e = e || event;
            var target = e.target || e.srcElement;
            if (target.id == 'split') {  
                    countClick++;
            } 
    }
}
    
