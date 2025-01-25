// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[]; //array para guardar los nombres

function nombreVacio(nombre){
    //función para verificar si el nombre está vacío
    if(nombre==""){
        return true;
    }
    return false;
}
function arrayVacio(arr){
    //función para comprobar si un array está vacío o contiene elementos
    if(arr.length > 0){
        return false;
    }
    return true;
}

function agregarAmigo(){
    //función que permite agregar nuevos amigos al array amigos[]
    let nuevoAmigo = document.getElementById("amigo").value.trim();//capturo el valor del input y elimino espacios en blanco al inicio y final
    if(nombreVacio(nuevoAmigo)){
        alert("Por favor, inserte un nombre");
    }else{
        amigos.push(nuevoAmigo);//agrego el nombre introducido al input en el array
        document.getElementById("amigo").value="";//dejo vacío nuevamente el input
        console.log(amigos);
        actualizarListaAmigos();
    }
    return;
}
function actualizarListaAmigos(){
    //función para agregar nuevos amigos a listaAmigos
    let lista=document.getElementById("listaAmigos");
    lista.innerHTML="";
    document.getElementById("resultado").innerHTML="";
    for(let i=0;i<amigos.length;i++){
        let elementoLista = document.createElement("li");
        elementoLista.innerHTML=amigos[i];
        lista.appendChild(elementoLista);
        //console.log(document.getElementsByTagName("li").length);
    }
    //console.log(lista);
    return;
}
function sortearAmigo(){
    //función para sortear al ganador
    if(!arrayVacio(amigos)){
        let indiceGanador = Math.floor(Math.random()*amigos.length);
        let result = document.getElementById("resultado");
        let ganador = document.createElement("li");
        ganador.innerHTML = "El amigo secreto es " + amigos[indiceGanador];
        result.appendChild(ganador);
        document.getElementById("listaAmigos").innerHTML="";
        amigos=[];
    }else{
        alert("No se han ingresado nombres al sorteo");
    }
    return;

}
