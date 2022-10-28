let btn=document.getElementById("boton")
let tomarTiempo
function time() {
tomarTiempo=document.getElementById("tiempo").value;
return temporizador(tomarTiempo)
}
function temporizador(num){
    if (num<=0) {
        document.getElementById("resultado").innerText="finished";
    } else{
        document.getElementById("resultado").innerText=num;
        setTimeout(temporizador,1000,num-1)
    }
}

btn.addEventListener("click",time);


