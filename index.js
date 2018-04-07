console.log("iniciando");

var Informacion = ("nombre":"Carlos");
var Datainfo = JSON.parse(Informacion);
console.log("El nombre "+Informacion.nombre);
console.log("El nombre "+Informacion["nombre"]);

var fs = required("fs");

var Archivo = fs.readFileSync("data.json");
var DataArchivo = JSON.parse(Archivo);
Console.log("El correo es "+DataArchivo.correo);
