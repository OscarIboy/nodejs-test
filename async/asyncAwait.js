async function hola(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			console.log('Hola, ' + nombre);
			resolve(nombre);
		}, 1000);
	});
}

async function hablar(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			console.log('Bla bla bla...');
			resolve(nombre);
			//reject('Hay un error');
		}, 1000);
	});
}

async function adios(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			console.log('Adios, ' + nombre);
			resolve();
		}, 1000);
	});
}

// Error, Solo se puede ejecutar await en una funcion asyncrona
//await hola(nombre);

async function main(){
    let nombre = await hola('Oscar');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre)
    console.log('Termina el proceso')
}

console.log('Empezamos el proceso')
main();
console.log('va a ser la segunda instruccion')