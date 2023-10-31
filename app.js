//iniciamos declarando las VARIABLES y obteniendo valores
const inputRojo=document.getElementById('rojo');
const inputVerde=document.getElementById('verde');
const inputAzul=document.getElementById('azul');

const textoRojo=document.getElementById('rojo');
const textoVerde=document.getElementById('verde');
const textoAzul=document.getElementById('azul');

//valores para definir el color RGB.
//Cada valor debe estar en el rango: [´0,255].
let rojo=inputRojo.value;
let verde=inputVerde.value;
let azul=inputAzul.value;

textoRojo.textContent=inputRojo.value;
textoVerde.textContent=inputVerde.value;
textoAzul.textContent=inputAzul.value;

function actualizarColor(rojo,verde,azul){
    const colorRGB=`rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor=colorRGB;
}

//Para actualizar Red (rojo).
inputRojo.addEventListener('change',(e)=>{
    rojo=e.target.value;
    textoRojo.textContent=rojo;
    actualizarColor(rojo,verde,azul);
} );

//Para actualizar Red (verde).
inputVerde.addEventListener('change',(e)=>{
    verde=e.target.value;
    textoRojo.textContent=verde;
    actualizarColor(rojo,verde,azul);
} );

//Para actualizar Red (<azul).
inputAzul.addEventListener('change',(e)=>{
    azul=e.target.value;
    textoRojo.textContent=azul;
    actualizarColor(rojo,verde,azul);
} );