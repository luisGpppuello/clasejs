
//recipiente = "comida";

//alert(recipiente)


// tipos de datos 
//String = "cadena de texto",
//Number = 19 estos van sin comillas y sin punto
//Boolean = true y false
//Symbol = tipos de datos mas especial
//casos especiales= undefined, null, nan;

//las varaibles se pueden declarar como:
//var, let, const.

// const nombre = "luis"; siempre va ser luis porque es constatante

// let numero;
// alert(numero) la variable no esta definida la variable es undefine

// para definir la variable hay que ponerle un dato o un valor 
// let numero = 29;
// alert(numero)

//const numero= 23;
//alert(numero)

//declarar varias variables al mismo tiempo
//let numero =10, numero2=20, numero3=30;

//alert(numero + numero2 + numero3)

//tambien se puede hacer de otra manera por que se ve mas organizada

/*let numero = 20;
let numero2 = 30;
let numero3 = 40;

alert (numero + numero2 + numero3)

El concepto de Hoisting CONCEPTO QUE tenemos que aprender


// la variable esta declarada vacia, null ya esta inicializada pero el valor es vacia 

//let numero =null;


//NaN este valor es ejecutado cuando se multiplica un numero con una palabra

let numero= 5;
let numero2= "nuis";

alert(numero * numero2)

//en la operacion anterio el valor es NaN. PORQUE un numero es multiplicadocon una cadena



// el pron es un tipo de varible en donde al ejecutarlo hay que ingresar un valor por pantalla

//prompt ("Hola Luis como estas?")

// es una funcion que se le asigna el valor, aqui seria bien gracias

//para gurdar el valor con esta funcion creamos la variable asi:

let saludo =prompt("hola luis como estas")
alert(saludo)

//en este ejercicio la varible saludo guarda el dato ingresado y luego lo muestra pantalla
//otor ejemplo seria, en este ejemplo de concatenar el hola con el dato ingresado, tener en cuenta la separacion de ambos

 

let nombre= prompt("como te llamas")

alert("hola " + nombre)


//los operadores,
//OPERADORES ARITMETICOS "toman valores numericos"y retoman un valor numerico unico
//OPERACION DE ASIGNACION asigna un valor al operador de la izquierda basado en el valor del operador de la derecha "tabla"

let numero = 10;

numero *= 5;

document.write(numero)// con el docuemt.write podemos imprimir, se agrega a la pantalla el valor

//para restar le agragamos solo el signo menos
//para multiplicar se agega el signo de multiplicar
//para dividir /
//el resto % muestra el resto de una division
// exponensicion ** agrega los 5 ceros
//nota tener encuenta que el signo debe ir pegado al signo igual

//vamos una hora youtube.



//con esta operacion eld resultado es 9 porque se le esta restando al valor de la variable numero1

numero1 = 10;
numero2 = 5 ;

numero1-- 

resultado = numero1;

alert(numero1)

//en la operacion de exponencia siahay que utilizar ambos numeros de la siguiente manera


numero1 = 10;
numero2 = 5 ;


resultado = numero1**numero2;

alert(resultado)



// para comprender que el valor inicial es 10, luego se incrementa y el resultado cambia a 11
numero1 = 10;
numero2 = 5 ;

numero1++;

resultado = numero1;

alert(resultado)



//el mismo ejercicio con el dato numero2; el resultado es 6

numero1 = 10;
numero2 = 5 ;

numero2++;

resultado = numero2;

alert(resultado)



// aca se restan 
numero1 = 10;
numero2 = 5 ;



resultado = numero1 - numero2;

alert(resultado)


// el resto de 10/5 = 0 

numero1 = 10;
numero2 = 5 ;



resultado = numero1&numero2;

alert(resultado)

//negacion unaria , el resultado es lo contrario 

numero1 = 10;
numero2 = 5 ;

resultado = -numero1;

alert(resultado)


//CONCATENACION: ES LA UNION DE STRING O CADENAS

saludo = "!Hola Tiago¡ ";
pregunta = " ¿Como estas?"

frase = saludo + pregunta;

document.write(frase)

//tener en cuenta que js es de tipado dinamico y cundo queremos unir una cadena de texto con numero lo que hace es:
numero1 = 53;
numero2 = 8;


frase = numero1 + numero2;

document.write(frase)

//el resultado es 61

//pero si le colocamos un string "" cambia el resultado
numero1 = 53;
numero2 = 8;


frase = "" + numero1 + numero2;

document.write(frase)

//el resultado cambia a 538, todo lo demas sera leido como string

//para utilizar el concat que es una funcion hay que tener strin y un numero o pueden ser dos string, pero dos numeros no se pueden concatenar

numero1 = "53";
numero2 = "8";


frase = numero1 + numero2;

document.write(frase)//tenemos la suma de dos strin "" el resultado es 538

//para utilizar el concat queda asi: un string "503" y un numero 8
numero1 = "503";
numero2 = 8;


frase = numero1.concat (numero2);

document.write(frase)
//El resultado es 5038

//ejemplo de concatenar no adecuado

nombre = "Luis Gustavo  ";
frase = "I am " + nombre + "and I am walking"

document.write(frase)

// la manera correcta de hacer la concatenacion 

nombre = "Luis Gustavo ";
frase = `I am ${nombre} and I am walking`;

document.write(frase)

// tener encuenta que para sacar la comilla a lo contrari control+alt+} u para comentar control+}. ``bastin importante para todo 

// importante tener encuenta las comillas dobles en algunos casos y las comillas simpler de igualmanera esto lo tendremos como un escape de comillas

nombre = "Luis Gustavo ";
frase = "I am 'nombre' and I am walking";
numero2 = "soy marco y tengo un amigo 'luis' ";

document.write(numero2)

// no entendi mucho sobre el scape de comillas pero bueno, se ejecuta la accion como esta escrita normal. pero si es un escape de comillas.

// operadores de comparacion y operadores logicos 
// de conparacion son true o false

let numero = 20;
let numero2 = 30;

document.write(numero == numero2)
// la respuesta seria false

let numero = 30;
let numero2 = 30;

document.write(numero == numero2)
// la respuesta seria true o verdadera

let numero = 30;
let numero2 = 40;

document.write(numero > numero2)
// la respuesta seria false porque 30 no es mayor a cuarenta

//esta lo que me dice es que el valor es distinto al otro 
let numero = 10;
let numero2 = 40;

document.write(numero != numero2)
//la respuesta seria true porque 10 es diferente a 40


let numero = "40";
let numero2 = 40;

document.write(numero == numero2)

// aca la respuesta es verdadera true pero que pasa en este caso:

let numero = "40";
let numero2 = 40;

document.write(numero === numero2)

//la respuesta sera falsa porque este compara mas a fondo y ve que uno es una cadena y el otro es un numero

//aca tenemos el estrictamente distinto que es interesante.
let numero = "40";
let numero2 = 40;

document.write(numero !== numero2)
// la respuesta es false porque tenemos un string y un numero


// MENOR, MAYOR O IGUAL
let numero = "50";
let numero2 = 55;

document.write(numero >= numero2)
//aqui la respuesta seria false pporque 50 es menor que 55 y no son iguales 


let numero = 15;
let numero2 = 15;

let resultado = numero >= numero2;
document.write(resultado)
//la respuesta seria verdadera

//OPERADORES LOGICOS, nos devuelven un resultado apartir de que se culpla (o no) una condicion, su relsultado es boleam y sus operdores son valores logicos o similares a ellos

numero =12;
numero2 = 24;
afirmacion1 = numero < numero2;
afirmacion2 = numero > numero2,

document.write(afirmacion1 && afirmacion2)

//la respueta seria false porque tengo una de las afirmaciones falsa.

numero =12;
numero2 = 24;
afirmacion1 = numero < numero2;
afirmacion2 = numero != numero2,

document.write(afirmacion1 && afirmacion2)
// el resulyado es verdadero porque ambas afirmaciones son verdadera

numero =12;
numero2 = 24;
afirmacion1 = numero == numero2;
afirmacion2 = numero === numero2,

document.write(afirmacion1 && afirmacion2)
//false ambas afirmaciones son falsas


//con esta funsion es parecida pero es lo contrario de aquella, en esta solo vasta tener una de las condiciones verdaderas para que sea true

numero =12;
numero2 = 24;
afirmacion1 = numero < numero2;
afirmacion2 = numero > numero2,

document.write(afirmacion1 || afirmacion2)
//aqui la condicion es verdedera poruqe numero es menor que numer2

// esta es la etapa debuelve lo contrario de lo que es el valor 
numero =12;
numero2 = 24;
afirmacion1 = numero < numero2;
afirmacion2 = numero != numero2,

document.write(!afirmacion2)
// la condicion es verdadera en las dos partes que tiene pero el me devuelve el valor contrario en este caso false.


numero1 = 10;
numero2 = 14;
numero3 = 20;
numero4 = 30;
numero5 = 40;

op =(numero5 > numero2 && numero4 < numero3) || (!(numero1 === numero2) || numero3 != numero3)

document.write(op)
//con este ejemplo podemos verificar todos los oporadores logicos, tener en cuenta que al resolver la operacion primero van la de los parentesis y asi sucesivamente


//PARA TENER EN CUENTA QUE: EN las variables de javaScript la primera palabre va en minuscula pero la palabre que sigue comienza con mayuscula

// ejemplo : definir una veriable con el nombre: camvioConstanteNumeroDos 
// vemos que la segunda la tercera palabra que comienza el nombre de la constante comienza con mayuscula


//CONDICINALES 
//Son como bloques que va dentro de las llaves y la condicion que esta dentro se ejecuta si se cumple si no cumple no se ejecuta

if (false){
    alert("hola")
}
//no es verdaero por lo tanto la condicion o el bloque no se cumple no se ejecuta.

if (10 > 5){
    alert("hola")
}
//la condicion es verdadera por lo tanto se ejecuta.

nombre = "LUIS GUSTAVO";

if (nombre == "LUIS GUSTAVO"){
    alert("correcto")
}

//TENER EN CUENTA QUE DIFERENCIA ENTRE MAYUSCULAS y minusculas, la condicion se ejecuta porque es igual 

nombre = "LUIS GUSTAVO";

if (nombre == "LUIS GUSTAVo"){
    alert("correcto")
}else{
    alert("incorrecto")
}
//ejemplo de la condicion mi nombre en este caso es incorrecto porque tiene una minuscula, la condicion que se ejecuta es la segunda incorrecto


let nombre = "yina";

 
if (nombre == "yi"){

    alert("he")
}

//EN  este ejercicio aprendi una leccion grande sobre estas funciones o condiciones, si lolo se coloca el signo = solo siempre se va a ejecutar la funcion sea verdaera o falsa

let hermana = "tina";
let hermana2 = "tendy";
let hermana3 = "tisle";

if (hermana == "yina"){
    alert("esta es mi hermana menor")
}
else if (hermana2 == "wendy"){
    alert("esta es mi herman del medio")
}
else if(hermana3 == "yisle"){
    alert("esta es mi herman mayor")
}else{
    alert("no son mis hermanas")

}

// con este pequeño algoritmo puede verificar las tres funciones y si complen, en este momento no cumplen porque los nonbres estan mal escritos apropoxito, el programa arroja que no son mis hermanas

let hermana = "yina";
let hermana2 = "wendy";
let hermana3 = "yisle";
let hermano = "luis";

if (hermano == "luis"){
    alert("luis presentame a tus hermanas")
}
if (hermana == "yina"){
    alert("Esta es mi hermana menor Yina")
}
if (hermana2 == "wendy"){
    alert("Esta es mi herman del medio Wendy")
}
if(hermana3 == "yisle"){
    alert("Esta es mi herman mayor Yisle")
}else{
    alert("no son mis hermanas")

}
//aqui en este ejemplo podemos ver como se ejecutan las tres condiciones porque son verdaderas utilizando solo el if.


// tres chIcas quieren comprar elados para ellos, pero hay un problema que los helados no tienen el precio el los estantes y ellos quieren comprar el helado mas caro. como podemos ayudarles 

conpras1 = prompt("Quieres comprar helados");
dineroYina = prompt("cuanto dinero tienes Yina?");
dineroWendy = prompt("cuanto dinero tienes wendy?");
dineroYisle = prompt("cuanto dinero tienes Yisle?");




if (dineroYina >= 500 && dineroYina < 900){
    alert("Yina comprate un boli")
}

else if (dineroYina >= 1000 && dineroYina <1900){
     
    alert("Comprete una paleta Yina")
}

else if (dineroYina >= 2000 && dineroYina < 2400 ){

    alert("comprate un helado de cream")
}

else if(dineroYina >= 2500 && dineroYina < 3000){
    alert("Puedes comprar un CHOCOCONO GRANDE")
}

else if (dineroYina >= 3000 && dineroYina < 4000){
    alert("Brownie CON CHISPA es el helado mas aro que tenemos")

}
else{
    alert("Pide prestado Yisle o Wendy que esta pela Yina")

}


if (dineroWendy >= 500 && dineroWendy < 900){
    alert("Wendy comprate un boli")
}
else if (dineroWendy >= 1000 && dineroWendy < 1900){
     
    alert("comprete una paleta de agua wendy")

}
else if (dineroWendy >= 2000 && dineroWendy < 2400 ){

    alert("comprate un helado de cream roja Wendy")
}

else if(dineroWendy >= 2500 && dineroWendy < 3000){

    alert("Puedes comprar un CHOCONO GRANDE WENDY")
}

else if (dineroWendy >=3000 && dineroWendy < 4000){

    alert("Brownie CON CHISPA es el helado mas Karo que tenemos WENDY")
}else{
    alert("Pide prestado a Yina o Yisle que esta pela Wendy Carolina")

}


if (dineroYisle >= 500 && dineroYisle < 900){
    alert("YISLE comprate un boli")
}
else if (dineroYisle >= 1000 && dineroYisle < 1900){
     
    alert("Comprete una paleta de agua yisle")

}
else if (dineroYisle >= 2000 && dineroYisle < 2400 ){

    alert("comprate un helado de cream roja YISLE ")
}

else if(dineroYisle >= 2500 && dineroYisle < 3000){
    alert("puedes comprar un CHOCOCONO GRANDE YISLE")
}

else if (dineroYisle >= 3000 && dineroYisle < 4000){

    alert("Brownie CON CHISPA es el helado mas caro que tenemos YISLE")
}else{
    alert("Pide prestado a wendy o Yina que esta pela Yisleiner")

}

//despues el busco la manera de dar el valor restante o vueto que le queda a la primera persona



//LOS ARRAYS O arrays ;
// saber que las variables pueden contener un dato que podemos cambiarlo en cualquier momento o que puede contener un dato contante, nos ayuda a entender que los arrays son parecidos pero con una diferencia muy grnade que es la cantidad de datos que podemos tener en ellos.

// Array= a un contenedor el cual podemos guardar diferentes datos de diferentes colores, sabores, olores,tamaños y demas cosas.
 
frutas = ["banana", "manzana", "pera"];
document.write(frutas)



let frutas = ["banana", "manzana", "pera"];

document.write(frutas[2])
//comenzamos desde la posicion 0,, en adelante.si se coloca una posicion que no tenga ningun dato el resultado es undefined.

let frutas = ["banana", "manzana", "pera",5,6,8,98,90,87,56,45,"luis"];

document.write(frutas[11])

//Arrays asociativos 

let pc1= {
    nombre:"luispc",
    procesador: "intercore i3",
    ram: "4gb",
    espacio: "500gb"
};

let pc2=["luispc", "intercore i3", "4gb", "500gb"];

document.write(pc1["procesador"])
*/

//En esat parte tener en cuenta que el array lo llamamos con el nombre en el ejemplo 1 y en el ejemplo 2 lo llamamos simplemente con la posicion.

let pc1= {
    nombre:"luispc",
    procesador: "intercore i3",
    ram: "4gb",
    espacio: "500gb"
};

let nombre = pc1["nombre"];
let procesador= pc1["procesador"];
let ram =pc1 ["ram"];
let espacio=pc1["espacio"]

frase= `el nombre de mi pc es: ${nombre} <br>
        el procesador es: ${procesador} <br>
        la memoria ram es: ${ram} <br>
        el espacio del disco duro es: ${espacio}`;

document.write(frase);

//UTILIZA LA ETIQUETA <b>TEXTO EN NEGRITA<b/>










 
























































































