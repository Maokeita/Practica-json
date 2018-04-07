console.log("iniciando");

var Informacion = ("nombre":"Carlos");
var Datainfo = JSON.parse(Informacion);
console.log("El nombre "+Informacion.nombre);
console.log("El nombre "+Informacion["nombre"]);
