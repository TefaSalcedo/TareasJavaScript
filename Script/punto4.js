import { calcularDiferencia } from "./funtions.js";

document.addEventListener("DOMContentLoaded", () => {

    const botonCalculador=document.getElementById("boton")
    botonCalculador.addEventListener("click",function(){
        const fechaUnoInput=new Date (document.getElementById("fechaUno").value);
        const fechaDosInput=new Date (document.getElementById("fechaDos").value);
        const diferencia = calcularDiferencia(fechaUnoInput, fechaDosInput);

        const resultado = document.querySelector(".PPP");
        resultado.innerHTML= `<div class="hello">
        Diferencia: ${diferencia.dias} días,
         ${diferencia.horas} horas,
          ${diferencia.minutos} minutos <div>`;
    })
})

