const on = document.getElementById("on");
const off = document.getElementById("off");

const lamp = document.getElementById("lamp");

function verifi(){
return lamp.src.indexOf ("quebrada") > -1

}


function lampOn () {
    if(!verifi ()) {
lamp.src = "./ligada.jpg";
}

}

function lampOff(){
    if(!verifi ()){
    lamp.src = "./desligada.jpg"}
}

function lampBroken(){
lamp.src = "./quebrada.jpg"

}

on.addEventListener( "click", lampOn );
off.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick",lampBroken );







