//Funciones y Funciones de flecha

function saludar(){
    console.log('Hola');
    // const numeros = [1,2,3];
    // console.log(numeros);
    // return numeros;
}

saludar(); // Hola

var saludar = 1;

console.log(saludar); // 1

// ------------------------------

const saludar2 = function() {
    console.log('Hola desde saludar 2');
}

saludar2(); // Hola desde saludar 2

//Funciones de flecha

const saludar3 = () => {
    console.log('Hola desde saludar 3');
}

saludar3(); // Hola desde saludar 3

const saludar4 = () => console.log('Hola desde saludar 4');

saludar4(); // Hola desde saludar 4

function sumar(a,b) {
    console.log(a+b);
}

// sumar(1,2); // 3

const sumar2 = (a,b) => console.log(a+b); 

sumar2(1,2); // 3

function sumar(a,b){
    const resultado = a + b;
    console.log(resultado);
}

const getAleatorio = () => Math.random();
console.log(getAleatorio());