var botonencriptar = document.querySelector(".btn_encriptar");
var botonDesencriptar = document.querySelector(".btn_desencriptar");
var muneco = document.querySelector(".Contenedor_muneco");
var contenedor = document.querySelector(".Contenedor_parrafo");
var resultado = document.querySelector(".Texto_resultado");

botonencriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperartexto();
    resultado.textContent = encriptartexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperartexto();
    resultado.textContent = desencriptartexto(cajatexto);
}

function recuperartexto(){
    var cajatexto = document.querySelector(".caja_texto")
    return cajatexto.value
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptartexto(mensaje){
    var texto = mensaje;
    var textofinal = "";

    for(var i = 0; i < texto.length ; i++){
        if(texto[i] == "a"){
            textofinal = textofinal + "ai"
        }
        else if (texto[i] == "e"){
            textofinal = textofinal + "enter"
        }
        else if (texto[i] == "i"){
            textofinal = textofinal + "imes"
        }
        else if (texto[i] == "o"){
            textofinal = textofinal + "ober"
        }
        else if (texto[i] == "u"){
            textofinal = textofinal + "ufat"
        }
        else{
            textofinal = textofinal + texto[i]
        }
    }
    return textofinal;
}

function desencriptartexto(mensaje){
    var texto = mensaje;
    var textofinal = "";

    for(var i = 0; i < texto.length ; i++){
        if(texto[i] == "a"){
            textofinal = textofinal + "a"
            i = i+1;
        }
        else if (texto[i] == "e"){
            textofinal = textofinal + "e"
            i = i+4;
        }
        else if (texto[i] == "i"){
            textofinal = textofinal + "i"
            i = i+3;
        }
        else if (texto[i] == "o"){
            textofinal = textofinal + "o"
            i = i+3;
        }
        else if (texto[i] == "u"){
            textofinal = textofinal + "u"
            i = i+3;
        }
        else{
            textofinal = textofinal + texto[i]
        }
    }
    return textofinal;
}

const btncopiar = document.querySelector(".btn-copiar");
    btncopiar.addEventListener("click",copiar = () =>{
    var contenido = document.querySelector(".Texto_resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
    })