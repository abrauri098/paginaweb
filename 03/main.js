var alto=document.getElementById("alto");
var ancho=document.getElementById("ancho");
var resultado=document.getElementById("resultado");
var figura=document.getElementById("figura");
var radius=document.getElementById("radius");
var vradio=document.getElementById("vradio");


alto.oninput=()=>{
    figura.style.height=alto.value+"px";
    document.getElementById("valto").innerHTML=alto.value;
}
ancho.oninput=()=>{
    figura.style.width=ancho.value+"px";
    document.getElementById("vancho").innerHTML=ancho.value;
}
color.onchange=()=>{
    figura.style.backgroundColor=color.value;
}

radius.oninput=()=>{
    figura.style.borderRadius=radius.value+"%";
    document.getElementById("vradio").innerHTML=radius.value;
}

ancho.oninput=()=>{
    figura.style.width=ancho.value+"px";
    document.getElementById("vancho").innerHTML=ancho.value;
}
tipoborde.onchange=()=>{
    figura.style.borderStyle=tipoborde.value;
}