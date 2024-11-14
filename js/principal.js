/*Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota 
máxima es 20, y que los estudiantes aprueban con un mínimo de 10. 
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que 
retorne los nombres de los estudiantes aprobados. 
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14} 
Función: nombresDeAprobados. 
Parámetros: estudiantes (array de objetos estudiante). 
Retorno: array de strings, con los nombres de los estudiantes aprobados */

let estudiantesAprobados = (estudiantes) => {
    let aprobados = [];
    estudiantes.forEach((estudiantes) => {
    if(estudiantes.nota >= 10)
        aprobados.push(estudiantes.nombre);
    });
    return aprobados;
}

let estudiantes = [
    {nombre: "jose", semestre: 5, nota: 18},
    {nombre: "ana",  semestre: 3, nota: 8},
    {nombre: "maria",  semestre: 5, nota: 15},
    {nombre: "jorge",  semestre: 1, nota: 9},
    {nombre: "luis", semestre: 4, nota: 14}
]

let salida = document.getElementById("salida");

salida.innerHTML = `Los estudiantes aprobados son:`
salida.innerHTML += `<br>`+JSON.stringify(estudiantesAprobados(estudiantes));