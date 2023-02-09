document.onkeydown= detectKey;
var x = true;
var y =  true;
var bloqueRowCount = 5;
var bloqueWidth = 75;
var bloqueHeight = 20;
var bloquePadding = 20;
var bloqueOffsetTop = 100;
var bloqueOffsetLeft = 55;
var bloqueColumnCount = window.innerWidth%bloqueWidth/2.7 ;

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
        if(right - left - 190> 0){

            barra.style.left = (left+20) + "px";
        }
        
    }
}
function move(){
    var comienzo = document.getElementById("comienzo");
    var pelota = document.getElementById("pelota");
    var barra = document.getElementById("barra");
    comienzo.style.color = "black";

    pelota.style.position="absolute";
    var top = parseInt(pelota.style.top) || barra.offsetTop-35;
    var left = parseInt(pelota.style.left)|| barra.offsetLeft +15;


    if(y == true){
        pelota.style.top= (10 + top) + "px";
        if(pelota.getBoundingClientRect().bottom >= barra.getBoundingClientRect().top && 
        pelota.getBoundingClientRect().left > barra.getBoundingClientRect().left && 
        pelota.getBoundingClientRect().left < barra.getBoundingClientRect().right && 
        pelota.getBoundingClientRect().top < barra.getBoundingClientRect().top){
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
    setTimeout(colisionBloque,10);

    setTimeout(move,60);

    

}

window.onload = function crearBloques(){
    var pelota = document.getElementById("pelota");
    for (var c = 0; c < bloqueColumnCount; c++) {
        for (var r = 0; r < bloqueRowCount; r++) {
            var bloqueX = (c * (bloqueWidth + bloquePadding)) + bloqueOffsetLeft;
            var bloqueY = (r * (bloqueHeight + bloquePadding)) + bloqueOffsetTop;
            var bloque = document.createElement("div");
            bloque.style.width = bloqueWidth + "px";
            bloque.style.height = bloqueHeight + "px";
            bloque.style.left = bloqueX + "px";
            bloque.style.top = bloqueY + "px";
            bloque.style.position = "absolute";
            bloque.style.marginLeft = "10px";
            bloque.style.border = "solid";
            bloque.style.borderColor= "white";
            bloque.style.borderWidth = "1px";
            bloque.setAttribute("id", "bloque" + r + c);
            if (r == 0) {
                bloque.style.backgroundColor = "red";
            } else if (r == 1) {
                bloque.style.backgroundColor = "blue";
            } else if (r == 2) {
                bloque.style.backgroundColor = "green";
            } else if (r == 3) {
                bloque.style.backgroundColor = "yellow";
            } else if (r == 4) {
                bloque.style.backgroundColor = "orange";
            }
            document.getElementById("bloquesitos").appendChild(bloque);
        }
    }

}

function colisionBloque(){
    var pelota = document.getElementById("pelota");

    for (var c = 0; c < bloqueColumnCount; c++) {
        for (var r = 0; r < bloqueRowCount; r++) {
            var bloque = document.getElementById("bloque" + r + c);

            if (pelota.getBoundingClientRect().top < bloque.getBoundingClientRect().top + bloque.getBoundingClientRect().height &&
            pelota.getBoundingClientRect().top + pelota.getBoundingClientRect().height > bloque.getBoundingClientRect().top &&
            pelota.getBoundingClientRect().left < bloque.getBoundingClientRect().left + bloque.getBoundingClientRect().width &&
            pelota.getBoundingClientRect().left + pelota.getBoundingClientRect().width > bloque.getBoundingClientRect().left) {
                bloque.style.display = "none";
                y = true;
            }

            if (pelota.getBoundingClientRect().top > bloque.getBoundingClientRect().top + bloque.getBoundingClientRect().height &&
            pelota.getBoundingClientRect().top + pelota.getBoundingClientRect().height < bloque.getBoundingClientRect().top &&
            pelota.getBoundingClientRect().left > bloque.getBoundingClientRect().left + bloque.getBoundingClientRect().width &&
            pelota.getBoundingClientRect().left + pelota.getBoundingClientRect().width < bloque.getBoundingClientRect().left) {
                bloque.style.display = "none";
                y = false;
            }
        }
    }


}

  


