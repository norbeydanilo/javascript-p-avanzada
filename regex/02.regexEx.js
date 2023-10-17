let miRegEx = /^[A-C]\w+\ses\s\w+/;

let _miRegEx = /^[A-C][a-zA-Z0-9_áéíóúüâàã]+\s[ée]s\s\w+/; // tildes \w*[a-zA-Z0-9_áéíóúü]+
let $miRegEx = /^[A-C][\w-áéíóúüâàãÇ]+\s[ée]s\s\w+/;
//let cadena = 'casamentero';
//let msg = 'as?.a \n';

let cadenas = ['AÇuàn es guapo', 'Adriano no es feo', 'Adriano deja de ser guapo', 'Adriano ya es guapo', 'No es ahora', 'Ahora es no', 'Adriano és guapo'];

for (i of cadenas) {
    sal = `¿Contiene ${i}  el patrón: ${$miRegEx.test(i)}`
    console.log(sal);
}