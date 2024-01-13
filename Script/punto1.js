document.addEventListener("DOMContentLoaded", () => {

    const valor = document.getElementById("numeroentrada");
    const botonCalcular = document.getElementById("boton");
    const resultadoPrint = document.getElementById("texto");
    
    botonCalcular.addEventListener("click", function () {
        const dia = new Date()
        dia.setDate(dia.getDate() + Number(valor.value));
        //(Formato en-GB)
        const fecha1 = dia.toLocaleString("en-GB");
        //(Formato en-US, weekday) 
        const fecha2 = dia.toLocaleString("en-US",{
            weekday: "long"});
        //(Año, mes, día)
        const fecha3 = dia.toLocaleString("es-CO",{
            year: "numeric",
            month: "long",
            day: "numeric"});
        const fecha4 = dia.toLocaleString("es-CO",{
            era:"long"});

        resultadoPrint.innerHTML = 
        `En ${valor.value} días será: <br>
        resultado 1 : ${fecha1}
        <br> resultado 2 : ${fecha2} 
        <br> resultado 3 : ${fecha3} 
        <br> resultado 4 : ${fecha4} `
    });
});
