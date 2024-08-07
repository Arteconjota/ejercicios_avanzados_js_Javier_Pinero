/*EJERCICIO 6
Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
Es decir, intercambiar el lugar de un elemento por otro dentro del array.
Retorna el array resultante.*/

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

function swap(name1, name2, array) {
    if(!array.includes(name1) || !array.includes(name2)) return;
    let name1_index = array.indexOf(name1);
    let name2_index = array.indexOf(name2);
    array.splice(name1_index, 1, name2);
    array.splice(name2_index, 1, name1);
    console.log(array);
}

swap("Mr. Fantástico", "La cosa", fantasticFour);
swap("Dr. Muerte", "La cosa", fantasticFour);
swap("La cosa", "La antorcha humana", fantasticFour);