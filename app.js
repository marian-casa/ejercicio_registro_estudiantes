const readlineSync = require("readline-sync");

const registrarEstudiantes = () => {
  const cantidadEstudiantes = readlineSync.question(
    "Ingrese la cantidad de estdudiantes a registrar:"
  );
  const estdudiantes = [];

  for (let i = 0; i < cantidadEstudiantes; i++) {
    const nombre = readlineSync.question(
      "Ingrese el nombre del estudiante ${i}:"//hay que poner acento invertido remplazando las comillas
    );
    const edad = readlineSync.question("Ingrese la edad de ${nombre}:");

    const estudiante = {
      nombre,
      edad,
    };
    estdudiantes.push(estudiante);
  }
  mostrarListaEstudiantes(estudiantes);
};

const mostrarListaEstudiantes = (estudiantes) => {
  console.log("Lista de estudiantes registrados:");
  estudiantes.forEach((estudiante) => {
    console.log("Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}");
  });
};

registrarEstudiantes();
