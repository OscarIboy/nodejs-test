// nodemon conceptos/entorno.js

let nombre = process.env.NOMBRE || 'Sin Nombre';
let web = process.env.WEB || 'No tengo web';

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);
console.log('Hola Mundo')