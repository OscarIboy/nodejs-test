function hola(nombre, miCallback) {
	setTimeout(function () {
		console.log('Hola, ' + nombre);
		miCallback(nombre);
	}, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios, ' + nombre)
        otroCallback();
    }, 800)
}

console.log('Iniciando proceso...');

hola('Oscar', function (nombre) {
    adios(nombre, function(){
        console.log('Terminando proceso...');
    })
});

// hola('Oscar', function(){})
// adios('Oscar', function(){})