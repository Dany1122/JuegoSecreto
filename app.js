let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //queremos el valor y no el objeto


    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numeroDeUsuario < numeroSecreto){
        asignarTextoElemento('p','El numero es mayor');
        limpiarCaja();
    }else{
        asignarTextoElemento('p','El numero es menor');
        limpiarCaja();
    }
    intentos++;
    return;
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
        if (listaNumerosSorteados.includes(numeroSecreto)) {
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroSecreto);
            return numeroSecreto;
        }
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
}

condicionesIniciales();

/*DESAFIOS*/
/*
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python',  'Java', 'Ruby', 'GoLang'];
let calificaciones = [80,100,100,100];
let listaNumeros = [2,6,3,4,8,9];

function listaLenguajesPrograamacion() {
    console.log(lenguagesDeProgramacion);
}
function listaLenguajesPrograamacionInverso() {
    let aux = parseInt(lenguagesDeProgramacion.length-1);
    while(aux>=0){
        console.log(lenguagesDeProgramacion[aux--]);
    }
}

function promedio() {
    let aux = 0;
    let total = 0;
    while(aux<=calificaciones.length-1){
        total += calificaciones[aux];
        aux++;
    }
    let promedio = total/calificaciones.length;
    console.log(promedio);
}

function numGrandePequeño(){
    let aux = 0;
    let numeroAnterior;
    let numeroPequeño;
    let numeroGrande;
    while(aux<=listaNumeros.length-1){
        if (numeroAnterior<) {
        }
        aux++;
    }
}

listaLenguajesPrograamacion();
listaLenguajesPrograamacionInverso();
promedio();*/


/*function calcularMasaCorporal(peso,estatura) {
    console.log(typeof(estatura));
    let imc = peso/(estatura*estatura);
    return imc;
}

function calcularFactorial(num) {
    let numAnterior = 1;
    let contador = 1;
    while (contador<=num) {
        numAnterior = contador*numAnterior;
        contador++;
    }
    return numAnterior;
}

function dolaresPesos(dolares) {
    let pesos = 0;
    pesos = parseFloat(dolares*17.19);
    return pesos;
}

function calculoRectangulo(l,w) {
    let perimetro = 0;
    let area = 0;
    perimetro = (2*l) + (2*w);
    area = l*w;

    return `El area es : ${area} y el perimetro es ${perimetro}`;
    
}

function tablaMultiplicar(numero) {
    let aux = 0;
    while (aux <= 10) {
        let resultado = aux*numero;
        console.log(resultado);
        aux++;
    }
    return;
}

console.log(calcularMasaCorporal(58,1.65));
condicionesIniciales();
console.log(calcularFactorial(9));
console.log(dolaresPesos(5));
console.log(calculoRectangulo(4,2));
tablaMultiplicar(2);*/


/*
function holaM(){
console.log('Hola Mundo');
    return;
}

function holaU(nombre){
    console.log(`Hola ${nombre}`);

}

function numDoble(numero){
    let doble = numero*2;
    return doble;
}

function promedio(num1, num2, num3){
    let promedio = (num1 + num2 + num3)/3
    return promedio;
}

function numMayor(num1,num2){
    let mayor;
    if(num1<num2){
        return num2;
    }else{
        return num1;
    }
}
holaM();
holaU('Danitza');
console.log(numDoble(3));
console.log(promedio(100,80,95));
console.log(`El numero mayor es : ${numMayor(4,6)}`);*/