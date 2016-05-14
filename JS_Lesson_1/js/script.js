    var base = prompt('write a number');
    var exponent = prompt('write exponent');


function myNewPow( a, n ) { 
    var b = a;
    if(a.indexOf(".") == 1 || n.indexOf(".") == 1 || a.indexOf(",") == 1 || n.indexOf(",") == 1 ){
        document.write(" Вы ввели неверные данные! (Только целые числа)");
    }else if (n > 0){  
        for (var i = 1; i < n; i++) {
            b = a * b;
        }
        document.write ("Число " + base + " подноситься к степени " + exponent + " и результатом будет: " +  b);
    }else if( n < 0 ){
        for (var i = 1; i < n * (-1); i++) {
            b = a * b;
    }
        b = 1/b;
        document.write ("Число " + base + " подноситься к степени " + exponent + " и результатом будет: " +  b);
    }else{
        b = 1;
        document.write ("Число " + base + " подноситься к степени " + exponent + " и результатом будет: " +  b);
    }
        return b;
}
myNewPow(base, exponent);        