console.log("-------------Practica----------------");

console.log("-----------Ejercicio 01----------------");

let palabra = [
  "edificio",
  "perla",
  "estrella",
  "pescado",
  "salero",
  "biblioteca",
  "guitarra",
  "dinero",
  "música",
];

function sustantivos_f_m(palabra = []) {
  //const regex = /[a-z]+a$/i;
  const regex = /a$/i;

  for (const str of palabra) {
    regex.test(str)
      ? console.log(`La palabra ${str} es un sustantivo femenino`)
      : console.log(`La palabra ${str} es un sustantivo masculino`);
  }
}

sustantivos_f_m(palabra);

const palabrasSustantivos = [
  "edificio",
  "perla",
  "estrella",
  "pescado",
  "salero",
  "biblioteca",
  "guitarra",
  "dinero",
  "música",
];

palabrasSustantivos.forEach(function (palabra) {
  let condicion = /^(\w).+(a)$/;

  if (condicion.test(palabra)) {
    console.log(`La palabra: *${palabra}* es un sustantivo femenino`);
    return true;
  } else {
    console.log(`La palabra: *${palabra}* es un sustantivo masculino`);
    return false;
  }
});

const obj = [
  "edificio",
  "perla",
  "estrella",
  "pescado",
  "salero",
  "biblioteca",
  "guitarra",
  "dinero",
  "musica",
];

let expr = /a$/;

for (let i of obj) {
  console.log(`${i} ${expr.test(i)}`);
}

console.log("-----------Ejercicio 02----------------");

function validEmail() {
  const correo = "norbey.de-agua@s.gov.co";

  let validarEmail = /\w+@\w+\.(com|edu|gov)*(\.[a-zA-Z]{2})$/;

  if (validarEmail.test(correo)) {
    console.log("El correo es correcto");
    return true;
  } else {
    console.log("Correo incorrecto");
    return false;
  }
}

validEmail();

function correo(email) {
  //const regex = /[a-z]+@[a-z]+\.[a-z]{2,5}$/;
  const regex = /^[a-z]+@+[a-z]+.\.+com$/;

  return regex.test(email) ? "es un correo" : "no es un correo";
}

console.log(correo("davidmontiel@hotmail.com"));

// contraseña debe tener mayusculas minusculas y al menos un numero
// palabras que sean hiatos o diptongos

function pass(pass) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;

  if (pass.length >= 8 && regex.test(pass)) {
    return true;
  } else {
    return false;
  }
}

console.log(pass("a*Ñ/7A1"));

function contrasena(password) {
  const regex = /\w*[aeiou]{2}\w*/;

  return regex.test(password) ? "correcta" : "incorrecta";
}

console.log(contrasena(""));