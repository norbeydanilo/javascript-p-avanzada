try {
    let number1 = `y`
    if (isNaN(number1)) {
        throw new Error("Cuidado! No se reciben datos no numericos");
    }
} catch (error) {
    console.log(`${error}`)
} finally {
    console.log("Análisis de datos terminado")
}

// ****************************************************************

function isAnumber(a, b) {
    let numAux = Number(a)
    let numAux2 = Number(b)
    if (isNaN(numAux) && isNaN(numAux2)) {
        throw new Error('Escriba solo numeros');
    }
    return `Los numeros son ${numAux} y ${numAux2}`
}

try {
    console.log(isAnumber("355555", 5))
} catch (err) {
    console.log(err);
    console.log(err.message);
} finally {
    console.log('Análisis de datos terminado')
}

// Usar instaceof para evitar que isNaN reconozca un string como un numero

// ****************************************************************

function calculadoraCientifica(operacion, numero_1, numero_2) {
    try {
        // verificar si las entradas son númericas
        if (typeof numero_1 !== 'number' || typeof numero_2 !== 'number') {
            throw new Error("Las entradas deben ser numéricas");
        }
        switch (operacion) {
            case "suma":
                return numero_1 + numero_2;
                break;
            case "resta":
                return numero_1 - numero_2;
                break;
            case "multiplicacion":
                return numero_1 * numero_2;
                break;
            case "division":
                if (numero_2 === 0) {
                    throw new Error("No se puede dividir por cero");
                }
                return numero_1 / numero_2;
                break;
            case "potencia":
                return numero_1 ** numero_2;
                break;
            case "raiz":
                if (numero_1 < 0) {
                    throw new Error("No se puede calcular la raíz de un número negativo");
                }
                return Math.sqrt(numero_1);
                break;
            default:
                throw new Error("Operación no válida");
                return resultado;
        }
    } catch (error) {
        return error.message;
    }
}

console.log(calculadoraCientifica('suma', "5", 3)); // Suma
console.log(calculadoraCientifica('division', 8, 0)); // División por cero
console.log(calculadoraCientifica('raiz', -1)); // Raíz de número negativo

// Falta verificar que el caso para raiz reciba un solo parámetro (puede ser un condicional o parámetro indefinido)