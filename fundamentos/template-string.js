let nombre = 'Deadpool';
let real = 'Wade Winston';

let nombreCompleto = nombre + ' ' +  real
let nombreReal = `${ nombre } ${ real }`

// console.log(nombreCompleto)
// console.log(nombreReal)

// console.log(nombreCompleto === nombreReal)

function getNombre() {
  return nombreCompleto
}

console.log(`El nombre de: ${ getNombre() }`)