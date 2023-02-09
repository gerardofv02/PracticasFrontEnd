document.onkeydown= detectKey;
var x = true;
var y =  true;

function detectKey(e){
    var barra = document.getElementById("barra");
    barra.style.position= "absolute";
    var left = barra.offsetLeft;
    var right =  window.innerWidth;
    if(e.keyCode == '37'){
        if(left -30 > 0){

            barra.style.left = (left-20) + "px";
        }
        
    }
    if(e.keyCode == '39'){
        if(right - left - 120> 0){

            barra.style.left = (left+20) + "px";
        }
        
    }
}
function move(){
    var pelota = document.getElementById("pelota");
    var barra = document.getElementById("barra");

    pelota.style.position="absolute";
    var top = parseInt(pelota.style.top) || barra.offsetTop-35;
    var left = parseInt(pelota.style.left)|| barra.offsetLeft +15;


    if(y == true){
        pelota.style.top= (10 + top) + "px";
        if(pelota.getBoundingClientRect().bottom >= barra.getBoundingClientRect().top && pelota.getBoundingClientRect().left > barra.getBoundingClientRect().left && pelota.getBoundingClientRect().left < barra.getBoundingClientRect().right && pelota.getBoundingClientRect().top < barra.getBoundingClientRect().top){
            y = false
        }
        if(pelota.getBoundingClientRect().bottom > window.innerHeight -10){
            window.location.reload();
        }
        

    }else{
        pelota.style.top= (-10 + top) + "px";

        if(top< 25){
            y = true;
        }
        
    }
    if(x == true){
        pelota.style.left= (10 + left) + "px";
        if(left > window.innerWidth-55){
            x = false;

        }
        

    }else{
        pelota.style.left= (-10 + left) + "px";

        if(left< 25){
            x = true;
        }
        
    }

    setTimeout(move,50);

    

}
