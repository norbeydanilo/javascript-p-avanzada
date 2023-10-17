let miRegEx = /as?.a/;
// let cadena = 'casamentero';
let msg = 'as?.a \n';

let cadenas = ['Java', 'casamentero', 'castaño', 'sabina', 'casualidad', 'asa', 'casta', 'asador', 'Canasta'];

for (i of cadenas) {
    sal = `¿Contiene ${i} el patrón ${msg} : ${miRegEx.test(i)}`
    console.log(sal);
}

/* Expresiones regulares */

expReg1 = /^[0-9]+/;
if (expReg1.test("0123") == false) {
    console.log("Es falso");
} else {
    console.log("Es verdadero");
}

expReg2 = new RegExp("^[0-9]+");
if (expReg2.test("-123") == false) {
    console.log("Es falso");
} else {
    console.log("Es verdadero");
}
