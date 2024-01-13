export function validAge(fechaentrada) {
  // traer el array que retorno la función
  const fechas = crearFechas(fechaentrada);
  console.log(fechas);
  if (fechas[0] > fechas[1]) {
    alert(`The date of birth you entered is in the future.
        Please enter a valid date of birth.`);
  }
}
export function permitAge(fechaentrada) {
  const fechas = crearFechas(fechaentrada);
  if (fechas[0] > fechas[2]) {
    alert(`Sorry, you must be at least 18 years old 
        to use this service.`);
  }
}
function crearFechas(fechaentrada) {
  const actualDate = new Date();
  const Auxilioentrada = new Date(
    fechaentrada.getFullYear(),
    fechaentrada.getUTCMonth(),
    fechaentrada.getUTCDate()
  );
  const Auxiliohoy = new Date(
    actualDate.getFullYear(),
    actualDate.getUTCMonth(),
    actualDate.getDate()
  );
  const Auxiliohace18 = new Date(
    actualDate.getFullYear() - 18,
    actualDate.getUTCMonth(),
    actualDate.getDate()
  );
  return [Auxilioentrada, Auxiliohoy, Auxiliohace18];
}

export function calcularDiferencia(fechaUno, fechaDos) {
  const diferenciaEnMilisegundos = fechaDos - fechaUno;
  // Calculamos la diferencia en días
  const diferenciaEnDias = Math.floor(
    diferenciaEnMilisegundos / (1000 * 60 * 60 * 24)
  );
  // Calculamos la diferencia en horas
  const diferenciaEnHoras = Math.floor(
    (diferenciaEnMilisegundos - diferenciaEnDias * 1000 * 60 * 60 * 24) /
      (1000 * 60 * 60)
  );
  // Calculamos la diferencia en minutos
  const diferenciaEnMinutos = Math.floor(
    (diferenciaEnMilisegundos -
      diferenciaEnDias * 1000 * 60 * 60 * 24 -
      diferenciaEnHoras * 1000 * 60 * 60) /
      (1000 * 60)
  );

  // Devolvemos un objeto con las diferencias en días, horas y minutos
  return {
    dias: diferenciaEnDias,
    horas: diferenciaEnHoras,
    minutos: diferenciaEnMinutos,
  };
}
