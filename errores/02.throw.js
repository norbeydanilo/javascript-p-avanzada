try {
    let suma = 5 + 5;
    console.log(`La suma es ${resultado}`);
} catch (e) {
    console.log('Se produjo un error. Referencia: ' + e);
}

/* **************************************************************** */

try {
    // Valor entre 1 y 9
    let numeroUsuario = 0; // "0" , "a", -2, 12, 5
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 9) {
        throw new Error('Número introducido no válido');
    } else {
        console.log('Sin problemas');
    }
} catch (e) {
    console.log('Se produjo un error. Referencia: ' + e);
}

/* **************************************************************** */

function sum1(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Ambos argumentos deben ser números');
    }
    return a + b;
}

try {
    console.log(sum1(3, 4)); // 7
    console.log(sum1('3', 4)); // Error
} catch (e) {
    console.error(e.message);
    console.log('Se produjo un error. Referencia: ' + e);
}

/* **************************************************************** */

function isNumeric(x) {
    return ["number", "bigint"].includes(typeof x); // se utiliza para determinar si una cadena o un array incluye un determinado elemento o subcadena. 
}

function sum(...values) { // operador "spread". permite que la función acepte un número variable de argumentos (en este caso, los números que queremos sumar). Estos argumentos se recogen en un arreglo llamado values
    if (!values.every(isNumeric)) {
        throw new TypeError("Can only add numbers");
    }
    return values.reduce((a, b) => a + b); // método de los objetos Array que ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor
    // Para saber más sobre el método reduce de los Array consulte: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/Reduce
}

console.log(sum(1, 2, 3)); // 6

try {
    sum("1", "2");
} catch (e) {
    console.error(e); // TypeError: Can only add numbers
    console.log('Se produjo un error. Referencia: '+ e);
}