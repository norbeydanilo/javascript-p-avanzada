const comparacion = (a, b) => {
    if (a === b){
        return 0
    } else {
        return 1
    }
}

console.log(comparacion(1, 2))
console.log(comparacion(2, 2))


// ****************************************************************

// Función de segundos a minutos
const segToMin = (segundos) => {
    let minutos = segundos / 60
    return `Los ${minutos} minutos son ${segundos} segundos`
}

console.log(segToMin(120))

// Función de minutos a horas
const minToHor = (minutos) => {
    let horas = minutos / 60
    return `Los ${minutos} minutos son ${horas} horas`
}

console.log(minToHor(90))

// Función de horas a dias
const horToDia = (horas) => {
    let dias = horas / 24
    return `Los ${horas} horas son ${dias} dias`
}

console.log(horToDia(48))